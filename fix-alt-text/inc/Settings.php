<?php

namespace FixAltText;

// Prevent Direct Access
( defined( 'ABSPATH' ) ) || die;

/**
 * Class Settings - Contains all the settings information
 *
 * @package FixAltText
 * @since   1.0.0
 */
final class Settings extends Network_Settings {

	protected string $option = FIXALTTEXT_OPTION; // Where we can find these settings in the option table
	protected int $site_id = FIXALTTEXT_CURRENT_SITE_ID; // The site id that these settings are associated with

	/**
	 * Constructs the Settings object with provided data or gets the data from database
	 *
	 * @package FixAltText
	 * @since   1.0.0
	 *
	 * @param array | object $settings
	 */
	public function __construct( $settings = [] ) {

		if ( ! empty( $settings ) ) {
			// Load from provided data
			$this->load( $settings );
		}

		if ( empty( $settings ) || // No settings to load
			( is_array( $settings ) && isset( $settings['site_id'] ) ) || // Load from site ID
			( is_object( $settings ) && isset( $settings->site_id ) ) // Load from site ID
		) {
			// Load from database

			if ( is_multisite() ) {
				switch_to_blog( $this->site_id );
			}

			// Clear cache
			wp_cache_delete( $this->option, 'options' );

			// Get from the DB
			$db_settings = get_option( $this->option );

			if ( ! empty( $db_settings ) ) {

				// Convert to an array just in case
				$db_settings = (array) $db_settings;

				$this->overwrite( $db_settings );

				/**
				 * Add forward compatibility for scan_taxonomies
				 *
				 * @package FixAltText
				 * @since   1.1.0
				 */
				if ( ! isset( $db_settings['scan_taxonomies'] ) ) {
					$this->set( 'scan_taxonomies', Get::recommended_taxonomies() );
				}

			} else {

				// set default values
				$this->set_default();

				if ( ! defined( 'FIXALTTEXT_SAVING' ) ) {
					// Save Default Settings
					$this->save( false );
				}
			}

			if ( is_multisite() ) {
				restore_current_blog();
			}
		}

	}

	/**
	 * Saves the current data that is loaded in the object to the database
	 *
	 * @package FixAltText
	 * @since   1.0.0
	 *
	 * @param bool $display_notice Used to turn off admin notices when ran outside the admin context
	 */
	public function save( bool $display_notice = true ): Settings {

		if ( ! defined( 'FIXALTTEXT_SAVING' ) ) {
			// Used to detect that we are in the process of saving. Prevents infinite loop scenarios
			define( 'FIXALTTEXT_SAVING', true );
		}

		$existing_settings = Settings::get_current_settings( true );

		if ( $this == $existing_settings && ! empty( get_option( $this->option ) ) ) {
			$response = 2;
		} else {

			if ( is_multisite() ) {
				switch_to_blog( $this->site_id );
			}

			// Make sure we check to see if a scan is needed
			$scan_needed = $this->is_scan_needed( $existing_settings );

			$array = [];

			// Convert into an array before storing
			foreach ( $this as $property => $value ) {
				$array[ $property ] = $value;
			}

			unset( $array['sites'] );

			// Save settings
			if ( $response = update_option( $this->option, $array, false ) ) {
				// Clear wp cache
				wp_cache_delete( $this->option, 'options' );
			}

			$existing_settings = Settings::get_current_settings( true );

			if ( is_multisite() ) {
				restore_current_blog();
			}

		}

		if ( $display_notice ) {
			// Display admin notices

			if ( $response ) {
				if ( 2 === $response ) {
					Admin::add_notice( [
						'message' => __( 'Settings saved.', FIXALTTEXT_SLUG ),
						'alert_level' => 'success',
						'dismiss' => true,
					] );
				} else {
					Admin::add_notice( [
						'message' => __( 'Settings have been saved.', FIXALTTEXT_SLUG ),
						'alert_level' => 'success',
						'dismiss' => true,
					] );

					if ( $scan_needed ) {
						Admin::add_notice( [
							'message' => __( 'A new scan is needed. Start a new scan on the dashboard.', FIXALTTEXT_SLUG ),
							'alert_level' => 'warning',
							'dismiss' => true,
						] );
					}
				}

			} else {
				Admin::add_notice( [
					'message' => __( 'Error: Settings could not be saved.', FIXALTTEXT_SLUG ),
					'alert_level' => 'error',
					'dismiss' => true,
				] );
			}
		}

		return $existing_settings;

	}

	/**
	 * Gets the current settings
	 *
	 * @package FixAltText
	 * @since   1.0.0
	 *
	 * @param bool $from_db
	 *
	 * @return \FixAltText\Settings
	 */
	public static function get_current_settings( bool $from_db = false ): Settings {
		global $fixalttext;

		$settings = $fixalttext['settings'] ?? [];

		if ( $from_db || empty( $settings ) ) {

			if ( is_multisite() ) {
				$network_settings = Network_Settings::get_current_settings( $from_db );
				$site_using_network_settings = $network_settings->using_network_settings();

				if ( $site_using_network_settings ) {
					$settings = new Settings( $network_settings );
				} else {
					$settings = new Settings();
				}
			} else {
				// Single Site
				$settings = new Settings();
			}

		}

		// Set settings cache as object type
		$fixalttext['settings'] = $settings;

		// Return the value as desire type
		return $fixalttext['settings'];

	}

	/**
	 * Compare the settings against the current settings to see if a new full scan is needed
	 *
	 * @package FixAltText
	 * @since   1.0.0
	 *
	 * @param \FixAltText\Settings $existing_settings
	 *
	 * @return bool
	 */
	private function is_scan_needed( Settings $existing_settings ): bool {

		$scan_needed = $this->check_differences( $existing_settings );

		if ( ! empty( $scan_needed ) ) {

			$codes = '';
			foreach ( $scan_needed as $needed ) {
				$codes .= '[' . $needed . ']';
			}

			$user = wp_get_current_user();

			$scan = Scans::get_current( true );
			$scan->set_needed( true );
			$scan->save();

			Notification::add_notification( [
				'message' => sprintf( __( 'The scan settings have been changed by %s. A new scan will need to be run to reflect these settings. %s', FIXALTTEXT_SLUG ), $user->display_name, $codes ),
				'link_url' => FIXALTTEXT_ADMIN_URL,
				'link_anchor_text' => __( 'View Scan Options on Dashboard', FIXALTTEXT_SLUG ),
				'alert_level' => 'warning',
			] );

		}

		return ! empty( $scan_needed );

	}

}

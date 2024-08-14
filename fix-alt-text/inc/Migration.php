<?php

namespace FixAltText;

// Prevent Direct Access
( defined( 'ABSPATH' ) ) || die;

use FixAltText\HelpersLibrary\Migration_Library as Migration_Library;

/**
 * Class Migration
 *
 * @package FixAltText
 * @since   1.2.0
 */
final class Migration extends Migration_Library {

	/**
	 * Runs all the migrations
	 *
	 * @package FixAltText
	 * @since   1.2.0
	 *
	 * @param string $db_version
	 *
	 * @return void
	 */
	protected static function run_all( string $db_version ): void {

		if ( version_compare( '1.3.0', $db_version, '>' ) ) {
			self::v1_3_0();
		}

	}

	/**
	 * Runs the migration script for version 1.3.0
	 *
	 * @package FixAltText
	 * @since   1.3.0
	 *
	 * @return array
	 */
	public static function v1_3_0(): void {

		/**
		 * Bug Fix: WP Crons did not have a consistent prefix
		 */
		Run::remove_crons();

		/**
		 * Cancel any scans that may be stuck
		 */
		Scan::stop_all_scans( __( 'All scans cancelled due to migration to Fix Alt Text version 1.2.0.', FIXALTTEXT_SLUG ) );

		/**
		 * Improvement: DB table columns tuned for performance
		 */
		$db_table_no_prefix = 'fixalttext_images';

		// delete temp table
		Run::drop_table( $db_table_no_prefix );

		// create new db table
		Run::create_table( GET::table( $db_table_no_prefix ) );

		$scan = Scans::get_current( true );
		$scan->set_needed( true );
		$scan->save();

		Notification::add_notification( [
			'message' => __( 'Fix Alt Text upgraded to version 1.3.0. Previous scan data cleared and a new scan is required to detect newly added issues.', FIXALTTEXT_SLUG ),
			'link_url' => FIXALTTEXT_ADMIN_URL,
			'link_anchor_text' => __( 'Start New Scan', FIXALTTEXT_SLUG ),
			'alert_level' => 'notice',
		] );
	}

}
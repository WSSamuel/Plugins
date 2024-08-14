<?php

namespace FixAltText;

// Prevent Direct Access
( defined( 'ABSPATH' ) ) || die;

use FixAltText\HelpersLibrary\Get_Library as Get_Library;
use function Network_Media_Library\get_site_id;

/**
 * Class Get - Get the information you need
 */
class Get extends Get_Library {

	/**
	 * Abstract method to get the tables.
	 * NOTICE: Table name should NOT include site prefix.
	 */
	public static function tables(): array {

		return [
			'fixalttext_images' => [
				'name' => 'fixalttext_images',
				'columns' => [
					[
						'name' => 'id',
						'type' => 'bigint',
						'null' => false,
						'auto-increment' => true,
					],
					[
						'name' => 'from_post_id',
						'type' => 'bigint',
						'null' => false,
						'default' => '0',
					],
					[
						'name' => 'from_post_type',
						'type' => 'varchar(20)',
						'null' => false,
					],
					[
						'name' => 'from_where',
						'type' => 'varchar(20)',
						'null' => false,
					],
					[
						'name' => 'from_where_key',
						'type' => 'varchar(255)',
						'null' => false,
					],
					[
						'name' => 'image_index',
						'type' => 'smallint',
						'null' => true,
					],
					[
						'name' => 'image_url',
						'type' => 'text',
						'default' => '',
						'null' => true,
					],
					[
						'name' => 'image_alt_text',
						'type' => 'varchar(255)',
						'null' => true,
					],
					[
						'name' => 'image_ext',
						'type' => 'varchar(20)',
						'null' => true,
					],
					[
						'name' => 'image_issues',
						'type' => 'varchar(100)',
						'null' => true,
					],
				],
				'index' => [
					'primary' => 'id',
					'key' => [
						'from_post_id',
						'from_post_type',
						'from_where',
						'image_ext',
						'image_issues',
					],
				],
			],
		];
	}

	/**
	 * Retrieves the core blocks that can need force alt text
	 *
	 * @package FixAltText
	 * @since   1.0.0
	 *
	 * @return array
	 */
	public static function blocks(): array {

		return [
			'core/image',
			'core/media-text',
			'core/gallery',
		];

	}

	/**
	 * Retrieves the other areas where we can force alt text
	 *
	 * @package FixAltText
	 * @since   1.0.0
	 *
	 * @return array
	 */
	public static function others(): array {

		return [
			'Media Library',
		];
	}

	/**
	 * Returns an array of image extensions supported by this plugin
	 *
	 * Note: Image extensions are set as the key so that we can check an image extension using isset() versus in_array()
	 *
	 * @return array
	 */
	static function allowed_extensions(): array {

		$extensions = [];

		$mime_types = self::allowed_mime_types();

		if ( ! empty( $mime_types ) ) {
			foreach ( $mime_types as $mime ) {
				foreach ( $mime as $ext ) {
					$extensions[ $ext ] = $mime;
				}
			}
		}

		return $extensions;
	}

	/**
	 * Returns an array of image mime types supported by this plugin
	 *
	 * Note: Mime types are set as the key so that we can check a mime type using isset() versus in_array()
	 * @link https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
	 *
	 * @return array
	 */
	static function allowed_mime_types(): array {
		return [
			'image/apng' => [ 'apng' ],
			'image/avif' => [ 'avif' ],
			'image/gif' => [ 'gif' ],
			'image/jpe' => [ 'jpe' ],
			'image/jpeg' => [
				'jpg',
				'jpeg',
				'jfif',
				'pjpeg',
				'pjp',
			],
			'image/png' => [ 'png' ],
			'image/svg+xml' => [ 'svg' ],
			'image/webp' => [ 'webp' ],
		];
	}

	/**
	 * Check to see if given URL is valid
	 *
	 * @package FixAltText
	 * @since 1.2.0
	 *
	 * @param string $url
	 *
	 * @return bool
	 */
	public static function is_valid_image_url( string $url ): bool {

		$valid = true;

		if (
			strpos( $url, 'https://' ) === false && strpos( $url, 'http://' ) === false && strpos( $url, '//' ) === false && strpos( $url, '/' ) === false ) {
			// Make sure the URL starts with appropriate prefix
			$valid = false;
		} elseif ( strip_tags( $url ) != $url ) {
			// Make sure there is no code in there
			$valid = false;
		}

		return $valid;
	}

	/**
	 * Check to see if a provided extension is allowed
	 *
	 * @package FixAltText
	 * @since 1.2.0
	 *
	 * @param string $extension
	 *
	 * @return bool
	 */
	public static function is_valid_image_ext( string $extension ): bool {

		$valid = false;

		$extension = trim( strtolower( $extension ) );

		$allowed_extensions = Get::allowed_extensions();

		if ( array_key_exists( $extension, $allowed_extensions ) ) {
			$valid = true;
		}

		return $valid;
	}

}

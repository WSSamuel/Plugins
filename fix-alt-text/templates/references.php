<?php

namespace FixAltText;

/**
 * Alt Text
 *
 * This page displays all the references to images in the site that are missing Alt Text
 *
 */

// Prevent Direct Access (require main file to be loaded)
( defined( 'ABSPATH' ) ) || die;

Admin::check_permissions();

Admin::display_header();
echo Get::subheader();

include( FIXALTTEXT_TABLES_DIR . '/References_Table.php' );
new References_Table();

Admin::display_footer();

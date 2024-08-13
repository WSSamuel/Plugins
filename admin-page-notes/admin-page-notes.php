<?php
/**
 * Plugin Name: Admin Page Notes
 * Plugin URI: https://wordpress.org/plugins/admin-page-notes/
 * Description: Gives administrators the ability to add page notes to certain pages that will prominently display special instructions for all users editing those pages.
 * Version: 2.1.5
 * Author: Anadar Professional Services
 * Author URI: https://www.anadarservices.com
 * Requires at least: 5.7
 * Tested up to: 6.4.1
 * Requires PHP: 7.4
 * Text Domain: gb-page-notes
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/*----------------------------------------------------------------------------*
 * Dashboard and Administrative Functionality
 *----------------------------------------------------------------------------*/

if (is_admin() && (!defined('DOING_AJAX') || !DOING_AJAX)) {

    require_once(plugin_dir_path(__FILE__) . 'admin/page-notes-admin.php');
    add_action('plugins_loaded', array('Page_Notes_Admin', 'get_instance'));
    add_filter('manage_posts_columns', 'add_notes_column', 5);
    add_filter('manage_pages_columns', 'add_notes_column', 5);

    function add_notes_column($cols)
    {
        $cols['admin_notes'] = __('Notes');
        return $cols;
    }

    add_action('manage_posts_custom_column', 'new_display_admin_notes_column', 5, 2);
    add_action('manage_pages_custom_column', 'new_display_admin_notes_column', 5, 2);

    function new_display_admin_notes_column($col, $id)
    {
        switch ($col) {
            case 'admin_notes':
                echo implode(' ', array_slice(explode(' ', get_post_meta($id, 'gb_admin_note', true)), 0, 15));;
                break;
        }
    }


    // This function will add custom links to the admin page
    function customize_links_on_plugin_list($links)
    {
        // Add your custom links as array elements
        $donations_link = '<a href="https://anadarservices.com/donations/">Donations</a>';
        $support_link = '<a href="https://wordpress.org/support/plugin/admin-page-notes/">Support</a>';

        // Add your links at the beginning of the array
        array_unshift($links, $donations_link, $support_link);

        return $links;
    }


    add_filter('plugin_action_links_admin-page-notes/admin-page-notes.php', 'customize_links_on_plugin_list');


    function adjust_meta_boxes() {
        global $post;
        $post_types = get_post_types();

        $value = get_post_meta( $post->ID, 'gb_admin_note', true );

        if ($value) {
            foreach ($post_types as $type) {
                // First, remove the existing meta box
                remove_meta_box('editor-note-view', $type, 'side');

                // Then, re-add it with a new priority
                add_meta_box(
                    'editor-note-view',
                    __('Notes from Administrator', 'gb-page-notes'),
                    'editor_page_note_view_callback', // Callback function for the content of the box
                    $type,
                    'side',
                    'high'  // Adjust the priority as needed
                );
            }
        }
    }

// Hook into the 'do_meta_boxes' action
   // add_action('do_meta_boxes', 'adjust_meta_boxes');


}

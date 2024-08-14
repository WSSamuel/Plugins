<?php 
/**
 * @package     VikWidgetsLoader
 * @subpackage  widget
 * @author      E4J s.r.l.
 * @copyright   Copyright (C) 2018 E4J s.r.l. All Rights Reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE
 * @link        https://vikwp.com
 */

defined('ABSPATH') or die('No script kiddies please!');

class vikwp_customtext extends VikWL_Widget {
	function __construct() {
		function vikwp_customtext_add_style() {
			if (is_active_widget(false, false, 'vikwp_customtext', false)) {
				wp_register_style('vikwl_style', VIKWIDGETSLOADER_ASSETS_URI . 'css/vikwl_styles.css', false, 1.0, 'all');
				wp_enqueue_style('vikwl_style');
			}
		}
		add_action('wp_enqueue_scripts', 'vikwp_customtext_add_style'); 

		parent::__construct(
			// Path of the file
			dirname(__FILE__),
			
			// Base ID of your widget
			'vikwp_customtext', 
			 
			// Widget name will appear in UI
			__('VikWP Custom Text', 'vikwidgetsloader'), 
			 
			// Widget description
			array( 'description' => __( 'This widget display the text you add on the TextArea of it', 'vikwidgetsloader' ), ) 
		);
	}
}

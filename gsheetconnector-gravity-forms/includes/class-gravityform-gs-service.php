<?php

/**
 * Service class for Google Sheet Connector
 * @since 1.0
 */
if (!defined('ABSPATH')) {
   exit; // Exit if accessed directly
}

/**
 * Gs_Connector_Service Class
 *
 * @since 1.0
 */
class GFGS_Connector_Service {

   protected $_short_title = 'Googlesheet';

   /**
    *  Set things up.
    *  @since 1.0
    */
   public function __construct() {
      add_action('wp_ajax_verify_code_integation', array($this, 'verify_code_integation'));
      add_action('wp_ajax_deactivate_gs_code_integation', array($this, 'deactivate_gs_code_integation'));
      add_action('wp_ajax_gfgs_clear_log', array($this, 'gfgs_clear_logs'));
      // clear debug logs method using ajax for system status tab
    add_action('wp_ajax_gf_clear_debug_log', array($this, 'gf_clear_debug_logs'));
   }

   /**
    * AJAX function - verify_code_integation
    * @since 1.0
    */
   public function verify_code_integation() {
      try {
         // nonce check
         check_ajax_referer('gf-ajax-nonce', 'security');

         /* sanitize incoming data */
         $Code = sanitize_text_field($_POST["code"]);

         update_option('gfgs_access_code', $Code);

         if (get_option('gfgs_access_code') != '') {
            include_once( GRAVITY_GOOGLESHEET_ROOT . '/lib/google-sheets.php');
            Gfgsc_googlesheet::preauth(get_option('gfgs_access_code'));
            //update_option('gfgs_verify', 'valid');
            // After validation fetch sheetname and tabs from the user account 
            wp_send_json_success();
         } else {
            update_option('gfgs_verify', 'invalid');
            wp_send_json_error();
         }
      } catch (Exception $e) {
           // Handle any exceptions thrown during verification
           error_log('Error during verification: ' . $e->getMessage());
           wp_send_json_error();
      }
   }


   

   /**
    * AJAX function - deactivate activation
    * @since 1.0
    */
   public function deactivate_gs_code_integation() {
      try {
         // nonce check
         check_ajax_referer('gf-ajax-nonce', 'security');

         if (get_option('gfgs_token') !== '') {

            $accesstoken = get_option( 'gfgs_token' );
            $client = new Gfgsc_googlesheet();
            $client->revokeToken_auto($accesstoken);
            
            delete_option('gfgs_feeds');
            delete_option('gfgs_sheetId');
            delete_option('gfgs_token');
            delete_option('gfgs_access_code');
            delete_option('gfgs_verify');
            wp_send_json_success();
         } else {
            wp_send_json_error();
         }
      } catch (Exception $e) {
           // Handle any exceptions thrown during deactivation
           error_log('Error during deactivation: ' . $e->getMessage());
           wp_send_json_error();
      }   
   }

   /**
    * AJAX function - clear log file
    * @since 1.0
    */
   public function gfgs_clear_logs() {
      try {
      // nonce check
      check_ajax_referer('gf-ajax-nonce', 'security');

      $wpexistDebugFile = get_option('gf_gs_debug_log_file');
      $clear_file_msg ='';
      // check if debug unique log file exist or not then exists to clear file
      if (!empty($wpexistDebugFile) && file_exists($wpexistDebugFile)) {
       
       $handle = fopen ( $wpexistDebugFile, 'w');
        
        fclose( $handle );
        $clear_file_msg ='Logs are cleared.';
       }
       else{
        $clear_file_msg = 'No log file exists to clear logs.';
       }
           
       wp_send_json_success($clear_file_msg);

      
      } catch (Exception $e) {
         // Handle any exceptions thrown during deactivation
         error_log('Error during deactivation: ' . $e->getMessage());
         wp_send_json_error();
      }   

   }

    /**
    * AJAX function - clear log file for system status tab
    * @since 1.0
    */
    public function gf_clear_debug_logs() {
    // nonce check
    check_ajax_referer('gf-ajax-nonce', 'security');
    $handle = fopen(WP_CONTENT_DIR . '/debug.log', 'w');
    fclose($handle);
    wp_send_json_success();
   }

   /**
    * Function - fetch contant form list that is connected with google sheet
    * @since 1.0
    */
   public function get_forms_connected_to_sheet() {
      global $wpdb;
      $table_name = $wpdb->base_prefix . 'gf_form';
      // check if a table exists in the database
      $result = $wpdb->get_var("SHOW TABLES LIKE '$table_name'");
      $query = '';

      if ($result == $table_name) {
         $query = $wpdb->get_results("SELECT id,title from " . $wpdb->prefix . "gf_form ORDER BY id");
          // $query = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}gf_form AS gf JOIN {$wpdb->base_prefix}postmeta AS pm ON gf.id=pm.post_id WHERE pm.meta_key = 'gfgs_settings'");
         
     }
      
      return $query;
   }

}
$GFGS_Connector_Service = new GFGS_Connector_Service();
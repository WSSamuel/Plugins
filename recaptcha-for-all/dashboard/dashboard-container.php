<?php

/**
 * @ Author: Bill Minozzi
 * @ Copyright: 2020 www.BillMinozzi.com
 * @ Modified time: 2021-03-02 12:38:04
 */
global $recaptcha_checkversion;
if (!defined('ABSPATH')) {
   die('We\'re sorry, but you can not directly access this file.');
}

?>
<div id="recaptcha-for-all-logo">
   <img src="<?php echo esc_attr(RECAPTCHA_FOR_ALL_IMAGES); ?>/logo.png" width="250">
</div>
<?php
//






$nonce = isset($_GET['_wpnonce']) ? sanitize_text_field($_GET['_wpnonce']) : '';
if (!isset($_POST['process']) and isset($_GET['tab']) and !wp_verify_nonce($nonce, 'recaptcha_for_all')) {

   //if(isset($_GET['tab']) and $_GET['tab'] !== 'tools'){
   if (isset($_GET['tab']) && $_GET['tab'] === 'tools' && current_user_can('manage_options')) {
      $active_tab = sanitize_text_field($_GET['tab']);
   } else {
      //echo '<div class="error"><p>Invalid Nonce!!!</p></div>';
      //die();
      $active_tab = 'dashboard';
   }
} else {
   if (isset($_GET['tab']))
      $active_tab = sanitize_text_field($_GET['tab']);
   else
      $active_tab = 'dashboard';
}
//

$nonce = wp_create_nonce('recaptcha_for_all');



?>
<h2 class="nav-tab-wrapper">

   <!--
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=dashboard" class="nav-tab"><?php esc_attr_e("Dashboard", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=settings" class="nav-tab"><?php esc_attr_e("General Settings", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=keys" class="nav-tab"><?php esc_attr_e("Manage Keys", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=pages" class="nav-tab"><?php esc_attr_e("Manage Pages", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=message" class="nav-tab"><?php esc_attr_e("Manage Message", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=whitelist" class="nav-tab"><?php esc_attr_e("Manage Whitelist", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=design" class="nav-tab"><?php esc_attr_e("Design", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=analytics" class="nav-tab"><?php esc_attr_e("Analytics", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=test" class="nav-tab"><?php esc_attr_e("Test", "recaptcha-for-all"); ?></a>
    <a href="tools.php?page=recaptcha_for_all_admin_page&tab=tools" class="nav-tab"><?php esc_attr_e("More Tools", "recaptcha-for-all"); ?></a>
-->

   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=dashboard&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Dashboard", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=settings&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("General Settings", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=keys&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Manage Keys", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=pages&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Manage Pages", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=message&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Manage Message", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=whitelist&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Manage Whitelist", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=design&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Design", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=analytics&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Analytics", "recaptcha-for-all"); ?></a>
   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=test&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("Test", "recaptcha-for-all"); ?></a>


   <a href="tools.php?page=recaptcha_for_all_admin_page&tab=tools&_wpnonce=<?php echo esc_attr($nonce); ?>" class="nav-tab"><?php esc_attr_e("More Tools", "recaptcha-for-all"); ?></a>


</h2>
<?php

echo '<div id="recaptcha_for_all-dashboard-wrap">';
echo '<div id="recaptcha_for_all-dashboard-left">';



if ($active_tab == 'keys') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-keys.php');
} elseif ($active_tab == 'settings') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-settings.php');
} elseif ($active_tab == 'message') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-message.php');
} elseif ($active_tab == 'whitelist') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-whitelist.php');
} elseif ($active_tab == 'pages') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-pages.php');
} elseif ($active_tab == 'design') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-design.php');
} elseif ($active_tab == 'tools') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/tools.php');
} elseif ($active_tab == 'analytics') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-analytics.php');
} elseif ($active_tab == 'test') {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard-test.php');
} else {
   require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/dashboard.php');
}
//

echo '</div> <!-- "recaptcha_for_all-dashboard-left"> -->';
echo '<div id="recaptcha_for_all-dashboard-right">';
echo '<div id="recaptcha_for_all-containerright-dashboard">';
require_once(RECAPTCHA_FOR_ALLPATH . 'dashboard/mybanners.php');
echo '</div>';
echo '</div> <!-- "recaptcha_for_all-dashboard-right"> -->';
echo '</div> <!-- "recaptcha_for_all-dashboard-wrap"> -->';

?>
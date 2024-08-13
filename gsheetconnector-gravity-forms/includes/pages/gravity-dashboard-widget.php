<?php
/*
 * Gravity Forms Google sheet connector Dashboard Widget
 * @since 1.0
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
   exit();
}
?>
<div class="dashboard-content">
   <?php
   $gs_connector_service = new GFGS_Connector_Service();

   $forms_list = $gs_connector_service->get_forms_connected_to_sheet();
   ?>
   <div class="main-content">
      <div>
         <h3><?php echo __("Gravity Forms connected with Google Sheets.", "gsheetconnector-gravityforms"); ?></h3>
         <ul class="contact-form-list">
            <?php
            if (!empty($forms_list)) {
               foreach ($forms_list as $key => $value) {
                  if ($value->title !== "") {
                     ?>
                     <a href="<?php echo admin_url('admin.php?page=gf_edit_forms&view=settings&subview=gsheetconnector-gravityforms&id=' . $value->id . ''); ?>" target="_blank">
                        <li style= "list-style:none;"><?php echo $value->title; ?></li>
                     </a>
                  <?php } else {
                     ?>
                     <li><span><?php echo __("No Gravity Forms are connected with Google Sheets.", "gsheetconnector-gravityforms"); ?></span></li>
                     <?php
                  }
               }
            } else {
               ?>
               <li><span><?php echo __("No Gravity Forms are connected with Google Sheets.", "gsheetconnector-gravityforms"); ?></span></li>
               <?php
            }
            ?>
         </ul>
      </div>
   </div> <!-- main-content end -->
</div> <!-- dashboard-content end -->
<style type="text/css">
.postbox-header .hndle {
justify-content: flex-start !important;
}
</style>
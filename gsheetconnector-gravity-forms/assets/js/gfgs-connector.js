jQuery(document).ready(function () {
   
   var sheetId    = jQuery('#gf-gs-sheet-id').val();
   var tabId      = jQuery('#gf-gs-tab-id').val();


   if(sheetId!="" && tabId!=""){
      jQuery("#sheet_url").html('<label><b>Google Sheet URL:</b> </label><a class="gr_sheet_url" href="https://docs.google.com/spreadsheets/d/'+sheetId+'/edit#gid='+tabId+'" target="_blank">Sheet URL</a>');
      // jQuery("#sheet_iframe").html('<iframe src="https://docs.google.com/spreadsheets/d/'+sheetId+'/edit#gid='+tabId+'" style="position:absolute; width:100%; height:100%; border:none;  padding:0; overflow:hidden; z-index:999999;border: 2px solid #000000; margin-left: -22px; margin-top: 20%;" />');
   
   }
   else { 
   if(sheetId!="") {
       var tabId = jQuery('#gf-gs-tab-id').val(0);
       var tabId = 0;
        jQuery("#sheet_url").html('<label><b>Google Sheet URL:</b> </label><a class="gr_sheet_url" href="https://docs.google.com/spreadsheets/d/'+sheetId+'/edit#gid='+tabId+'" target="_blank">Sheet URL</a>');
   }
   
}
   jQuery("#gr_pre_sheet").on('click',function(){
      console.log('here scroll');
      jQuery([document.documentElement, document.body]).animate({
        scrollTop: jQuery("#sheet_iframe").offset().top
         }, 1000);
   });
   /**
    * verify the api code
    * @since 1.0
    */
   jQuery(document).on('click', '#save-code', function () {
      jQuery(".loading-sign").addClass("loading");
      var data = {
         action: 'verify_code_integation',
         code: jQuery('#gfgs-code').val(),
         security: jQuery('#gf-ajax-nonce').val()
      };
      jQuery.post(ajaxurl, data, function (response) {
         if (response == -1) {
            return false; // Invalid nonce
         }

         if (!response.success) {


            jQuery(".loading-sign").removeClass("loading");
            jQuery("#gsheet-validation-message").empty();
            jQuery("<span class='error-message'>Access code Can't be blank</span>").appendTo('#gsheet-validation-message');
         } else {
            jQuery(".loading-sign").removeClass("loading");
            jQuery("#gsheet-validation-message").empty();
            jQuery("<span class='gs-valid-message'>Your Google Access Code is Authorized and Saved.</span>").appendTo('#gsheet-validation-message');
            // setTimeout(function () {
            //    location.reload();
            // }, 7000);

            setTimeout(function () {
               window.location.href = jQuery("#redirect_auth_gravityforms").val();
            }, 1000);
         }
      });

   });
   /**
    * deactivate the api code
    * @since 1.0
    */
   jQuery(document).on('click', '#deactivate-log', function () {
      jQuery(".loading-sign-deactive").addClass("loading");
      var txt;
      var r = confirm("Are You sure you want to deactivate Google Integration ?");
      if (r == true) {
         var data = {
            action: 'deactivate_gs_code_integation',
            security: jQuery('#gf-ajax-nonce').val()
         };
         jQuery.post(ajaxurl, data, function (response) {
            if (response == -1) {
               return false; // Invalid nonce
            }

            if (!response.success) {
               alert('Error while deactivation');
               jQuery(".loading-sign-deactive").removeClass("loading");
               jQuery("#deactivate-message").empty();

            } else {
               jQuery(".loading-sign-deactive").removeClass("loading");
               jQuery("#deactivate-message").empty();
               jQuery("<span class='gsheet-valid-message'>Your account is removed. Reauthenticate again to integrate gravityforms with Google Sheet.</span>").appendTo('#deactivate-message');
               setTimeout(function () {
                  location.reload();
               }, 1000);
            }
         });
      } else {
         jQuery(".loading-sign-deactive").removeClass("loading");
      }



   });

   /**
    * Clear debug
    */
   jQuery(document).on('click', '.clear-debug', function () {
      jQuery(".clear-loading-sign").addClass("loading");
      var data = {
         action: 'gfgs_clear_log',
         security: jQuery('#gf-ajax-nonce').val()
      };
      jQuery.post(ajaxurl, data, function (response) {
         if (response == -1) {
            return false; // Invalid nonce
         }
       var clear_msg = response.data;
         if (response.success) {
            jQuery(".clear-loading-sign").removeClass("loading");
            jQuery("#gsheet-validation-message").empty();
            jQuery("<span class='gs-valid-message'>"+clear_msg+"</span>").appendTo('#gsheet-validation-message');
            setTimeout(function () {
                        location.reload();
                    }, 1000);
         }
      });
   });
/**
    * Clear debug for system status tab
    */
   jQuery(document).on('click', '.clear-content-logs-gf', function () {

      jQuery(".clear-loading-sign-logs-gf").addClass("loading");
      var data = {
         action: 'gf_clear_debug_log',
         security: jQuery('#gf-ajax-nonce').val()
      };
      jQuery.post(ajaxurl, data, function ( response ) {
         if (response == -1) {
            return false; // Invalid nonce
         }
         
         if (response.success) {
            jQuery(".clear-loading-sign-logs-gf").removeClass("loading");
            jQuery('.clear-content-logs-msg-gf').html('Logs are cleared.');
            setTimeout(function () {
                        location.reload();
                    }, 1000);
         }
      });
   });
 


      /**
     * Display Error logs
     */
    jQuery(document).on('click', '.closeView', function () {
            jQuery('.closeView').text("View").removeClass('closeView');
            jQuery('button').addClass('gravity-logs');
            jQuery('.system-Error-logs-gf').toggle();
    });
     jQuery(document).on('click', '.gravity-logs', function () {
            jQuery('.gravity-logs').text("Close").addClass('closeView');
            jQuery('button').removeClass('gravity-logs');
            jQuery('.system-Error-logs-gf').toggle();
        
    });
    jQuery(document).ready(function($) {
        // Hide .gf-system-Error-logs initially
        $('.system-Error-logs-gf').hide();

        // Toggle visibility when clicking .gf-system-Error-logs element
        $('.system-Error-logs-gf').on('click', function() {
            $(this).toggle();
        });
   });


   
   /**
    * Sync with google account to fetch latest sheet and tab name list.
    */
   jQuery(document).on('click', '#gfgs-sync', function () {

      jQuery(this).parent().children(".loading-sign").addClass("loading");
      var integration = jQuery(this).data("init");
      var data = {
         action: 'sync_with_google_account',
         isajax: 'yes',
         isinit: integration,
         security: jQuery('#gf-ajax-nonce').val()
      };

      jQuery.post(ajaxurl, data, function (response) {

         if (response == -1) {
            return false; // Invalid nonce
         }

         if (response.data.success === "yes") {
            jQuery(".loading-sign").removeClass("loading");
            jQuery("#gsheet-validation-message").empty();
            jQuery("<span class='gsheet-valid-message'>Fetched all sheet details.</span>").appendTo('#gsheet-validation-message');
         } else {
            jQuery(this).parent().children(".loading-sign").removeClass("loading");
            location.reload(); // simply reload the page
         }
      });
   });
   /** 
    * Get tab name list 
    */
   jQuery(document).on("change", "#sheetname", function () {

      var sheetnames = jQuery(this).val();
      var nonce = jQuery('#gf-ajax-nonce').val();

      jQuery(".loading-sign").addClass("loading");
      var data = {
         action: 'get_tabname_list',
         sheetname: sheetnames,
         security: nonce
      };


      jQuery.post(ajaxurl, data, function (response) {
         jQuery(".loading-sign").removeClass("loading");
         if (response == -1) {
            return false; // Invalid nonce
         }
         if (response.success) {
            jQuery('#tabname').html(html_decode(response.data));
            jQuery(".loading-sign").removeClass("loading");
         }
      });
   });

   // TODO : Combine into one
   jQuery(document).on("change", "#tabname", function () {
      var sheetname = jQuery('#sheetname').val();
      var tabname = jQuery(this).val();
      var nonce = jQuery('#gf-ajax-nonce').val();
      jQuery(".loading-sign").addClass("loading");
      var data = {
         action: 'get_sheet_id_name',
         sheetname: sheetname,
         tabname: tabname,
         security: nonce

      };
      jQuery.post(ajaxurl, data, function (response) {

         if (response == -1) {
            return false; // Invalid nonce
         }

         if (response.success) {

            jQuery('#gaddon-setting-row-sheeturl>td').html(html_decode(response.data));

         }
         jQuery(".loading-sign").removeClass("loading");
      });
   });

   function html_decode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
   }
   
   jQuery('.update-renewal').click( function () {
      var data = { 
          action: 'update_license_expiration',
          security: jQuery( '#gsgf_ajax_nonce' ).val()
      };
      
      jQuery.post( ajaxurl, data, function ( response ) {
         if ( response.success ) {
            jQuery( '.gsgf-renew' ).slideUp( 'slow' );
         }
      });      
   });
   
   jQuery('.hide-renew-box').click( function () {
      var data = { 
          action: 'hide_renew_box',
          security: jQuery( '#gsgf_ajax_nonce' ).val()
      };
      
      jQuery.post( ajaxurl, data, function ( response ) {
         if ( response.success ) {
            jQuery( '.gsgf-renew' ).slideUp( 'slow' );
         }
      });
      
   });

   jQuery('#gform-settings').submit( function(e){

      var sheetName  = jQuery('#gf-gs-sheet-name').val();
      var sheetId    = jQuery('#gf-gs-sheet-id').val();
      var tabName    = jQuery('#gf-gs-sheet-tab-name').val();
      var tabId      = jQuery('#gf-gs-tab-id').val();

      jQuery('#error-sheetName').html('');
      jQuery('#error-sheetId').html('');
      jQuery('#error-tabName').html('');
      jQuery('#error-tabId').html('');

      if(sheetName == ""){
         e.preventDefault();
         jQuery('#error-sheetName').html('This field is required.');
      }

      if(sheetId == ""){
         e.preventDefault();
         jQuery('#error-sheetId').html('This field is required.');
      }

      if(tabName == ""){
         e.preventDefault();
         jQuery('#error-tabName').html('This field is required.');
      }

      if(tabId == ""){
         e.preventDefault();
         jQuery('#error-tabId').html('This field is required.');
      }
   });

   if(jQuery('.gform-settings-field__display_note :first-child').hasClass('gs-display-note')){
       jQuery("#gform-settings-save").css("display", "none");
   }


});
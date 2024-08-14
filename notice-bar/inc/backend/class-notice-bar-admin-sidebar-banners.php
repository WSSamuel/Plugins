<?php
class Notice_Bar_Admin_Sidebar_Banners{

	function __construct(){
		add_action( 'add_meta_boxes', array($this, 'add_meta_boxes' ) );
	}

   /**
	 * Metaboxes add 
	 * 
	 * @since 1.0.0
	 */
	function add_meta_boxes(){
		$screens = array( 'notice-bar' );
		foreach ( $screens as $screen ) {
			// add_meta_box(
			// 	'notice_doc_block_id',
			// 	__( 'Documentation', 'notice-bar' ),
			// 	array( $this, 'documentation_box_callback' ),
			// 	$screen,
			// 	'side'
			// );
			add_meta_box(
				'notice_help_block_id',
				__( 'Help?', 'notice-bar' ),
				array( $this, 'help_box_callback' ),
				$screen,
				'side'
			);
			add_meta_box(
				'notice_review_block_id',
				__( 'Reviews', 'notice-bar' ),
				array( $this, 'review_box_callback' ),
				$screen,
				'side'
			);
		}
	}
	
	public function documentation_box_callback(){
		?>

       <div class="thumbnail">
            <div class="doc-thumb"><img src="<?php echo esc_url(NOTICE_BAR_FILE_URL) ?>\css\images\docico.png" style="
    max-width: 100%;"></div>
             <p class="text-justify"><?php echo esc_html__( 'Click Below for our full Documentation about Notice Bar.', 'notice-bar' ); ?> </p>
             <p class="text-center"><a href="http://wensolutions.com/documentation/notice-bar/" target="_blank" class="button button-primary"><?php echo esc_html__( 'Get Documentation Here', 'notice-bar' ); ?></a></p>
       </div>             

		<?php
	}

	public function help_box_callback(){
		?>

       <div class="thumbnail">
            <div class="support-thumb"><img src="<?php echo esc_url(NOTICE_BAR_FILE_URL) ?>\css\images\help.png" style="
    max-width: 100%;"></div>
             <p class="text-justify"><?php echo esc_html__( 'If you need further assistance, Please feel free to visit our support team.', 'notice-bar' ); ?></p>
             <p class="text-center"><a href="https://wensolutions.com/contact" target="_blank" class="button button-primary"><?php echo esc_html__( 'Get Support Here', 'notice-bar' ); ?></a></p>
       </div>             

		<?php
	}
	public function review_box_callback(){
		?>		
		<div class="thumbnail">
			<p class="text-center">  
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>					
			</p>
			<h5><?php echo esc_html__("Very easy to customize and use plugin. If developer put a preview option, in-build CSS support and add more buttons to click - it will be even better. Thanks!","notice-bar");?></h5>
			<span class="by"><strong> <a href="https://wordpress.org/support/view/plugin-reviews/notice-bar" target="_blank"><?php echo esc_html__('f4tal1st','notice-bar');?></a></strong></span>

		</div>
		<div class="thumbnail">
			<p class="text-center"> 
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>
				<i class="dashicons dashicons-star-filled" aria-hidden="true"></i>			
			</p>
			<h5><?php echo esc_html__("This is a great little tool! Nothing fancy - no horizontal scrolling, sidebar widgets or anything else like that.
				Perfect for just your basic site-wide, dismissable notice. All elements have CSS classes that you can style, so it's a breeze to customize the look.
				If you have a fixed header area (like with the Divi theme), you will want to adjust the z-index of the announcement container so that it will sit on top of the header area.
				Nice work and kudos for a job well done. :)","notice-bar");?></h5>
			<span class="by"><strong><a href="https://wordpress.org/support/view/plugin-reviews/notice-bar" target="_blank"><?php echo esc_html__('Mizagorn','notice-bar');?></a></strong></span>
		</div>
		<div class="thumbnail last">
			<h5><?php echo esc_html__("Please fill free to leave us a review, if you found this plugin helpful.","notice-bar");?></h5>
			<p  class="text-center"><a href="https://wordpress.org/support/view/plugin-reviews/notice-bar" target="_blank" class="button button-primary"><?php echo esc_html__( 'Leave a Review', 'notice-bar' ); ?></a></p>
		</div>
     
		<?php
	}
}

new Notice_Bar_Admin_Sidebar_Banners();
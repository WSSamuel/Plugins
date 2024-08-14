<div class="wrap">
	<div class="upd_content_wrapper">
		<div class="upd_content_cell" id="upd_content_area">
			<h1>Add & Replace Affiliate Links for Amazon</h1>
			<form id="upd-amazon-plugin-form" method="post">
				<table class="form-table">
					<tbody>
						<tr id="progress-row" style="display: none;">
							<th></th>
							<td>
								<h4>Current Progress</h4>
								<div class="meter">
									<span class="progress-bar" style="width: 100%"></span>
								</div>
								<h4 id="progress-result"></h4>
								<b>
									<h5>Please wait until the current operation is complete before running the next operation. If you have a big site, this can take some time.</h5>
								</b>
							</td>
						</tr>
						<tr id="response-msg-row" style="display: none;">
							<th></th>
							<td>
								<span style="font-weight: 600; font-size: 14px;" id="response-msg"></span>
							</td>
						</tr>
						<tr>
							<th>Step 1: Backing Up Your Site</th>
							<td>
								<p class="description">
									Before making any changes to Amazon affiliate links on your site, make sure to take a backup of your entire site. We highly recommend using trusted backup plugins such as <a target="_blank" href="https://wordpress.org/plugins/all-in-one-wp-migration/">All In One Migration</a>, or <a target="_blank" href="https://wordpress.org/plugins/updraftplus/">Updraft</a>.
								</p>
								<p class="description">Make sure to do this step before you use this plugin.</p>
							</td>
						</tr>
						<tr>
							<th>
								Step 2: Enter New Amazon Tracking ID Tag
							</th>
							<td>
								<p class="description">
									Create an Amazon Affiliate ID tag from your Amazon Associates dashboard. As an example, it should be in the following formats depending on your geography:
								</p>

								<ul class="ul-disc">
									<li>Amazon USA: UNIQUEID-20</li>
									<li>Amazon CA: UNIQUEID-20</li>
									<li>Amazon UK: UNIQUEID-21</li>
								</ul>

							</td>
						</tr>
						<tr>
							<th></th>
							<td>
								<?php $job = URALP_UpdAmazonPlugin::getLastKeyword();
								if ($job)
									echo "<input type='text' id='new-id' placeholder='Enter tracking ID tag' value='" . $job->keyword  . "' name='new-id'></input>";
								else
									echo "<input type='text' id='new-id' placeholder='Enter tracking ID tag' name='new-id'></input>";

								?>

							</td>
						</tr>
						<tr>
							<th colspan="2">Step 3: Find, Replace, and Update Amazon Links</th>

						</tr>
						<tr>
							<th>Option 1: Expand Shortened Amazon Links</th>
							<td>
								<p class="description">
									The website uses shortened links (e.g., amzn.to) and you would like to bulk replace them with long Amazon links with your tracking ID tag. For example:
								</p>

								<ul class="ul-disc">
									<li><strong>Short form:</strong> https://amzn.to</li>
									<li><strong>Long form:</strong> https://www.amazon.com/dp/PRODUCTASIN?tag=TEST123-20</li>
								</ul>
								<br>
								<p class="description">
									<i>Hint:</i> This will save you countless hours from manually changing shortened links to long links.
								</p>
								<br>
								<?php submit_button('Expand', 'primary', 'expand-btn', false) ?>


							</td>
						</tr>
						<tr>
							<th>Option 2: Add or Replace Existing ID Tag</th>
							<td>
								<p class="description">
									The website already has long Amazon links and you would like to bulk replace them with a new ID tag. For example, you are using ID tag “TEST123-20”. You would like to change to “NEW123-20”.
								</p>
								<br>
								<p class="description">
									<i>Tip:</i> This is useful if you want to change tracking to a new tag you manage, or you recently purchase/sold a site and need to change the ID tag.
								</p>
								<br>
								<?php submit_button('Update', 'primary', 'update-btn', false) ?>

							</td>
						</tr>
						<tr>
							<th>Option 3: Add NoFollow Link Attribute</th>
							<td>
								<p class="description">
									Add rel=”nofollow” attribute to all Amazon affiliate links

								</p>
								<br>
								<?php submit_button('Add No follow', 'primary', 'no_follow-btn', false) ?>

							</td>
						</tr>
						<tr>
							<th>Option 4: Remove Amazon Affiliate ID Tag</th>
							<td>
								<p class="description">Remove existing Amazon affiliate ID tags from all links</p>
								<br>
								<p class="description">
									<i>Tip:</i> This will not remove the Amazon links. It will only remove the affiliate ID tag (i.e., TEST123-20 will be removed), thus making that non-affiliate links.
								</p>
								<br>
								<?php submit_button('Make non-affiliate', 'primary', 'no_affiliate-btn', false) ?>

							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
		<div class="upd_content_cell" id="sidebar-container">

			<div class="rating__box__wrapper bg-alterOne">
				<div class="rating_box_header">
					<h6 class="rating_box_header--title">Website Flipping Newsletter</h6>
				</div>
				<div class="rating_box_body">
					<a href="https://go.thewebsiteflip.com/from-amzplugin/sidebar/logo " target="_blank"><img src="<?php echo plugin_dir_url(__DIR__) . 'images/websiteflip-logo.png' ?>" alt="WebsiteFlip" class="rating__brand--logo"></a>
					<p class="rating__body--text">
						Get thrice-weekly newsletters on website growth case studies, guides, and websites for sale
					</p>

					<a href="https://go.thewebsiteflip.com/from-amzplugin/sidebar/btn" target="_blank" class="rating__learn--btn">
						Learn More
					</a>
				</div>
				<div class="rating_box_footer"></div>
			</div>

			<div class="rating__box__wrapper">
				<div class="rating_box_header">
					<h6 class="rating_box_header--title">Increase website revenue</h6>
				</div>
				<div class="rating_box_body">
					<a href="https://go.easywins.io/offer/amzpluginsidebar/logo" target="_blank"><img src="<?php echo plugin_dir_url(__DIR__) . 'images/easy-wins-logo.webp'; ?>" alt="easy-wins" class="rating__brand--logo"></a>
					<p class="rating__body--text">
						Get 100+ battle-tested strategies to 10X growth
					</p>
					<div class="rating__box__primary">
						<img src="<?php echo plugin_dir_url(__DIR__) . 'images/rating.png'; ?>" alt="rating" class="rating__star--logo">
						<p class="plugin--herotext">"EasyWins is worth the money"</p>
						<p class="plugin--supporttext">“If I implement ONE of the tactics in Easywins, it'll pay for itself many times over. It's a no-brainer!”</p>
						<p class="plugin--supporttext">From Brock on Trustpilot</p>
					</div>
					<a href="https://go.easywins.io/offer/amzpluginsidebar/btn" target="_blank" class="rating__learn--btn">
						Learn More
					</a>
				</div>
				<div class="rating_box_footer"></div>
			</div>
			<div class="meta-box-sortables ui-sortable">
				<div class="postbox" id="p1">

					<div class="inside">
						<h3><span><?php esc_attr_e('Case Studies & Guides', 'WpAdminStyle'); ?></span></h3>
						<ul class="ul-disc">
							<li><a href="https://thewebsiteflip.com/guide/website-valuation/" target="_blank">How Much Is My Website Worth?</a></li>
							<li><a href="https://thewebsiteflip.com/guide/website-flipping/exit-insights/" target="_blank">Insights from 39 Website Flip Exits</a></li>
							<li><a href="https://thewebsiteflip.com/case-study/outdoor/" target="_blank">Outdoor Site Case Study ($5,000/mo)</a></li>
							<li><a href="https://thewebsiteflip.com/case-study/dating/" target="_blank">Dating Site Case Study ($10,000/mo)</a></li>
							<li><a href="https://thewebsiteflip.com/case-study/" target="_blank">Other Case Studies</a></li>
						</ul>

					</div><!-- .inside -->
				</div><!-- .postbox -->
			</div>
		</div>
	</div>
</div>

<script>
	jQuery(document).ready(function($) {
		progressUpdate();
		setInterval(progressUpdate, 5000);

		function progressUpdate() {
			jQuery.post(
				ajaxurl, {
					action: 'uralp_get_progress',
					security: '<?php echo wp_create_nonce("upd-plugin-for-amazon-get_progress"); ?>'
				},
				function(response) {
					var resp = jQuery.parseJSON(response);
					if (resp.msg === null || resp.msg.percent === '100') {
						jQuery('#progress-row').hide();
						jQuery('#upd-amazon-plugin-form .button').prop('disabled', false);
					} else {
						jQuery('#progress-row').show();
						jQuery('#progress-row .progress-bar').width(resp.msg.percent + '%');
						jQuery('#progress-result').html('Progress: ' + resp.msg.percent + '% <br>Started at: ' + resp.msg.time);
						jQuery('#upd-amazon-plugin-form .button').prop('disabled', true);
					}
				});
		}

		$('#upd-amazon-plugin-form').submit(function(e) {
			e.preventDefault();
		});
		$('#no_affiliate-btn').click(function(e) {
			e.preventDefault();
			jQuery('#response-msg-row').hide();
			var data = {
				action: 'uralp_no_affiliate',
				security: '<?php echo wp_create_nonce("upd-plugin-for-amazon-no_affiliate"); ?>'
			};
			jQuery.post(ajaxurl, data, function(response) {
				var resp = jQuery.parseJSON(response);
				if (resp['success'] === 1) {
					jQuery('#response-msg').css({
						'color': 'green'
					});
					jQuery('#response-msg').text(resp['msg']);

				} else {
					jQuery('#response-msg').text(resp['msg']);
					jQuery('#response-msg').css({
						'color': 'red'
					});
				}
				jQuery('#response-msg-row').show();
			});
		});

		$('#no_follow-btn').click(function(e) {
			e.preventDefault();
			jQuery('#response-msg-row').hide();
			var data = {
				action: 'uralp_no_follow',
				security: '<?php echo wp_create_nonce("upd-plugin-for-amazon-no_follow"); ?>'
			};
			jQuery.post(ajaxurl, data, function(response) {
				var resp = jQuery.parseJSON(response);
				if (resp['success'] === 1) {
					jQuery('#response-msg').css({
						'color': 'green'
					});
					jQuery('#response-msg').text(resp['msg']);

				} else {
					jQuery('#response-msg').text(resp['msg']);
					jQuery('#response-msg').css({
						'color': 'red'
					});
				}
				jQuery('#response-msg-row').show();
			});
		});

		$('#expand-btn').click(function(e) {
			e.preventDefault();
			jQuery('#response-msg-row').hide();
			var data = {
				action: 'uralp_expand',
				'new-id': $('#new-id').val(),
				security: '<?php echo wp_create_nonce("upd-plugin-for-amazon-expand"); ?>'
			};
			jQuery.post(ajaxurl, data, function(response) {
				var resp = jQuery.parseJSON(response);
				if (resp['success'] === 1) {
					jQuery('#response-msg').css({
						'color': 'green'
					});
					jQuery('#response-msg').text(resp['msg']);

				} else {
					jQuery('#response-msg').text(resp['msg']);
					jQuery('#response-msg').css({
						'color': 'red'
					});
				}
				jQuery('#response-msg-row').show();
			});
		});

		$('#update-btn').click(function(e) {
			e.preventDefault();
			jQuery('#response-msg-row').hide();
			var data = {
				action: 'uralp_update',
				'new-id': jQuery('#new-id').val(),
				'is-scheduled': jQuery('#is-scheduled').is(':checked') ? '1' : '0',
				security: '<?php echo wp_create_nonce("upd-plugin-for-amazon-update"); ?>'
			};
			jQuery.post(ajaxurl, data, function(response) {
				var resp = jQuery.parseJSON(response);
				if (resp['success'] === 1) {
					jQuery('#response-msg').css({
						'color': 'green'
					});
					jQuery('#response-msg').text(resp['msg']);
				} else {
					jQuery('#response-msg').text(resp['msg']);
					jQuery('#response-msg').css({
						'color': 'red'
					});
				}
				jQuery('#response-msg-row').show();
			});
		});

		$('#backup-btn').click(function(e) {
			e.preventDefault();
			jQuery('#response-msg-row').hide();
			var data = {
				security: '<?php echo wp_create_nonce("upd-plugin-for-amazon-backup"); ?>',
				action: 'uralp_backup'
			};
			jQuery.post(ajaxurl, data, function(response) {
				var resp = jQuery.parseJSON(response);
				jQuery('#response-msg').css({
					'color': 'green'
				});
				jQuery('#response-msg').text(resp['msg']);
			});
			jQuery('#response-msg-row').show();
		});

		$('#restore-btn').click(function(e) {
			e.preventDefault();
			jQuery('#response-msg-row').hide();
			var data = {
				security: '<?php echo wp_create_nonce("upd-plugin-for-amazon-restore"); ?>',
				action: 'uralp_restore'
			};
			jQuery.post(ajaxurl, data, function(response) {
				var resp = jQuery.parseJSON(response);
				jQuery('#response-msg').css({
					'color': 'green'
				});
				jQuery('#response-msg').text(resp['msg']);
			});
			jQuery('#response-msg-row').show();
		});
	});
</script>
<style>
	.meter {
		height: 20px;
		/* Can be anything */
		position: relative;
		background: #555;
		-moz-border-radius: 25px;
		-webkit-border-radius: 25px;
		border-radius: 25px;
		padding: 5px;
		box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
		width: 30%;
	}

	.meter>.progress-bar {
		display: block;
		height: 100%;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		background-color: rgb(43, 194, 83);
		background-image: linear-gradient(center bottom,
				rgb(43, 194, 83) 37%,
				rgb(84, 240, 84) 69%);
		box-shadow:
			inset 0 2px 9px rgba(255, 255, 255, 0.3),
			inset 0 -2px 6px rgba(0, 0, 0, 0.4);
		position: relative;
		overflow: hidden;
	}

	.rating__box__wrapper {
		border: #c8c8c8 3px solid;
		padding: 30px 20px;
		position: relative;
		margin-bottom: 15px;
		background: #fff;
	}

	.rating_box_header--title {
		font-weight: 700;
		margin: 0;
		margin-bottom: 15px;
		color: #304a59;
		line-height: normal;
		font-size: 20px;
	}

	.rating__body--text {
		line-height: 1.4;
		font-size: 14px;
		margin-bottom: 16px;
		color: #121212;
	}

	.rating__learn--btn {
		display: inline-block;
		background-color: #d40000;
		color: #fff;
		font-weight: 700;
		padding: 9px 20px;
		font-size: 15px;
		text-align: center;
		text-decoration: none;
		outline: none;
		transition: .2s;
		border: 0;
		width: 84%
	}

	.rating__learn--btn:hover,
	.rating__learn--btn:focus {
		background-color: #304a59;
		color: #fff;
	}

	.rating__brand--logo,
	.rating__star--logo {
		margin-left: auto;
		margin-right: auto;
		display: block;
		margin-block-start: 10px;
		margin-block-end: 10px;
		max-width: 200px;
	}

	.rating__star--logo {
		max-width: 100px;
		margin-block-end: 5px;
		margin-inline-start: auto;
		margin-inline-end: auto;
	}

	.rating__box__primary {
		background-color: #fafcfc;
		padding: 10px;
		text-align: center;
		margin-bottom: 18px;
	}

	.plugin--herotext {
		font-weight: 700;
		font-size: 17px;
		display: block;
		text-align: center;
		margin-block-end: 5px;
		color: #000000;
		font-style: italic;
	}

	.plugin--supporttext {
		font-size: 12px;
		font-weight: 400;
		line-height: 1.4;
		margin: 0;
		font-style: italic;
		color: #000000;
		margin-bottom: 5px;
	}

	.bg-alterOne {
		background-color: #304a59;
		border-color: #fff;
	}

	.bg-alterOne .rating__learn--btn {
		background-color: #FFCC00;
		color: #000;
	}

	.bg-alterOne .rating__learn--btn:hover,
	.bg-alterOne .rating__learn--btn:focus {
		background-color: #fff;
		color: #000
	}

	.bg-alterOne .rating_box_header--title {
		font-size: 18px;
	}

	.bg-alterOne .rating_box_header--title,
	.bg-alterOne .rating__body--text {
		color: #fff;
	}

	.upd_content_wrapper {
		display: table;
		width: 100%;
		table-layout: fixed;
	}

	.upd_content_cell {
		display: table-cell;
		margin: 0;
		padding: 0;
		vertical-align: top;
	}

	#upd_content_area {
		width: 100%;
	}

	#sidebar-container {
		width: 300px;
		padding-left: 20px;
	}
</style>
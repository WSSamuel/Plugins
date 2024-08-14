<?php if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
// PHP mail function
// ====================== Get settings from common setting page and output page ============================//

$event_name = get_the_title( $em_attendee_event_id ); // event name

$event_first_four = substr( $event_name, 0, 4 ); // for booking id

$event_first_four_up = strtoupper( $event_first_four ); // for booking id

$event_first_four_val = str_replace( ' ', '', $event_first_four_up );

// geting booking id
$em_attendee_booking_id_result = $wpdb->get_results( "SELECT * FROM `$bookings_table` WHERE `attendees_id` LIKE '$em_attendee_id'" );
if ( count( $em_attendee_booking_id_result ) ) {
	foreach ( $em_attendee_booking_id_result as $single_row ) {
		$em_attendee_booking_id = $single_row->id;
	}
}
$em_ticket_booking_id = sprintf( '%010d', $em_attendee_booking_id );

$blog_name = get_option( 'blogname' );
$blog_url  = get_option( 'home' );

if ( isset( $em_common_settings['em_php_email'] ) ) {
	 $em_php_email = $em_common_settings['em_php_email'];
} else {
	$em_php_email = '';
}

if ( $instructions_type != '' ) {
	$instructions = '
	<td style="background-color:#ffffff" width="540" valign="top">
		<table width="540" cellspacing="0" cellpadding="0" border="0" align="center">
			<tbody>
				<tr>
					<td style="color:#666666;font-size:12px;font-family:Arial,sans-serif;text-align:justify;padding:30px 0 40px;line-height:20px" width="540" valign="top">
						<span style="font-size:12px">
							<b>Important Instructions</b>
						</span>
						<br>
						<br>
						' . nl2br( $instructions_type ) . '
						<br>
					</td>
				</tr>
			</tbody>
		</table>
	</td>
	';
} else {
	$instructions = '';
}
if ( isset( $em_common_settings['footer_email'] ) ) {
	 $footer_email = $em_common_settings['footer_email'];
} else {
	$footer_email = '';
}
if ( isset( $em_common_settings['footer_phone'] ) ) {
	 $footer_phone = $em_common_settings['footer_phone'];
} else {
	$footer_phone = '';
}
if ( isset( $em_common_settings['footer_website'] ) ) {
	 $footer_website = $em_common_settings['footer_website'];
} else {
	$footer_website = '';
}
// email templet logo color
if ( isset( $em_common_settings['em_upload_image'] ) ) {
	 $em_upload_image = $em_common_settings['em_upload_image'];
} else {
	$em_upload_image = '';
}
if ( isset( $em_common_settings['email_tem_head'] ) ) {
	 $email_tem_head = $em_common_settings['email_tem_head'];
} else {
	$email_tem_head = 'name';
}
if ( isset( $em_common_settings['logo_name'] ) ) {
	 $logo_name = $em_common_settings['logo_name'];
} else {
	$logo_name = 'A WP Life';
}
if ( isset( $em_common_settings['cover_back_color'] ) ) {
	 $cover_back_color = $em_common_settings['cover_back_color'];
} else {
	$cover_back_color = '#010101';
}
if ( isset( $em_common_settings['header_footer_back_color'] ) ) {
	 $header_footer_back_color = $em_common_settings['header_footer_back_color'];
} else {
	$header_footer_back_color = '#208A8D';
}
if ( isset( $em_common_settings['header_footer_font_color'] ) ) {
	 $header_footer_font_color = $em_common_settings['header_footer_font_color'];
} else {
	$header_footer_font_color = '#FFFFFF';
}
if ( isset( $em_common_settings['body_back_color'] ) ) {
	 $body_back_color = $em_common_settings['body_back_color'];
} else {
	$body_back_color = '#208A8D';
}

if ( $email_tem_head == 'logo' ) {
	$em_temp_logo = '
	<a href="' . $em_upload_image . '" style="text-decoration:none;color:#1f2533;font-weight:bold" target="_blank" >
		<img src="' . $em_upload_image . '" style="display: block; color: rgb(1, 1, 1); padding: -1px 10px 10px 30px; background-color: ' . $header_footer_back_color . ';" alt="" class="m_852262703830075666CToWUd CToWUd" border="0" width="230" height="70">
	</a>
	';
}
if ( $email_tem_head == 'name' ) {
	$em_temp_logo = '
		<span style="font-weight: bold;font-size: 24px;display: block;color: #FFFFFF;padding: padding: 10px 10px 20px 30px;background-color: ' . $header_footer_back_color . ';" class="m_852262703830075666CToWUd CToWUd" border="0" width="230" height="70">' . $logo_name . '</span>
	';
}

// show one date if same
if ( $em_start_date_val == $em_end_date_val ) {
	$em_date_e = $em_start_date_val;
} else {
	$em_date_e = '
		From: ' . $em_start_date_val . '
		<br>
		To: ' . $em_end_date_val . '
	';
}

$php_to_name  = $em_attendee_name;
$php_to_email = $em_attendee_email;
$php_subject  = ucwords( $em_cancel_sub );

$ticket_ids = $em_attendee_ticket_id;

foreach ( $ticket_ids as $key => $em_tickets_value ) {
	if ( $em_tickets_value ) {

		$em_ticket_table   = $wpdb->prefix . 'em_tickets';
		$em_ticket_name    = $wpdb->get_row( "SELECT * FROM `$em_ticket_table` WHERE `id` LIKE '$key' AND `status` LIKE 'available'" );
		$em_e_ticket_name  = $em_ticket_name->name;
		$em_e_ticket_price = $em_ticket_name->price;

		// float
		$em_e_ticket_price_float = number_format( (float) $em_e_ticket_price, 2, '.', '' );

		$em_ticket_list .= '<tr>
			<td style="width:30px">
			</td>
			<td style="width:159px;background-color:#ffffff;color:#1f2533;font-size:13px;font-family:Arial,sans-serif;text-align:left;padding:10px 0 10px 0" valign="top">
				' . $em_e_ticket_name . '
			</td>
			<td style="width:159px;background-color:#ffffff;color:#1f2533;font-size:13px;font-family:Arial,sans-serif;text-align:center;padding:10px 0 10px 0" valign="top">
				' . $em_tickets_value . '
			</td>
			<td style="width:159px;background-color:#ffffff;color:#1f2533;font-size:12px;font-family:Arial,sans-serif;text-align:right" valign="top">
				<br>
				$' . $em_e_ticket_price_float . '
			</td>
			<td style="width:40px">
			</td>
		</tr>';
	}
}

// massage body

$message = '
<div marginwidth="0" marginheight="0" style="font-family:Arial,sans-serif;background:#000000;padding:20px 0 0 0">
	<table style="padding:25px 0 15px 0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
			<tr>
				<td width="100%" valign="top">
					<table width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="f2f2f2" align="center">
						<tbody>
							<tr>
								<td valign="top">
									<table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
										<tbody>
											<tr>
												<td style="padding-top: 10px; background-color:#208A8D;" width="300" valign="top">
													
													<span style="font-weight:bold;font-size:24px;display:block;color:#ffffff;padding:0 12px 15px 30px;" class="m_2486663341902816588m_4523587212827788817m_852262703830075666CToWUd m_2486663341902816588m_4523587212827788817CToWUd" border="0" width="230" height="70">' . $blog_name . '</span>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td valign="top">
									<table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
										<tbody>
											<tr>
												<td style="background-color:#ffffff;color:#666666;font-size:15px;font-family:Arial,sans-serif;text-align:left;padding:30px 10px 20px 30px;line-height:20px" width="500" valign="top">
													Dear ' . $em_attendee_name . ', 
												<br>
												' . $em_cancel_msg . ' </td>
												<td style="background-color:#ffffff;color:#666666;font-size:12px;font-family:Arial,sans-serif;text-align:left;padding:30px 20px 20px 10px;line-height:20px" width="100" valign="top">
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td style="padding-top:20px" width="540" valign="top">
									<table width="540" cellspacing="0" cellpadding="0" border="0" align="center">
										<tbody>
											<tr>
												<td style="background-color:#f2f2f2;color:#222222;font-size:12px;font-family:Arial,sans-serif;text-align:left;padding:10px 10px 40px 0px;line-height:25px;width:220px" valign="middle" align="left">
													<span style="color:#a4a8ac;line-height:23px">BOOKING ID</span>
													<br>
													<b style="font-size:20px">' . $event_first_four_val . $em_ticket_booking_id . '</b>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td valign="top">
									<table width="540" cellspacing="0" cellpadding="0" border="0" bgcolor="#1f2533" align="center">
										<tbody>
											<tr>
												<td width="15" style="background: #208A8D none repeat scroll 0% 0%;">
												</td>
												<td style="font-family: Arial,sans-serif; text-align: left; font-size: 13px; line-height: 24px; padding: 25px 10px 25px 15px; border-right: 1px dotted #FFFFFF; color: #FFFFFF; background: #208A8D none repeat scroll 0% 0%;" width="370" valign="top">
												<span style="font-size:20px;color:#ffffff;font-weight:bold">' . $event_name . '</span>
												<br>| ' . $em_address . '<br><span class="m_852262703830075666aBn"><span class="m_852262703830075666aQJ"></span></span></td>
												<td style="background: #208A8D none repeat scroll 0% 0%; color:#ffffff;font-size:13px;font-family:Arial,sans-serif;text-align:center;padding:25px 10px 15px 10px;line-height:20px" width="200" valign="top">
												  <b style="padding-bottom:7px; width:100%;float:left;word-break:break-all;color:#ffffff"><img src ="http://awplife.com/wp-content/uploads/2017/02/calendar-image-png-3.png" height="25" width="25"></b>
												  From: ' . $em_start_date_val . '
												  <br>
												 
												  To: ' . $em_end_date_val . '
												  <br>
												  <b style="padding-top:7px; padding-bottom:7px; width:100%;float:left;word-break:break-all;color:#ffffff"><img src ="http://awplife.com/wp-content/uploads/2017/02/clock-icon1.png" height="25" width="25"></b>
												  ' . $em_start_time_val . ' TO ' . $em_end_time_val . '
												  <br>
												</td>
												<td width="15" style="background: #208A8D none repeat scroll 0% 0%;">
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td valign="top">
									<table style="border:1px solid #e1e5e8" width="538" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
										<tbody>
										<tr>
											<td width="538" valign="top">
												<table style="padding:20px 30px" width="538" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
													<tbody>
														<tr>
															<td style="width:478px;background-color:#ffffff;color:#666666;font-size:12px;font-family:Arial,sans-serif;text-align:left;padding:10px 10px 10px 0;border-bottom:1px solid #e1e5e8" valign="top">
																<span style="font-size:12px">ORDER SUMMARY </span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td width="538" valign="top">
												<table width="538" cellspacing="0" cellpadding="0" border="0" align="center">
													<tbody>
														
														<tr>
															<td style="width:30px">
															</td>
															<td style="width:159px; background-color:#ffffff;color:#666666;font-size:15px;font-family:Arial,sans-serif;text-align:left;padding:10px 10px 10px 0;border-bottom:2px dotted #bfbfbf" valign="top">
																<span style="font-size:14px;font-weight:bold">TICKET</span>
															</td>
															<td style="width:159px; background-color:#ffffff;color:#666666;font-size:15px;font-family:Arial,sans-serif;text-align:center;padding:10px 10px 10px 0;border-bottom:2px dotted #bfbfbf" valign="top">
																<span style="font-size:14px;font-weight:bold">Quantity</span>
															</td>
															<td style="width:159px; background-color:#ffffff;color:#666666;font-size:15px;font-family:Arial,sans-serif;text-align:right;padding:10px 10px 10px 0;border-bottom:2px dotted #bfbfbf" valign="top">
																<span style="font-size:14px;font-weight:bold">AMOUNT</span>
															</td>
															<td style="width:30px">
															</td>
														</tr>
														
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td width="538" valign="top">
												<table width="538" cellspacing="0" cellpadding="0" border="0" align="center">
													<tbody>
														' . $em_ticket_list . '
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td width="538" valign="top">
												<table width="538" cellspacing="0" cellpadding="0" border="0" align="center">
													<tbody>
														<tr>
															<td style="width:30px">
															</td><td style="width:265px;padding:15px 10px 0px 0;background-color:#ffffff;color:#666666;font-size:16px;font-family:Arial,sans-serif;text-align:left;border-top:2px dotted #bfbfbf" valign="top">
															<b>AMOUNT PAYABLE</b>
															</td>
															<td style="padding:15px 10px 15px 0;font-size:18px;font-weight:bold;font-family:Arial,sans-serif;text-align:right;background-color:#ffffff;color:#666666;border-top:2px dotted #bfbfbf" width="213" valign="top">$' . $em_e_ticket_price_float
															. '</td>
															<td style="width:30px">
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td width="540" valign="top">
									<table width="540" cellspacing="0" cellpadding="0" border="0" align="center">
										<tbody>
											<tr>
												<td style="background-color:#efefef;color:#666666;font-size:12px;font-family:Arial,sans-serif;text-align:left;padding:10px 10px 35px 0px;line-height:20px" width="202" valign="top">
													<b>BOOKING DATE &amp; TIME</b>
													<br><span class="m_852262703830075666aBn"><span class="m_852262703830075666aQJ">' . $em_booking_datetime . '</span></span>
												</td>
												<td style="background-color:#efefef;color:#666666;font-size:12px;font-family:Arial,sans-serif;text-align:right;padding:10px 10px 35px 10px;line-height:20px" width="195" valign="top">
													<b>BOOKING STATUS</b>
													<br>' . $em_booking_status . '
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td style="background-color:#ffffff" width="540" valign="top">
									<table width="540" cellspacing="0" cellpadding="0" border="0" align="center">
										<tbody>
											
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td valign="top">
									<table width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="1F2533" align="center">
										<tbody>
											<tr>
												<td style="color: rgb(73, 186, 142); font-size: 12px; font-family: Arial,sans-serif; text-align: left; padding: 20px 10px 15px 20px; background-color: #208A8D;" width="260" valign="top">' . $footer_email . '</td>
												
												<td style="width: 200px; vertical-align: top; text-align: left; line-height: 14px; background-color: #208A8D; color: rgb(73, 186, 142); font-size: 12px; font-weight: bold; padding: 25px 0px 15px 10px;">
													<a href="' . $footer_website . '" style="text-decoration: none; color: #FFFFFF;" target="_blank">' . $footer_website . '</a>
												</td>
												<td style="color: #FFFFFF;width: 200px; vertical-align: top; text-align: left; padding: 25px 0px 15px; background-color: #208A8D;">
													' . $footer_phone . '
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</div>
';

// sending mail by PHP function
// client

// Always set content-type when sending HTML email
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type:text/html;charset=UTF-8' . "\r\n";

// More headers
$headers .= 'From: <' . $em_php_email . '>' . "\r\n";
$headers .= 'Cc: ' . "\r\n";
mail( $php_to_email, $php_subject, $message, $headers );



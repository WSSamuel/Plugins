<?php

if (! isset($_GET['key']) || $_GET['key'] === '' )
	return WCOA_Attachment_Redirect_Handler::bad_request();

$wcoa_key_id = $_GET['key'];
$wcoa_attachment_id = 0;

if ( isset($_GET['id']) && $_GET['id'] !== '' )
	$wcoa_attachment_id = $_GET['id'];

$wcoa_attachment_url = WCOA_Attachment::get_url($_GET['wcoa_attachment_for_order'], $wcoa_key_id, $wcoa_attachment_id);

if ($wcoa_attachment_url === false)
	return WCOA_Attachment_Redirect_Handler::bad_request();

WCOA_Attachment_Redirect_Handler::redirect($wcoa_attachment_url);

return true;
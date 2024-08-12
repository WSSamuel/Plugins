<?php

class WCOA_Notification
{
	private $order;

	private $attachment_id;

	public function __construct(int $order_id, int $attachment_id = 0)
	{
		$this->order = new WC_Order($order_id);

		$this->attachment_id = $attachment_id;
	}

	public function create_note()
	{
		$note = __('Attachment successfully added.','sld-wcoa');

		$this->order->add_order_note($note, 0, true);
	}

	public function send_email()
	{
		$mailer = new WC_Emails;

		//format the email
		$recipient = $this->order->get_billing_email();
		$subject = $this->get_email_header();
		$content = self::get_email_html( $this->order, $subject, $mailer );
		$headers = "Content-Type: text/html\r\n";

		$mailer->send( $recipient, $subject, $content, $headers );
	}

	private function get_email_html(WC_Order $order, $heading, $mailer): string
	{

		$source = 'emails/customer-note.php';

		$path = WCOA_PLUGIN_DIR . 'templates/';

		return wc_get_template_html( $source, [
			'order'         => $order,
			'email_heading' => $heading,
			'sent_to_admin' => false,
			'plain_text'    => false,
			'email'         => $mailer,
			'customer_note' => false,
			'additional_content' => false,
			'email_content' => $this->get_email_content(),
			'button_text' => $this->get_email_button(),
			'attachment_url' => WCOA_Attachment::get_public_url($this->order->get_id(), $this->attachment_id)
		], $path, $path );
	}

	private function prepare_email_header()
	{
		$message_header = WCOA_Options::get('message_header');

		if ($message_header === false || $message_header === '')
			$message_header = sprintf( esc_html__( 'New attachment to the order %s.', 'sld-wcoa' ), esc_html( $this->order->get_id() ) );

		return $message_header;
	}

	public function get_email_header()
	{
		$site_title = get_bloginfo( 'name' );

		$message_header = $this->prepare_email_header();

		$message_header = str_replace('{site_title}', $site_title, $message_header);

		return str_replace('{order_number}', $this->order->get_id(), $message_header);
	}

	private function prepare_email_content()
	{
		$message_content = WCOA_Options::get('message_content');

		if ($message_content === false || $message_content === '')
			$message_content = sprintf( esc_html__( 'An attachment has been added to your order {order_number}. Click the button below to view it.', 'sld-wcoa' ), esc_html( $this->order->get_id() ) );

		return $message_content;
	}

	public function get_email_content()
	{
		$site_title = get_bloginfo( 'name' );

		$message_content = $this->prepare_email_content();

		$message_content = str_replace('{site_title}', $site_title, $message_content);

		return str_replace('{order_number}', $this->order->get_id(), $message_content);
	}

	private function prepare_email_button()
	{
		$button_text = WCOA_Options::get('button_text');

		if ($button_text === false || $button_text === '')
			$button_text = esc_html__('Preview', 'woocommerce');

		return $button_text;
	}

	public function get_email_button()
	{
		return $this->prepare_email_button();
	}

}
<?php

$wcoa_attachments = WCOA_Attachment::get_all_by_user(get_current_user_id());

if (empty($wcoa_attachments))
{
    _e('There are no attachments to display.', 'sld-wcoa');
    return;
}

?>
<table>
	<thead>
	<tr>
		<th><?php _e('Order', 'woocommerce'); ?></th>
		<th><?php _e('Date'); ?></th>
		<th><?php _e('Actions'); ?></th>
	</tr>
	</thead>
	<tbody>
    <?php foreach ($wcoa_attachments as $item )
    {
        $wcoa_order = wc_get_order($item['order_id']);
        $item['order_url'] = $wcoa_order->get_view_order_url();
    ?>
	<tr>
        <td> <a href="<?php print $item['order_url']; ?>" >#<?php print $item['order_id']; ?></a> </td>
		<td><?php print $item['post_date']; ?></td>
		<td><a target="_blank" href="<?php print $item['guid']; ?>" class="button"><?php _e('View'); ?></a></td>
	</tr>
    <?php } ?>
	</tbody>
</table>

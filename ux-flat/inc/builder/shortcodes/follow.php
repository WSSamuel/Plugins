<?php

add_ux_builder_shortcode( 'follow', array(
    'name' => __( 'Follow Icons' ),
    'category' => __( 'Content' ),
    'thumbnail' => get_template_directory_uri() . '/inc/builder/shortcodes/thumbnails/share.svg',
    'options' => array(
        'title' => array(
            'type' => 'textfield',
            'heading' => 'Title',
            'default' => '',
        ),

        'style' => array(
            'type' => 'radio-buttons',
            'heading' => __( 'Style' ),
            'default' => 'outline',
            'options' => array(
                'outline' => array( 'title' => 'Outline' ),
                'fill' => array( 'title' => 'Fill' ),
                'small' => array( 'title' => 'Small' ),
            ),
        ),
        'color'       => array(
            'type'    => 'select',
            'heading' => 'Color',
            'default' => '',
            'options' => array(
                ''   => 'Default',
                'primary'   => 'Primary',
                'secondary' => 'Secondary',
                'white'     => 'White',
            ),
        ),
        'invert'      => array(
            'conditions' => 'style == "fill"',
            'type'    => 'checkbox',
            'heading' => 'Invert',
        ),
        'tooltip'      => array(
            'type'    => 'checkbox',
            'heading' => 'Tooltip',
        ),
        'align' => array(
            'type' => 'radio-buttons',
            'heading' => __( 'Align' ),
            'default' => '',
            'options' => array(
                '' => array( 'title' => 'Inline' ),
                'left'   => array( 'title' => 'Left',   'icon' => 'dashicons-editor-alignleft'),
                'center' => array( 'title' => 'Center', 'icon' => 'dashicons-editor-aligncenter'),
                'right'  => array( 'title' => 'Right',  'icon' => 'dashicons-editor-alignright'),
            ),
        ),
        'padding'     => array(
            'conditions' => 'align == ""',
            'type'       => 'margins',
            'heading'    => 'Padding',
            'full_width' => true,
            'min'        => 0,
            'max'        => 100,
            'step'       => 1,
        ),
        'scale' => array(
            'type' => 'slider',
            'heading' => 'Scale',
            'default' => '100',
            'unit' => '%',
            'max' => '300',
            'min' => '50',
        ),
        'social_icons' => array(
	        'type' => 'group',
	        'heading' => 'Follow Icons',
	        'options' => array(
		        'facebook' => array( 'type' => 'textfield','heading' => 'Facebook', 'default' => ''),
		        'instagram' => array( 'type' => 'textfield','heading' => 'Instagram', 'default' => ''),
		        'tiktok' => array( 'type' => 'textfield','heading' => 'TikTok', 'default' => ''),
		        'snapchat' => array( 'type' => 'image', 'heading' => __( 'SnapChat' )),
		        'x' => array( 'type' => 'textfield','heading' => 'X', 'default' => ''),
		        'twitter' => array( 'type' => 'textfield','heading' => 'Twitter', 'default' => ''),
		        'email' => array( 'type' => 'textfield','heading' => 'Email', 'default' => ''),
		        'phone' => array( 'type' => 'textfield','heading' => 'Phone', 'default' => ''),
		        'zalo' => array( 'type' => 'textfield','heading' => 'Zalo', 'default' => ''),
		        'whatsapp' => array( 'type' => 'textfield','heading' => 'Whatsapp', 'default' => ''),
		        'pinterest' => array( 'type' => 'textfield','heading' => 'Pinterest', 'default' => ''),
		        'rss' => array( 'type' => 'textfield','heading' => 'RSS', 'default' => ''),
		        'linkedin' => array( 'type' => 'textfield','heading' => 'Linkedin', 'default' => ''),
		        'youtube' => array( 'type' => 'textfield','heading' => 'Youtube', 'default' => ''),
		        'flickr' => array( 'type' => 'textfield','heading' => 'Flickr', 'default' => ''),
		        'px500' => array( 'type' => 'textfield','heading' => '500px', 'default' => ''),
		        'vkontakte' => array( 'type' => 'textfield','heading' => 'VKontakte', 'default' => ''),
		        'telegram' => array( 'type' => 'textfield','heading' => 'Telegram', 'default' => ''),
		        'twitch' => array( 'type' => 'textfield','heading' => 'Twitch', 'default' => ''),
		        'discord' => array( 'type' => 'textfield','heading' => 'Discord', 'default' => ''),
	        ),
        ),
		'advanced_options' => require get_template_directory() . '/inc/builder/shortcodes/commons/advanced.php',
    ),
) );

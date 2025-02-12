<?php

/**
 * This file contains the functions related to registering block styles.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */

/**
 * Registers custom block styles on the `init` hook.
 *
 * @since 1.0.0
 * @link  https://developer.wordpress.org/reference/functions/register_block_style/
 */
function bse__register_block_styles()
{
	register_block_style(
		'core/quote',
		array(
			'name'         => 'hand-drawn-red',
			'label'        => __('HD Red', 'tt4-block-styles'),
			'inline_style' => '.wp-block-quote.is-style-hand-drawn-red {
				color: red;
				border: 2px solid currentColor;
				overflow: hidden;
				box-shadow: var(--wp--preset--shadow--natural);
				border-radius: 255px 15px 225px 15px/15px 225px 15px 255px !important;
			}',
		)
	);

	register_block_style(
		'core/quote',
		array(
			'name'  => 'boxed-orange',
			'label' => __('Boxed Orange', 'tt4-block-styles'),
		)
	);

	register_block_style(
		'core/quote',
		array(
			'name'         => 'boxed-brown',
			'label'        => __('Boxed Brown', 'tt4-block-styles'),
			'style_handle' => 'boxed-brown-style',
		)
	);
}

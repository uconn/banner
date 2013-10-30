<?php
/**
 * Represents the view for the public-facing component of the plugin.
 *
 * This typically includes any information, if any, that is rendered to the
 * frontend of the theme when the plugin is activated.
 *
 * @package   UConn_Banner
 * @author    Joseph Thibeault <joseph.thibeault@uconn.edu>
 * @license   GPL-2.0+
 * @link      http://uconn.edu
 * @copyright 2013 University of Connecticut
 */

if(!class_exists('Liquid')) {

	define('BASE_PATH', dirname(__FILE__).'/../vendor/');

	require_once( BASE_PATH . 'php-liquid/Liquid.class.php' );

	$options = get_option('uconnbanner_options');

	$merge = array(
	    'site' => array(
	        'name' => get_bloginfo('name'),
	        'department' => get_bloginfo('description'),
	        'department_url' => get_bloginfo('url'),
	        'show_header' => $options['display_page_header']
	    )
	);

	$liquid = new LiquidTemplate();

	echo $liquid->parse(file_get_contents(BASE_PATH.'vendor/banner/_includes/banner.html'))->render($merge);

}

?>
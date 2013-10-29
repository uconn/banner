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

	define('BASE_PATH', dirname(__FILE__).'/../');

	require_once( BASE_PATH . 'php-liquid/Liquid.class.php' );

	$merge = array(
	    'site' => array(
	        'name' => 'Office of Awesome',
	        'department' => 'Department of Amazing',
	        'department_url' => 'http://awesome.uconn.edu/',
	        'show_header' => true
	    )
	);

	$liquid = new LiquidTemplate();

	echo $liquid->parse(file_get_contents(BASE_PATH.'banner/_includes/banner.html'))->render($merge);

}

?>
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

	require_once( BASE_PATH . 'autoload.php' );

	$options = get_option('uconnbanner_options');

    /**
     * Build a new banner
     */
    $banner = new UConn\Banner\Banner();
    $banner->name = get_bloginfo('name');
    $banner->department = $options['department_title'];
    $banner->url = get_bloginfo('department_url');
    $banner->header = $options['display_page_header'];


    /**
     * Search form
     */
    ob_start();
    get_search_form();
    $banner->search = ob_get_contents();
    ob_end_clean();

    /**
     * Output the banner
     */
    echo $banner;


}

?>

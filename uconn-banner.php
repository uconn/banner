<?php
/**
 * The WordPress Plugin Boilerplate.
 *
 * A foundation off of which to build well-documented WordPress plugins that
 * also follow WordPress Coding Standards and PHP best practices.
 *
 * @package   UConn_Banner
 * @author    Joseph Thibeault <joseph.thibeault@uconn.edu>
 * @license   GPL-2.0+
 * @link      http://uconn.edu
 * @copyright 2013 University of Connecticut
 *
 * @wordpress-plugin
 * Plugin Name:       UConn Banner
 * Plugin URI:        http://brand.uconn.edu
 * Description:       Adds the UConn Banner to the header of your Wordpress site
 * Version:           1.1.0
 * Author:            University of Connecticut
 * Author URI:        http://uconn.edu
 * Text Domain:       US-EN
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 * GitHub Plugin URI: https://github.com/uconn/uconn-banner-wp
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once( plugin_dir_path( __FILE__ ) . 'class-uconn-banner.php' );
require_once( plugin_dir_path( __FILE__ ) . 'class-uconn-banner-admin.php' );

/*
 * Register hooks that are fired when the plugin is activated or deactivated.
 * When the plugin is deleted, the uninstall.php file is loaded.
 *
 */
register_activation_hook( __FILE__, array( 'UConn_Banner', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'UConn_Banner', 'deactivate' ) );

add_action( 'plugins_loaded', array( 'UConn_Banner', 'get_instance' ) );
add_action( 'plugins_loaded', array( 'UConn_Banner_Admin', 'get_instance' ) );
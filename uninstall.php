<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @package   UConn_Banner
 * @author    Joseph Thibeault <joseph.thibeault@uconn.edu>
 * @license   GPL-2.0+
 * @link      http://uconn.edu
 * @copyright 2013 University of Connecticut
 */

// If uninstall, not called from WordPress, then exit
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// TODO: Define uninstall functionality here
<?php
/**
 * Represents the view for the administration dashboard.
 *
 * This includes the header, options, and other information that should provide
 * The User Interface to the end user.
 *
 * @package   UConn_Banner
 * @author    Joseph Thibeault <joseph.thibeault@uconn.edu>
 * @license   GPL-2.0+
 * @link      http://uconn.edu
 * @copyright 2013 University of Connecticut
 */
?>

<div class="wrap">

	<?php screen_icon(); ?>
	<h2><?php echo esc_html( get_admin_page_title() ); ?></h2>

	<!-- TODO: Provide markup for your options page here. -->
	<div class="wrap">
                        
		<form method="post" action="options.php"> 
		
			<?php settings_fields( 'uconnbanner-group' ); ?>
			<?php $options = get_option('uconnbanner_options'); ?>

			<ul>
				<li>
					<h3>Display Page Header</h3>
					<select id="display_page_header" name="uconnbanner_options[display_page_header]">
						<option value="0" <?php selected(false, $options['display_page_header']); ?>>No</option>
						<option value="1" <?php selected(true, $options['display_page_header']); ?>>Yes</option>
					</select>
				</li>
			</ul>

			<?php submit_button(); ?>

		</form>

	</div>

</div>

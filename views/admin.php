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
                        
		<form method="post" id="uconn-banner-settings" action="options.php"> 
		
			<?php settings_fields( 'uconnbanner-group' ); ?>
			<?php $options = get_option('uconnbanner_options'); ?>

			<table class="form-table">

				<tr valign="top">
					<th scope="row">
						<label for="display_page_header">Display Page Header</label>
					</th>
					<td>
						<select id="display_page_header" name="uconnbanner_options[display_page_header]">
							<option value="1" <?php selected(true, $options['display_page_header']); ?>>Yes</option>
							<option value="0" <?php selected(false, $options['display_page_header']); ?>>No</option>
						</select>
					</td>
				</tr>

				<tr valign="top">
					<th scope="row">
						<label for="department_title">Department</label>
					</th>
					<td>
						<input id="department_title" value="<?php if(isset($options['department_title'])) echo $options['department_title']; ?>" name="uconnbanner_options[department_title]"/>
					</td>
				</tr>

				<tr valign="top">
					<th scope="row">
						<label for="department_url">Department URL</label>
					</th>
					<td>
						<input id="department_url" value="<?php if(isset($options['department_url'])) echo $options['department_url']; ?>" name="uconnbanner_options[department_url]"/>
					</td>
				</tr>

			</table>

			<hr/>

			<table class="form-table">

				<tr valign="top">
					<th scope="row">
						<label for="display_page_header">Site Title</label>
					</th>
					<td>
						<p>Edit the site title by visiting <em>Settings -> <a href="options-general.php">General</a></em></p>
					</td>
				</tr>

			</table>

			<?php submit_button(); ?>

		</form>

	</div>

</div>

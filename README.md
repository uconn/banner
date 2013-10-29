# UConn Banner for Wordpress

Inserts the UConn header branding at the top of your Wordpress site.

## Features

* Github Updates.
* Stylesheets referenced through the UConn CDN.

## Installation

1. Copy the `uconn-banner-wp` directory into your `wp-content/plugins` directory
2. Navigate to the *Plugins* dashboard page
3. Locate the menu item that reads *TODO*
4. Click on *Activate*
5. Place the action `<?php do_action('uconn_banner'); ?>` into your theme's header.php file after the opening body tag.

## Recommended Tools

### Localization Tools

The WordPress Plugin Boilerplate uses a variable to store the text domain used when internationalizing strings throughout the Boilerplate. To take advantage of this method,
there are tools that are recommended for providing correct, translatable files:

* [Poedit](http://www.poedit.net/)
* [makepot](http://i18n.svn.wordpress.org/tools/trunk/)
* [i18n](https://github.com/grappler/i18n)

Any of the above tools should provide you with the proper tooling to localize the plugin.

## License

The UConn Banner Plugin is licensed under the GPL v2 or later.

> This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as
published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

> You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

## Important Notes

This plugin requires submodules:

1. [PHP-Liquid](https://github.com/harrydeluxe/php-liquid.git)
2. [UConn-Banner](https://github.com/uconn/banner.git)

Use the command `git clone --recursive git://github.com/uconn/uconn-banner-wp.git` to clone the repo and its submodules.

### Licensing

The WordPress Plugin Boilerplate is licensed under the GPL v2 or later; however, if you opt to use third-party code that is not compatible with v2, then you may need to switch to using code that is GPL v3 compatible.

For reference, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that covers the Apache 2.0 License used by [Bootstrap](http://twitter.github.io/bootstrap/).

## Assets

The assets directory provides two files that are used to represent plugin header images.

When committing your work to the WordPress Plugin Repository, these files should reside in their own `assets` directory, not in the root of the plugin. The initial repository will contain three directories:

1. `branches`
2. `tags`
3. `trunk`

You'll need to add an `assets` directory into the root of the repository. So the final directory structure should include *four* directories:

1. `assets`
2. `branches`
3. `tags`
4. `trunk`

Next, copy the contents of the `assets` directory that are bundled with the Boilerplate into the root of the repository. This is how the WordPress Plugin Repository will retrievie the plugin header image.

Of course, you'll want to customize the header images from the place holders that are provided with the Boilerplate.

For more, in-depth information about this, read [this post](http://make.wordpress.org/plugins/2012/09/13/last-december-we-added-header-images-to-the/) by [Otto](https://twitter.com/Otto42).

Plugin screenshots can be saved to one of two locations:

1. The old way is to keep them in the root of the plugin directory. This will increase the size of the download of the plugin, but make the images accessible for those who install it. This is deprecated in the WordPress Plugin Boilerplate
2. With the alternative way, you can save the screenshots in the `assets` directory, as well. The repository will look here for the screenshot files as well; however, they will not be included in the plugin download thus reducing the size of the plugin. As of its latest version, the WordPress Plugin Boilerplate now follows this convention.

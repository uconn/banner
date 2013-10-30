# UConn Banner for Wordpress

Inserts the UConn header branding at the top of your Wordpress site.

## Features

* Github Updates.
* Stylesheets referenced through the UConn CDN.

## Installation

Download the latest build of the [Wordpress UConn Banner Plugin](#) from [UConn's brand website](#), or follow the instructions below to install the plugin from GitHub.

1. In an empty folder, run the command `git clone --recursive git://github.com/uconn/uconn-banner-wp.git`
2. Copy the `uconn-banner-wp` directory into your `wp-content/plugins` directory
3. In Wordpress, navigate to the *Plugins* dashboard page
4. Locate the plugin named *UConn Banner* and click on *Activate*
5. Place the action `<?php do_action('uconn_banner'); ?>` into your theme's `header.php` file after the opening `<body>` tag. This file can be found by navigating to *Appearance -> Editor* and looking for the `header.php` file in the right column.

## Upgrading

There are two ways of upgrading the plugin. You may follow the installation instructions and upload `uconn-banner-wp`, replacing the old version in your `wp-content/plugins` directory or if you still have the original cloned repository in a folder, you can run the command `git pull --recursive` to pull in the most recent changes from GitHub.

## Important Notes

This plugin requires submodules:

1. [PHP-Liquid](https://github.com/harrydeluxe/php-liquid.git)
2. [UConn-Banner](https://github.com/uconn/banner.git)

Use the command `git clone --recursive git://github.com/uconn/uconn-banner-wp.git` to clone the repo and its submodules.

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

### Licensing

The UConn Banner Plugin is licensed under the GPL v2 or later; however, if you opt to use third-party code that is not compatible with v2, then you may need to switch to using code that is GPL v3 compatible.

For reference, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that covers the Apache 2.0 License used by [Bootstrap](http://twitter.github.io/bootstrap/).
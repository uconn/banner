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

> The MIT License (MIT)
> 
> Copyright (c) 2014 University Communications at UConn
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

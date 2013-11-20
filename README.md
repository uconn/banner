![Screenshot](http://brand.uconn.edu/sites/default/files/web-page-content-align.png)


# UConn Banner
A (UConn brand) standards-compliant implementation of the University's web banner. 


## History
As with most of our recent [web branding](http://brand.uconn.edu/standards/web/) efforts, University Communications has teamed with the UITS Web Dev Lab to create a new look for the University's web presence. While the majority of university departments and organizations can be brought into brand compliance through the use of the [Aurora](http://aurora.uconn.edu/) (WordPress) platform courtesy of UITS, there is still a need for static templates. This project attempts to bridge that gap.

## Who should use this?
Anyone building a new *.uconn.edu website that won't be hosting on the Aurora platform. 

## Features
* **Modular** - Works with almost any existing template/theme.
* **Responsive** - It's already mobile-friendly.
* **Retina/HiDPI-ready** - Crisp/clean display on HiDPI devices, including Apple's Retina products.

## Requirements

* [Conditional HTML Classes for Internet Explorer](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/)
* ~~[BootstrapCDN](http://www.bootstrapcdn.com/#legacy_tab) (2.3.x - legacy)~~\*
* ~~[FontAwesome](http://www.bootstrapcdn.com/#fontawesome_tab)~~\*

\* **NOTE:** The latest version of the UConn Banner no longer requires Bootstrap or FontAwesome.


## Usage:
There are a number of ways to use this code. Here are just a few:

1. *HTML* - You can [download the latest zip file](https://github.com/uconn/banner/archive/master.zip) and use the assets in the "_site" directory to start building your website.
2. *PHP* - [Use php-liquid to embed the banner in your page](https://github.com/uconn/banner/wiki/Banner-rendering-with-PHP).
3. *Jekyll* - Clone/download this repo and use [Jekyll](http://jekyllrb.com/) and [Compass](http://compass-style.org/) to customize your build.

```bash
	git clone https://github.com/uconn/banner.git
	cd banner
	compass watch &
	jekyll serve --watch
```
Open up [http://localhost:4000/](http://localhost:4000/) in your web browser to view your changes.


___

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/uconn/banner/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

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
Although the banner strives to be modular, it currently relies on grid classes from Bootstrap (2.3.x) and icons from FontAwesome. Please be sure to include Bootstrap and FontAwesome in your site before using this banner. We recommend using BootstrapCDN to meet both of these requirements. 

* [BootstrapCDN](http://www.bootstrapcdn.com/#legacy_tab) (2.3.x - legacy)
* [FontAwesome](http://www.bootstrapcdn.com/#fontawesome_tab)

**NOTE:** We have plans to completely remove Bootstrap and FontAwesome as requirements. However, these libraries allowed us to bring the banner to market more quickly.


## How to use it:
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


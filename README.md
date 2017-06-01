![Screenshot](http://brand.uconn.edu/wp-content/uploads/sites/1060/2015/01/web-page-content-align.jpg)


# UConn Banner
A (UConn brand) standards-compliant implementation of the University's web banner. 


## History
As with most of our [web branding](http://brand.uconn.edu/standards/web/) efforts, University Communications has teamed with the UITS Web Dev Lab to create a new look for the University's web presence. While the majority of university departments and organizations can be brought into brand compliance through the use of the [Aurora](http://aurora.uconn.edu/) (WordPress) platform courtesy of UITS, there is still a need for static templates. This project attempts to bridge that gap.

As of May 31, 2017, the `master` branch of this repository represents 2.x of the banner. The key differences are outlined below:


| 1.x | 2.x |
|---|---|
| - Designed for use with Bootstrap| - Bootstrap classes removed|
| - Embedded media queries intended to mirror Bootstrap | - No media queries. User _must_ define them.|
| - [npm compatible](https://www.npmjs.com/package/uconn-banner) | - [composer compatible](https://packagist.org/packages/uconn/banner) |


## Who should use this?
Anyone building a new *.uconn.edu website that won't be hosting on the Aurora platform. 

## Site Requirements (Recommended)

* [Conditional HTML Classes for Internet Explorer](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/)


## Usage:
There are a number of ways to use this code. Here are just a few:

1. **HTML** - You can [download the latest zip file](https://github.com/uconn/banner/archive/master.zip) and use the assets in the "_site" directory to start building your website.
2. **PHP** - [Use Composer to embed the banner in your page](https://github.com/uconn/banner/wiki/Banner-rendering-with-PHP).
3. **npm** - Include as a [node_module](https://www.npmjs.com/package/uconn-banner) with `npm install uconn-banner --save-dev`, use the HTML/CSS from the "_site" directory.


## Contributing / Development

Clone/download this repo and use [Jekyll](http://jekyllrb.com/) and [Compass](http://compass-style.org/).

```bash
	
# Clone and open
git clone https://github.com/uconn/banner.git
cd banner

# Install ruby gems
bundle

# Fire up Compass/SASS
compass watch &

# Jekyll templates w/ built-in web server
jekyll serve --watch
```
Open up [http://localhost:4000/](http://localhost:4000/) in your web browser to view your changes.
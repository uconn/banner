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
3. **npm** - Include as a [node_module](https://www.npmjs.com/package/uconn-banner) with `npm install uconn-banner --save-dev`, use the HTML/CSS/JS from the "_site" directory.

## Tests
This repo uses phpunit to test the attributes of the banner. Tests can be run with `./vendor/bin/phpunit tests/Banner/BannerTest.php --bootstrap vendor/autoload.php`.

## Contributing / Development

Clone/download this repo and use [Jekyll](http://jekyllrb.com/) and [Compass](http://compass-style.org/).

```bash
	
# Clone and open
git clone https://github.com/uconn/banner.git
cd banner

# Install npm dependencies
npm install

# Install ruby gems
bundle

# Run the develop task
npm run develop
```
Open up [http://localhost:4000/](http://localhost:4000/) in your web browser to view your changes.

### Javascript
If you plan to use this banner with the mobile menu enabled, please make sure to read the following carefully. You _must_ implement your own mobile menu. While the banner provides a menu toggle, it is (almost) completely un-opinioated when it comes to the markup or style for the menu. The only thing you must do is make sure that the `id` of the component that wraps the menu matches the `aria-controls` attribute of the menu toggle button.

```html
<!-- banner -->
<button 
  class="btn mobile-menu-btn"
  id="banner-mobile-button"
  aria-haspopup="true"
  aria-controls="mobile-menu-id"
  aria-expanded="false"
>
<!-- end banner -->

<!-- wherever the mobile menu is... -->
<nav id="mobile-menu-id">
  <!-- menu markup -->
</nav>
<!-- end mobile menu -->
```

When the `button` is clicked, it will dispatch a custom javascript event called `ucBannerMenuState` that can be listened to. This lets you control the menu from any other script.

```js
// banner.js

// custom event 
var ucBannerMenuStateEvent = new CustomEvent('ucBannerMenuState', {
  detail: { isOpen: false },
  bubbles: true
})

// this is part of the click event listener on the banner buttons
function toggleMenu(button) {
  var isExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false
  // switch the state of the emitted event
  ucBannerMenuStateEvent.detail.isOpen = !isExpanded
  // dispatch the event
  button.dispatchEvent(ucBannerMenuStateEvent)
  // handle the rest of the toggle
  !isExpanded ? expand(button) : collapse(button)
  return true
}
// end banner.js

// ...some other script in a different part of the project
var menuToggle = document.querySelector('#banner-mobile-button')
var mobileMenu = document.querySelector('#mobile-menu-id')

// listen for the custom event
document.addEventListener('ucBannerMenuState', function(evt) {
  // toggle a class based on the state of the event
  evt.detail.isOpen ? 
    mobileMenu.classList.add('active') : 
    mobileMenu.classList.remove('active');
})
```
For a complete example, consult the unminified [banner.js](js/banner.js) file and [menu-demo.js](js/menu-demo.js) files.

## Static output
To create a static html version of the banner, you can use the included [Generator.php](src/Banner/Generator.php) file. It covers the full range of options available to the Banner. You can use the generator with the command `php src/Banner/Generator.php <options>`. For help or to see a list of options - `php src/Banner/Generator.php --help`.
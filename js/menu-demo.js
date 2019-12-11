var menuToggle = document.querySelector('#banner-mobile-button')
var mobileMenu = document.querySelector('#uc-banner-mobile-menu')

document.addEventListener('ucBannerMenuState', function(evt) {
  var isMenuOpen = evt.detail.isOpen
  console.log(evt.detail)
  if (isMenuOpen) {
    mobileMenu.classList.add('active')
  } else {
    mobileMenu.classList.remove('active')
  }
})
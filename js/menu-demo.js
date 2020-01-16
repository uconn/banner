var menuToggle = document.querySelector('#banner-mobile-button')
var mobileMenu = document.querySelector('#banner-controlled-mobile-menu')

document.addEventListener('ucBannerMenuState', function(evt) {
  evt.detail.isOpen ? 
    mobileMenu.classList.add('active') : 
    mobileMenu.classList.remove('active');
})
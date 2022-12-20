const menuToggle = document.querySelector('#banner-mobile-button')
const mobileMenu = document.querySelector('#banner-controlled-mobile-menu')

// typescript is a little annoying about custom events
// check the event type first before proceeding
const isCustomEvent = (evt: Event): evt is CustomEvent => {
  return 'detail' in evt
}

document.addEventListener('ucBannerMenuState', (evt: Event) => {
  if (!isCustomEvent(evt)) {
    throw new Error('Not a banner menu state event')
  }
  const detail = (evt as CustomEvent).detail
  detail.isOpen ?
    mobileMenu?.classList.add('active') :
    mobileMenu?.classList.remove('active')
})
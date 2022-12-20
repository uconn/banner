import '../sass/banner.scss'

(function() {
  const banner = document.querySelector('#uconn-banner')
  const buttonContainer = document.querySelector('#button-container')
  const bannerButtons = document.querySelectorAll('#button-container button[aria-controls]')
  const buttons = Array.from(bannerButtons)

  const mobileToggle = <HTMLButtonElement | null>document.querySelector('#banner-mobile-button')
  const mobileMenuId = mobileToggle?.getAttribute('aria-controls') ?? ''
  const mobileMenu = <HTMLElement | null>document.getElementById(mobileMenuId)

  const ucBannerMenuStateEvent = new CustomEvent('ucBannerMenuState', {
    detail: { isOpen: false },
    bubbles: true
  })

  banner?.classList.remove('no-js')

  buttonContainer?.addEventListener('click', clickHandler)

  function clickHandler(evt: Event) {
    
    const target = <HTMLElement>evt?.target

    if (target.localName !== 'button') return

    toggleButtons(evt, buttons)

    document.addEventListener('click', closeHandler)
    document.addEventListener('keydown', keyboardCloseHandler)
  }

  function closeHandler(evt: Event) {

    const target = <HTMLElement | null>evt.target
    const buttonContainerEvent = buttonContainer?.contains(target)
    const mobileMenuEvent = mobileMenu?.contains(target) && mobileMenu !== null
    const isIgnorableEvent = evt.type === 'click' || evt.type === 'keydown' ? true : false

    if (isIgnorableEvent && (buttonContainerEvent || mobileMenuEvent)) {
      return
    } else {
      clickToClose(buttons)
    }

    document.removeEventListener('click', closeHandler)
    document.removeEventListener('keydown', keyboardCloseHandler)
  }

  function keyboardCloseHandler(evt: KeyboardEvent) {    
    if (evt.code === 'Escape') {
      escapeKeyPressedToClose(evt, buttons)
    }
  }

  function toggleButtons(evt: Event, buttons: Element[]) {
    buttons.forEach(function (button) {

      const isExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false

      if (button === evt.target && button.nextElementSibling === null) {
        toggleMenu(button)
      } else if (button !== evt.target && button.nextElementSibling === null) {
        closeMenu(button)
      } else if (button === evt.target && button.nextElementSibling && isExpanded) {
        collapse(button)
        removeClass(button.nextElementSibling)
      } else if (button === evt.target && button.nextElementSibling) {
        expand(button)
        addClass(button.nextElementSibling)
      } else if (button !== evt.target && button.nextElementSibling) {
        collapse(button)
        removeClass(button.nextElementSibling)
      }
    })
  }

  function escapeKeyPressedToClose(evt: Event, buttons: Element[]) {      
    buttons.forEach(function(button) {
      closeMenu(button)
      collapse(button)
      removeClass(button.nextElementSibling)
    })
  }

  function clickToClose(buttons: Element[]) {
    buttons.forEach(function (button) {
      if (button.nextElementSibling === null) {
        closeMenu(button)
      } else {
        collapse(button)
        removeClass(button.nextElementSibling)
      }
    })
  }

  function toggleMenu(button: Element) {
    const toggleText = document.querySelector('#menu-toggle-text')
    const isExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false
    ucBannerMenuStateEvent.detail.isOpen = !isExpanded
    button.dispatchEvent(ucBannerMenuStateEvent)
    if (!isExpanded && toggleText) {
      expand(button)
      toggleText.textContent = 'close'
    } else if (isExpanded && toggleText) {
      collapse(button)
      toggleText.textContent = 'open'
    }
    return true
  }

  function closeMenu(button: Element) {
    collapse(button)
    ucBannerMenuStateEvent.detail.isOpen = false
    button.dispatchEvent(ucBannerMenuStateEvent)
    return true
  }

  function addClass(el: Element) {
    el.classList.add('banner-popup-active')
  }

  function removeClass(el: Element | null) {
    el?.classList.remove('banner-popup-active')
  }

  function expand(el: Element) {
    el.setAttribute('aria-expanded', 'true')
  }

  function collapse(el: Element) {
    el.setAttribute('aria-expanded', 'false')
  }
})()
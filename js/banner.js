import '../sass/banner.scss'

(function() {
  var banner = document.querySelector('#uconn-banner')
  var buttonContainer = document.querySelector('#button-container')
  var bannerButtons = document.querySelectorAll('#button-container button[aria-controls]')
  var buttons = Array.prototype.slice.call(bannerButtons, 0)

  var mobileToggle
  var mobileMenuId
  if (document.querySelector('#banner-mobile-button') !== null) {
    mobileToggle = document.querySelector('#banner-mobile-button')
    mobileMenuId = mobileToggle.getAttribute('aria-controls')
    mobileMenu = document.getElementById(mobileMenuId)
  }

  var ucBannerMenuStateEvent = new CustomEvent('ucBannerMenuState', {
    detail: { isOpen: false },
    bubbles: true
  })

  banner.classList.remove('no-js')

  buttonContainer.addEventListener('click', clickHandler)

  function clickHandler(evt) {
    if (evt.target.localName !== 'button') return

    toggleButtons(evt, buttons)

    document.addEventListener('click', closeHandler)
    document.addEventListener('keydown', closeHandler)
  }

  function closeHandler(evt) {
    var buttonContainerEvent = buttonContainer.contains(evt.target)
    var mobileMenuEvent = mobileMenu.contains(evt.target) && mobileMenu !== null
    var isIgnorableEvent = evt.type === 'click' || evt.type === 'keydown' ? true : false

    if (evt.which === 27) {
      escapeKeyPressedToClose(evt, buttons)
    }

    if (isIgnorableEvent && (buttonContainerEvent || mobileMenuEvent)) {
      return
    } else {
      clickToClose(buttons)
    }

    document.removeEventListener('click', closeHandler)
    document.removeEventListener('keydown', closeHandler)
  }

  function toggleButtons(evt, buttons) {
    buttons.forEach(function (button) {

      var isExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false

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

  function escapeKeyPressedToClose(evt, buttons) {
    buttons.forEach(function(button) {
      if (evt.target === document.querySelector('body') && button.nextElementSibling === null) {
        closeMenu(button)
      } else if (evt.target === document.querySelector('body') && button.nextElementSibling) {
        collapse(button)
        removeClass(button.nextElementSibling)
      }
    })
  }

  function clickToClose(buttons) {
    buttons.forEach(function (button) {
      if (button.nextElementSibling === null) {
        closeMenu(button)
      } else {
        collapse(button)
        removeClass(button.nextElementSibling)
      }
    })
  }

  function toggleMenu(button) {
    var toggleText = document.querySelector('#menu-toggle-text')
    var isExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false
    ucBannerMenuStateEvent.detail.isOpen = !isExpanded
    button.dispatchEvent(ucBannerMenuStateEvent)
    if (!isExpanded) {
      expand(button)
      toggleText.textContent = 'close'
    } else {
      collapse(button)
      toggleText.textContent = 'open'
    }
    return true
  }

  function closeMenu(button) {
    collapse(button)
    ucBannerMenuStateEvent.detail.isOpen = false
    button.dispatchEvent(ucBannerMenuStateEvent)
    return true
  }

  function addClass(el) {
    el.classList.add('banner-popup-active')
  }

  function removeClass(el) {
    el.classList.remove('banner-popup-active')
  }

  function expand(el) {
    el.setAttribute('aria-expanded', 'true')
  }

  function collapse(el) {
    el.setAttribute('aria-expanded', 'false')
  }
})()
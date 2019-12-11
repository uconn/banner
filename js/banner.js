(function() {
  var buttonContainer = document.querySelector('#button-container')
  var menuToggle = document.querySelector('#banner-mobile-button')
  var popupContainers = document.querySelectorAll('.popup-container')

  var ucBannerMenuStateEvent = new CustomEvent('ucBannerMenuState', {
    detail: { isOpen: false },
    bubbles: true
  })

  buttonContainer.addEventListener('click', clickHandler)

  function clickHandler(evt) {
    if (evt.target.localName !== 'button') return

    if (evt.target === menuToggle) {
      mobileMenuHandler(evt)
    } else {
      popupHandler(evt)
    }

    document.addEventListener('click', closeElementHandler)
    document.addEventListener('keydown', closeElementHandler)
  }

  function closeElementHandler(evt) {
    var useCloseMenu = true
    var closeFunction = useCloseMenu === true ? closeMenu : closePopups
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(evt)
    } else {
      useCloseMenu = false
      closePopups(evt)
    }
    document.removeEventListener('click', closeFunction)
    document.removeEventListener('keydown', closeFunction)
  }

  function popupHandler(evt) {
    var popup = evt.target.nextElementSibling

    popupContainers.forEach(function(container) {
      if (container === popup) {
        addClass(container)
        expand(container.previousElementSibling)
      } else {
        removeClass(container)
        collapse(container.previousElementSibling)
      }
    })
  }

  function mobileMenuHandler(evt) {
    var menuToggle = evt.target
    var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' ? true : false

    ucBannerMenuStateEvent.detail.isOpen = !isExpanded
    menuToggle.dispatchEvent(ucBannerMenuStateEvent)

    if (!isExpanded) {
      expand(menuToggle)
    } else {
      collapse(menuToggle)
    }
  }

  function closePopups(evt) {
    if (!buttonContainer.contains(evt.target)) {
      var validType = evt.type === 'click' ? true : false
      var escapeKey = evt.which === 27 ? true : false
      
      if (validType || escapeKey) {
        popupCloser(popupContainers)
      }

    } else if (buttonContainer.contains(evt.target) && evt.which === 27) {
      popupCloser(popupContainers)
    } else if (evt.target === menuToggle) {
      popupCloser(popupContainers)
    } else {
      return false
    }
  }

  function popupCloser(popups) {
    popups.forEach(function (container) {
      removeClass(container)
      collapse(container.previousElementSibling)
    })
    document.removeEventListener('click', closePopups)
    document.removeEventListener('keydown', closePopups)
  }

  function closeMenu(evt) {

    if (evt.which === 27) {
      ucBannerMenuStateEvent.detail.isOpen = false
      menuToggle.dispatchEvent(ucBannerMenuStateEvent)
      collapse(menuToggle)
      return true;
    }

    var toggleControls = menuToggle.getAttribute('aria-controls')
    var mobileMenu = document.getElementById(toggleControls)
    if (buttonContainer.contains(evt.target) || mobileMenu.contains(evt.target)) return

    collapse(menuToggle)
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
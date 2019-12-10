(function() {
  var buttonContainer = document.getElementById('button-container')
  var popupContainers = document.querySelectorAll('.popup-container')
  
  buttonContainer.addEventListener('click', popupHandler)

  function popupHandler(evt) {
    if (evt.target.localName !== 'button') return

    var popup = evt.target.nextElementSibling

    popupContainers.forEach(function(container) {
      if (container === popup) {
        addClass(container)
      } else {
        removeClass(container)
      }
    })

    document.addEventListener('click', closePopups)
    document.addEventListener('keydown', closePopups)
  }


  function closePopups(evt) {
    if (buttonContainer.contains(evt.target)) return 

    var validType = evt.type === 'focus' ? true : false
    var escapeKey = evt.which === 27 ? true : false
    
    if (validType || escapeKey) {
      popupContainers.forEach(function(container) {
        removeClass(container)
      })
      document.removeEventListener('click', closePopups)
      document.removeEventListener('keydown', closePopups)
    }
  }

  function addClass(el) {
    el.classList.add('banner-popup-active')
  }

  function removeClass(el) {
    el.classList.remove('banner-popup-active')
  }
})()
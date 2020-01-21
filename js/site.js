(() => {
  const forms = Array.from(document.querySelectorAll('main form'))
  const selects = Array.from(document.querySelectorAll('select'))
  const radioButtons = Array.from(document.querySelectorAll('input[type=radio]'))
  const toggles = [...selects, ...radioButtons]

  setInitialSiteTitleInput()

  forms.map(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      switch (evt.target.id) {
        case 'container-width-form':
          const width = evt.target.querySelector('#container-width').value
          setWidth(width)
          displayWidth(width)
          break;
        case 'site-title-form':
          const title = evt.target.querySelector('#site-title-input').value
          const abbrev = evt.target.querySelector('#site-abbrev-input').value
          setText(title, '#university-of-connecticut')
          setText(abbrev, '#site-abbreviation')
          break;
        default:
          break;
      }
    })
  })

  toggles.map(toggle => {
    toggle.addEventListener('change', (evt) => {
      switch (evt.target.id) {
        case 'standard-theme':
        case 'inverted-theme':
          setTheme(evt.target.value)
          break;

        default:
          break;
      }
    })
  })

  function setInitialSiteTitleInput() {
    if (!document.querySelector('#uconn-banner').classList.contains('alternative')) return
    const title = document.querySelector('#university-of-connecticut').innerText
    const abbrev = document.querySelector('#site-abbreviation').innerText
    document.querySelector('#site-title-input').value = title
    document.querySelector('#site-abbrev-input').value = abbrev
  }

  const setWidth = width => {
    document.documentElement.style.setProperty('--container-width', `${width}px`)
  }

  const displayWidth = width => {
    const dataWidths = Array.from(document.querySelectorAll('.data-width'))
    dataWidths.map(span => {
      span.innerHTML = `${width}px`
    })
  }

  const setText = (text, selector) => {
    const bannerText = document.querySelector(`${selector}`)
    bannerText.innerHTML = text
  }

  const setTheme = (theme) => {
    const headerContainer = document.querySelector('#uconn-header-container')
    if (theme.includes('inverted')) {
      headerContainer.classList.add('white')
    } else {
      headerContainer.classList.remove('white')
    }
  }

})()


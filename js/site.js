import '../sass/site.scss'

(() => {
  const forms = Array.from(document.querySelectorAll('main form'))
  const selects = Array.from(document.querySelectorAll('select'))
  const radioButtons = Array.from(document.querySelectorAll('input[type=radio]'))
  const toggles = [...selects, ...radioButtons]

  setInitialSiteStorage()
  setInitialSiteTitleInput()
  setInitialSiteTheme()
  setInitialWidth()

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
          setText({ 
            key: 'title',
            selector: '#university-of-connecticut', 
            text: title, 
          })
          setText({ 
            key: 'abbrev',
            selector: '#site-abbreviation', 
            text: abbrev, 
          })
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

  function setInitialSiteStorage() {
    return [
      {
        key: 'theme',
        value: 'blue'
      },
      {
        key: 'width',
        value: 768
      },
      {
        key: 'title',
        value: 'University Communications'
      },
      {
        key: 'abbrev',
        value: 'UComm'
      }
    ].map(({ key, value }) => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, value)
        return true
      }
      return false
    })
  }

  function setInitialSiteTitleInput() {
    if (!document.querySelector('#uconn-banner').classList.contains('alternative')) return
    const title = localStorage.getItem('title')
    const abbrev = localStorage.getItem('abbrev')
    document.querySelector('#university-of-connecticut').innerText = title
    document.querySelector('#site-title-input').value = title
    document.querySelector('#site-abbreviation').innerText = abbrev
    document.querySelector('#site-abbrev-input').value = abbrev
  }

  function setInitialSiteTheme() {
    const theme = localStorage.getItem('theme')
    const themeToggle = document.querySelector(`#banner-theme-form input[value=${theme}]`)
    document.querySelector('#uconn-header-container').classList.add(theme)
    themeToggle.setAttribute('checked', 'checked')
  }

  function setInitialWidth() {
    width = localStorage.getItem('width')
    document.querySelector('#container-width').value = width
    setWidth(width)
    displayWidth(width)
  }

  function setWidth(width) {
    document.documentElement.style.setProperty('--container-width', `${width}px`)
    localStorage.setItem('width', width)
  }

  function displayWidth (width) {
    const dataWidths = Array.from(document.querySelectorAll('.data-width'))
    dataWidths.map(span => {
      span.innerHTML = `${width}px`
    })
  }

  const setText = ({ text, selector, key }) => {
    const bannerText = document.querySelector(`${selector}`)
    bannerText.innerHTML = text
    localStorage.setItem(key, text)
  }

  const setTheme = (theme) => {
    const headerContainer = document.querySelector('#uconn-header-container')
    if (theme === 'white') {
      headerContainer.classList.add('white')
    } else {
      headerContainer.classList.remove('white')
    }
    localStorage.setItem('theme', theme)
  }

})()


import '../sass/site.scss'

(() => {
  const forms = Array.from(document.querySelectorAll('main form'))
  const selects = Array.from(document.querySelectorAll('select'))
  const radioButtons = Array.from(document.querySelectorAll('input[type=radio]'))
  const toggles = [...selects, ...radioButtons]
  const downloadButtons = Array.from(document.querySelectorAll('.download-button'))

  setInitialSiteStorage()
  setInitialSiteTitleInput()
  setInitialSiteTheme()
  setInitialWidth()
  setInitialSiteTitlesDisplay()
  setInitialTitles()

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
          const levelOne = evt.target.querySelector('#level-one-input').value
          const levelTwo = evt.target.querySelector('#level-two-input').value
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
          setText({
            key: 'level-one-title',
            selector: '#uc-site-title a',
            text: levelOne
          })
          setText({
            key: 'level-two-title',
            selector: '#uc-site-parent a',
            text: levelTwo
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
        case 'site-titles-display':
        case 'site-titles-hide':
          setSiteTitleDisplay(evt.target.value)
          break;
        default:
          break;
      }
    })
  })

  downloadButtons.map(button => {
    button.addEventListener('click', (evt) => {
      switch (evt.target.id) {
        case 'download-banner-html':
        case 'download-levels-html':
          const element = evt.target.getAttribute('data-element')
          downloadHTML(element)
          break

        case 'download-banner-styles':
        case 'download-banner-script':
          const type = evt.target.id === 'download-banner-styles' ? 'css' : 'js'
          downloadAssets(type)
          break
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
      },
      {
        key: 'site-title-display',
        value: 'block'
      },
      {
        key: 'level-one-title',
        value: 'UConn Banner'
      },
      {
        key: 'level-two-title',
        value: 'University Communications'
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

  function setInitialTitles() {
    const levelOne = localStorage.getItem('level-one-title')
    const levelTwo = localStorage.getItem('level-two-title')
    document.querySelector('#level-one-input').value = levelOne
    document.querySelector('#level-two-input').value = levelTwo
    document.querySelector('#uc-site-title a').innerText = levelOne
    document.querySelector('#uc-site-parent a').innerText = levelTwo
  }

  function setInitialSiteTheme() {
    const theme = localStorage.getItem('theme')
    const themeToggle = document.querySelector(`#banner-theme-form input[value=${theme}]`)
    document.querySelector('#uconn-header-container').classList.add(theme)
    themeToggle.setAttribute('checked', 'checked')
  }

  function setInitialWidth() {
    const width = localStorage.getItem('width')
    document.querySelector('#container-width').value = width
    setWidth(width)
    displayWidth(width)
  }

  function setInitialSiteTitlesDisplay() {
    const siteTitles = document.querySelector('#site-titles')
    const style = localStorage.getItem('site-title-display')
    const siteTitleToggle = document.querySelector(`#site-title-toggle input[value=${style}]`)
    siteTitles.style.display = style
    siteTitleToggle.setAttribute('checked', 'checked')
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

  const setSiteTitleDisplay = (style) => {
    const siteTitles = document.querySelector('#site-titles')
    siteTitles.style.display = style
    localStorage.setItem('site-title-display', style)
  }

  const downloadHTML = (id) => {
    const el = document.querySelector(`#${id}`)
    const markup = el.innerHTML
    const blob = new Blob([markup], { type: 'text/plain' })
    const blobURL = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobURL
    link.download = `${el.id}.html`
    link.click()
  }

  const downloadAssets = (type) => {
    const link = document.createElement('a')
    const fileName = `banner.${type}`
    link.href = `${window.location.origin}/${fileName}`
    link.download = fileName
    link.click()
  }
})()


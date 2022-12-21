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

      const target = <HTMLElement>evt.target

      switch (target.id) {
        case 'container-width-form':
          const width = (target.querySelector('#container-width') as HTMLInputElement).value
          setWidth(width)
          displayWidth(width)
          break;
        case 'site-title-form':
          const titleInput = <HTMLInputElement | null>target.querySelector('#site-title-input')
          const abbrevInput = <HTMLInputElement | null>target.querySelector('#site-abbrev-input')
          const levelOneInput = <HTMLInputElement | null>target.querySelector('#level-one-input')
          const levelTwoInput = <HTMLInputElement | null>target.querySelector('#level-two-input')
          console.log({abbrevInput});
          
          if (titleInput) {
            setText({ 
              key: 'title',
              selector: '#university-of-connecticut', 
              text: titleInput.value, 
            })
          }

          if (abbrevInput) {
            setText({ 
              key: 'abbrev',
              selector: '#site-abbreviation', 
              text: abbrevInput.value, 
            })
          }

          if (levelOneInput) {
            setText({
              key: 'level-one-title',
              selector: '#uc-site-title a',
              text: levelOneInput.value
            })
          }

          if (levelTwoInput) {
            setText({
              key: 'level-two-title',
              selector: '#uc-site-parent a',
              text: levelTwoInput.value
            })
          }

          break;
        default:
          break;
      }
    })
  })

  toggles.forEach(toggle => {
    toggle.addEventListener('change', (evt) => {
      const target = <HTMLElement>evt.target
      switch (target.id) {
        case 'standard-theme':
        case 'inverted-theme':
          setTheme((target as HTMLInputElement).value)
          break;
        case 'site-titles-display':
        case 'site-titles-hide':
          setSiteTitleDisplay((target as HTMLInputElement).value)
          break;
        default:
          break;
      }
    })
  })

  downloadButtons.forEach(button => {
    button.addEventListener('click', (evt) => {
      const target = <HTMLElement>evt.target
      switch (target.id) {
        case 'download-banner-html':
        case 'download-levels-html':
          const element = target.getAttribute('data-element') ?? ''
          downloadHTML(element)
          break

        case 'download-banner-styles':
        case 'download-banner-script':
          const type = target.id === 'download-banner-styles' ? 'css' : 'js'
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
        value: '768'
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
    if (!document.querySelector('#uconn-banner')?.classList.contains('alternative')) return
    const title = localStorage.getItem('title')
    const abbrev = localStorage.getItem('abbrev')
    const uconn = <HTMLElement | null>document.querySelector('#university-of-connecticut')
    const abbreviation = <HTMLElement | null>document.querySelector('#site-abbreviation')
    const abbreviationInput = <HTMLInputElement | null>document.querySelector('#site-abbrev-input')
    const siteTitleInput = <HTMLInputElement | null>document.querySelector('#site-title-input')
    if (abbreviationInput) abbreviationInput.value = abbrev ?? ''
    if (siteTitleInput) siteTitleInput.value = title ?? ''
    if (abbreviation) abbreviation.innerText = abbrev ?? ''
    if (uconn) uconn.innerText = title ?? ''
  }

  function setInitialTitles() {
    const levelOne = localStorage.getItem('level-one-title')
    const levelTwo = localStorage.getItem('level-two-title')
    const levelOneInput = <HTMLInputElement | null>document.querySelector('#level-one-input')
    const levelTwoInput = <HTMLInputElement | null>document.querySelector('#level-two-input')
    const levelOneTitle = <HTMLAnchorElement | null>document.querySelector('#uc-site-title a')
    const levelTwoTitle = <HTMLAnchorElement | null>document.querySelector('#uc-site-parent a')
    if (levelOneInput) levelOneInput.value = levelOne ?? ''
    if (levelTwoInput) levelTwoInput.value = levelTwo ?? ''
    if (levelOneTitle) levelOneTitle.innerText = levelOne ?? ''
    if (levelTwoTitle) levelTwoTitle.innerText = levelTwo ?? ''  
  }

  function setInitialSiteTheme() {
    const theme = localStorage.getItem('theme') ?? ''
    const themeToggle = document.querySelector(`#banner-theme-form input[value=${theme}]`)
    const headerContainer = document.querySelector('#uconn-header-container')
    headerContainer?.classList.add(theme)
    themeToggle?.setAttribute('checked', 'checked')
  }

  function setInitialWidth() {
    const width = localStorage.getItem('width') ?? '768'
    const containerWidth = <HTMLInputElement>document.querySelector('#container-width')
    containerWidth.value = width ?? ''
    setWidth(width)
    displayWidth(width)
  }

  function setInitialSiteTitlesDisplay() {
    const siteTitles = <HTMLElement>document.querySelector('#site-titles')
    const style = localStorage.getItem('site-title-display')
    const siteTitleToggle = <HTMLInputElement>document.querySelector(`#site-title-toggle input[value=${style}]`)
    siteTitles.style.display = style ?? 'block'
    siteTitleToggle.setAttribute('checked', 'checked')
  }

  function setWidth(width: string) {
    document.documentElement.style.setProperty('--container-width', `${width}px`)
    localStorage.setItem('width', width)
  }

  function displayWidth (width: string) {
    const dataWidths = Array.from(document.querySelectorAll('.data-width'))
    dataWidths.map(span => {
      span.innerHTML = `${width}px`
    })
  }

  const setText = ({ text, selector, key }: { text: string, selector: string, key: string }) => {    
    const bannerText = document.querySelector(`${selector}`)

    if (!bannerText) {
      return
    }

    bannerText.innerHTML = text
    localStorage.setItem(key, text)
  }

  const setTheme = (theme: string) => {
    const headerContainer = <HTMLElement>document.querySelector('#uconn-header-container')
    if (theme === 'white') {
      headerContainer.classList.add('white')
    } else {
      headerContainer.classList.remove('white')
    }
    localStorage.setItem('theme', theme)
  }

  const setSiteTitleDisplay = (style: string) => {
    const siteTitles = <HTMLElement>document.querySelector('#site-titles')
    siteTitles.style.display = style
    localStorage.setItem('site-title-display', style)
  }

  const downloadHTML = (id: string) => {
    const el = <HTMLElement>document.querySelector(`#${id}`)
    const markup = el.innerHTML
    const blob = new Blob([markup], { type: 'text/plain' })
    const blobURL = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobURL
    link.download = `${el.id}.html`
    link.click()
  }

  const downloadAssets = (type: string) => {
    const link = document.createElement('a')
    const fileName = `banner.${type}`
    link.href = `${window.location.origin}/${fileName}`
    link.download = fileName
    link.click()
  }
})()


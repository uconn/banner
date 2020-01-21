const forms = Array.from(document.querySelectorAll('main form'))
const toggles = Array.from(document.querySelectorAll('select'))
const widthForm = document.querySelector('#container-width-form')

forms.map(form => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    switch (evt.target.id) {
      case 'alternative-banner-form':
        setType()
        break;
      case 'container-width-form':
        const width = evt.target.querySelector('#container-width').value
        setWidth(width)
        displayWidth(width)
        break;
    
      default:
        break;
    }
  })
})

toggles.map(toggle => {
  toggle.addEventListener('change', (evt) => {
    switch (evt.target.id) {
      case 'alternative-checker':
        
        break;
    
      case 'theme-switcher':
        setTheme(evt.target.value)
        break;

      default:
        break;
    }
  })
})

const setType = () => {
  console.log(evt.target)
}

const setTheme = (theme) => {
  const headerContainer = document.querySelector('#uconn-header-container')
  if (theme === 'inverted') {
    headerContainer.classList.add('white')
  } else {
    headerContainer.classList.remove('white')
  }
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

import '../sass/cookie-banner.scss'

/**
 * Checks if cookies are enabled and if the user can use cookies
 * @returns {boolean} True if cookies are enabled and the user can use cookies, false otherwise
 */
const canUseCookies = (): boolean => {
  let didSetCookie = false
  const { cookieEnabled } = navigator
  const { hostname } = globalThis.location
  const testCookieName = 'testcookie='

  try {
    // Set a test cookie
    document.cookie = `${testCookieName}1; path=/; SameSite=Lax`
    didSetCookie = document.cookie.includes(testCookieName)

    // Clean up - use the same domain/path as when setting
    const domain = hostname === 'localhost' || hostname === '127.0.0.1'
      ? ''
      : '; domain=.uconn.edu'
    document.cookie = `${testCookieName}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domain}`
  } catch (e) {
    console.error(`Failed to set cookie: ${e}`)
    return false
  }
  return didSetCookie && cookieEnabled
}

/**
 * Gets a cookie by name
 * @param {string} name - The name of the cookie to get
 * @returns {string | null} The value of the cookie, or null if the cookie does not exist
 */
const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const cookieStrings = document.cookie.split(';');

  for (const cookieString of cookieStrings) {
    if (cookieString.startsWith(nameEQ)) {
      return decodeURIComponent(cookieString.substring(nameEQ.length, cookieString.length));
    }
  }

  return null;
}

/**
 * Sets a cookie
 * @param {string} name - The name of the cookie to set
 * @param {string} value - The value of the cookie to set
 * @param {number} days - The number of days the cookie should last
 */
const setCookie = (name: string, value: string, days: number): void => {
  let expires = ''
  const { hostname } = globalThis.location

  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = `; expires=${date.toUTCString()}`
  }

  if (hostname === 'localhost') {
    document.cookie = `${name}=${value}${expires}; path=/`
    return
  }

  if (hostname.endsWith('uconn.edu')) {
    document.cookie = `${name}=${value}${expires}; path=/; domain=.uconn.edu`
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cookieNotice = document.getElementById('uconn-c-notice')
  if (!cookieNotice) {
    console.error('Cookie banner not found')
    return
  }
  const ariaNotices = document.getElementById('aria-uconn-c-notices')
  if (!ariaNotices) {
    console.error('Aria notices not found')
    return
  }
  const withCookies = canUseCookies()
  const hasUConnCookie = getCookie('uconn-uconn-c-consent') === 'true'

  if (!withCookies || hasUConnCookie) {
    cookieNotice.classList.add('hide')
    return
  }

  let isMoreInfoOpen = false
  const acceptCookies = document.getElementById('uconn-accept-uconn-c')
  const moreCookieInfo = document.getElementById('uconn-more-uconn-c-info')
  if (!acceptCookies || !moreCookieInfo) {
    console.error('Cookie banner elements not found')
    return
  }

  moreCookieInfo.addEventListener('click', (evt: Event) => {
    const { target } = evt
    if (!target || !(target instanceof HTMLElement)) {
      return
    }

    const isExpanded = target.getAttribute('aria-expanded') === 'true'
    target.setAttribute('aria-expanded', `${!isExpanded}`)
    isMoreInfoOpen = !isExpanded

    const cookieDetailsWrapper = document.getElementById('uconn-c-details-wrapper')
    if (!cookieDetailsWrapper) {
      console.error('Cookie details wrapper not found')
      return
    }

    cookieDetailsWrapper.classList.toggle('show')
    target.textContent = isMoreInfoOpen ? 'Close' : 'More Information'
  })

  acceptCookies.addEventListener('click', (evt: Event) => {
    evt.preventDefault()

    try {
      setCookie('uconn-uconn-c-consent', 'true', 365)
      const isSet = getCookie('uconn-uconn-c-consent') === 'true'
      isSet ? cookieNotice.classList.add('hide') : console.error('Failed to set cookie')
      ariaNotices.innerText = 'You have accepted cookies and closed the banner'
    } catch (err) {
      console.error(`Failed to set cookie: ${err}`)
    }
  })
})

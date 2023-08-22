export const NavBar = () => {

  const clickHandler = () => {
    console.log('clicked')
  }

  const assembleNavLogo = () => {
    const logoDiv = document.createElement('div')
    logoDiv.id = 'nav-logo-div'
    logoDiv.classList = 'flex stacked-logo-text'

    const navLogo = document.createElement('img')
    navLogo.id = 'nav-logo'
    navLogo.src = '../consts/assets/navbar/small-td-logo.webp'

    const navLogoText = document.createElement('span')
    navLogoText.innerText = 'Auto Repair'

    logoDiv.append(navLogo, navLogoText)

    return logoDiv
  }

  const assembleNavOptions = () => {
    const homeDiv = document.createElement('div')
    homeDiv.innerText = 'Home'

    const serviceDiv = document.createElement('div')
    serviceDiv.innerText = 'Services'

    const contactDiv = document.createElement('div')
    contactDiv.innerText = 'Contact Us'

    const callDiv = document.createElement('div')
    callDiv.innerText = 'Call Us Now: 718-972-6620'

    const addressDiv = document.createElement('div')
    addressDiv.innerText = '896 4th Avenue, Brooklyn, NY 11232'

    return [homeDiv, serviceDiv, contactDiv, callDiv]
  }

  const assembleNavBar = () => {
    const navbarHtml = document.createElement('div')
    navbarHtml.id = 'nav-bar'
    navbarHtml.classList = 'flex'

    navbarHtml.append(assembleNavLogo())

    assembleNavOptions().forEach(option => {
      option.onclick = clickHandler
      option.classList = 'nav-option'
      navbarHtml.append(option)
    })

    return navbarHtml
  }

  return assembleNavBar()
}
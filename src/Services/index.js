import { WrenchIcon, CarRepairIcon, ElectricalIcon, CityIcon } from "../../consts/index.js"

export const Services = () => {
  const servicesHtmlOuter = document.createElement('div')
  servicesHtmlOuter.id = 'services-outer'
  servicesHtmlOuter.classList = 'white-section-outer'
  const servicesHtmlInner = document.createElement('div')
  servicesHtmlInner.id = 'services-inner'
  servicesHtmlInner.classList = 'white-section-inner'

  servicesHtmlOuter.append(servicesHtmlInner)

  const heading = document.createElement('div')
  heading.id = 'service-heading'
  heading.classList = 'flex'

  const title = document.createElement('h1')
  title.id = 'service-title'
  title.innerText = 'Our \n Services'
  const accentLine = document.createElement('hr')
  title.insertAdjacentElement('beforeend', accentLine)

  const aseLogo = document.createElement('img')
  aseLogo.id = 'ase-logo'
  aseLogo.src = '../consts/assets/services/ASE-logo.webp'

  heading.append(title, aseLogo)

  servicesHtmlInner.append(heading)

  const assembleServiceOptions = () => {
    const mechanicalDiv = document.createElement('div')
    mechanicalDiv.classList = 'stacked-logo-text' 
    const mechanicalLabel = document.createElement('span')
    mechanicalDiv.insertAdjacentHTML('afterbegin', WrenchIcon)
    mechanicalLabel.innerText = 'Mechanical'
    mechanicalDiv.append(mechanicalLabel)

    const bodyworkDiv = document.createElement('div')
    bodyworkDiv.classList = 'stacked-logo-text' 
    const bodyworkLabel = document.createElement('span')
    bodyworkDiv.insertAdjacentHTML('afterbegin', CarRepairIcon)
    bodyworkLabel.innerText = 'Bodywork'
    bodyworkDiv.append(bodyworkLabel)

    const electricalDiv = document.createElement('div')
    electricalDiv.classList = 'stacked-logo-text' 
    const electricalLabel = document.createElement('span')
    electricalDiv.insertAdjacentHTML('afterbegin', ElectricalIcon)
    electricalLabel.innerText = 'Electrical'
    electricalDiv.append(electricalLabel)

    const inspectionDiv = document.createElement('div')
    inspectionDiv.classList = 'stacked-logo-text' 
    const inspectionLabel = document.createElement('span')
    inspectionDiv.insertAdjacentHTML('afterbegin', CityIcon)
    inspectionLabel.innerText = 'NYS Inspection'
    inspectionDiv.append(inspectionLabel)

    return [mechanicalDiv, bodyworkDiv, electricalDiv, inspectionDiv]
  }
  const serviceOptionsDiv = document.createElement('div')
  serviceOptionsDiv.id = 'service-options'
  assembleServiceOptions().forEach(option => {
    serviceOptionsDiv.append(option)
  })

  servicesHtmlInner.append(serviceOptionsDiv)


  return servicesHtmlOuter
}
import { chooseUs } from "../../consts/copy/chooseUs/index.js"
import { ChevronRight } from "../../consts/index.js"

export const ChooseUs = () => {
  const chooseUsHtmlOuter = document.createElement('div')
  chooseUsHtmlOuter.id= 'choose-us-outer'
  chooseUsHtmlOuter.classList = 'black-section-outer'
  const chooseUsHtmlInner = document.createElement('div')
  chooseUsHtmlInner.id = 'choose-us-inner'
  chooseUsHtmlInner.classList = 'black-section-inner'

  chooseUsHtmlOuter.append(chooseUsHtmlInner)

  const heading = document.createElement('h1')
  heading.id = 'choose-us-heading'
  heading.innerText = 'Why Choose \n TD Auto?'
  const accentLine = document.createElement('hr')
  heading.insertAdjacentElement('beforeend', accentLine)
  const talkingPointContainer = document.createElement('div')
  talkingPointContainer.id = 'talking-points'
  talkingPointContainer.classList = 'flex'

  chooseUsHtmlInner.append(heading, talkingPointContainer)
  
  chooseUs.forEach(element => {
    const talkingPointDiv = document.createElement('div')
    talkingPointDiv.classList = 'flex talking-point'
    const talkingPointTitle = document.createElement('h2')
    talkingPointTitle.classList = 'talking-point-title'
    talkingPointTitle.innerText = element.title
    const talkingPointBody = document.createElement('h3')
    talkingPointBody.classList = 'talking-point-body'
    talkingPointBody.innerText = element.body

    talkingPointDiv.append(talkingPointTitle)
    talkingPointDiv.insertAdjacentHTML('beforeend', ChevronRight)
    talkingPointDiv.append(talkingPointBody)

    talkingPointContainer.append(talkingPointDiv)
  })
  return chooseUsHtmlOuter
}
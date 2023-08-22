import { aboutUs } from "../../consts/copy/aboutUs/index.js"


export const AboutUs = () => {
  const aboutUsHtmlOuter = document.createElement('div')
  aboutUsHtmlOuter.classList = 'white-section-outer'
  const aboutUsHtmlInner = document.createElement('div')
  aboutUsHtmlInner.classList = 'white-section-inner'

  aboutUsHtmlOuter.append(aboutUsHtmlInner)

  const heading = document.createElement('h1')
  heading.id = 'about-us-heading'
  heading.innerText = aboutUs.title

  const accentLine = document.createElement('hr')
  heading.insertAdjacentElement('beforeend', accentLine)
  const body = document.createElement('h3')
  body.id = 'about-us-body'
  body.innerText = aboutUs.body

  const centerDiv = document.createElement('div')
  centerDiv.id = 'about-us-div'
  centerDiv.classList = 'flex center wrap'

  const button = document.createElement('button')
  button.id = 'about-us-cta'
  button.innerText = aboutUs.buttonText

  centerDiv.append(body, button)

  aboutUsHtmlInner.append(heading, centerDiv)

  return aboutUsHtmlOuter
}
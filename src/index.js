import { NavBar } from './NavBar/index.js'
import { Hero } from './Hero/index.js'
import { Services } from './Services/index.js'
import { ChooseUs } from './ChooseUs/index.js'
import { AboutUs } from './AboutUs/index.js'

document.addEventListener('DOMContentLoaded', async () => {
  const body = document.body
  body.append(NavBar(), Hero(), Services(), ChooseUs(), AboutUs())
})
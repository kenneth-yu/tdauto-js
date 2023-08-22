export const Hero = () => {

  const heroHtml = document.createElement('div')
  heroHtml.id = 'hero'
  heroHtml.classList = 'flex'

  const bgImage = document.createElement('img')
  bgImage.id = 'hero-bg'
  bgImage.src = '../consts/assets/hero/td-hero-bg.webp'

  const logo = document.createElement('img')
  logo.id = 'hero-logo'
  logo.src = '../consts/assets/hero/hero-bg-logo.webp'

  heroHtml.append(bgImage, logo)
  
  return heroHtml
}
import logo from './branding/logos/logo.png'
import instagram from './external-logos/instagram.png'
import header from './home-screen/header.png'
import mainResources from './home-screen/main-resources.png'
import menu from './home-screen/menu-aberto.jpg'
import screen1 from './home-screen/screen-1.png'
import screen2 from './home-screen/screen-2.png'
import screen3 from './home-screen/screen-3.png'
import student from './home-screen/student.png'

const logosMap = {
  default: logo,
  instagram: instagram,
}

const menuBG = {
  default: menu,
}

const studentImage = {
  default: student,
}

const mainResourcesImage = {
  default: mainResources,
}

const screenImages = {
  image1: screen1,
  image2: screen2,
  image3: screen3,
  header,
}

export { logosMap, mainResourcesImage, menuBG, screenImages, studentImage }

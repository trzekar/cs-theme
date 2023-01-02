'use strict'

const header = document.querySelector('header')
const goButton = document.querySelector('.go')
const image = document.querySelector('.popup-image')


const closePopup = () => {
  image.style.display = 'block'
  setTimeout(()=>{
    image.style.display = 'none'
  }, 200)
  setTimeout(()=>{
    header.style.transform = 'scale(0)'
  }, 250)
  setTimeout(()=>{
    header.style.display = 'none'
  }, 600)
}



goButton.addEventListener('click', closePopup)
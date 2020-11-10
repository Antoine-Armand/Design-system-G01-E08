console.log('hello webpack');

import './assets/styles/main.css'

import image from './assets/images/image.jpg'
const $img = new Image()
$img.src = image
document.body.appendChild($img)

console.log('test');
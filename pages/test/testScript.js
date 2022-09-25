const burgerButton = document.querySelector('#burger-button')
const menuShow = document.querySelector('#burger')
const burgerContainer = document.querySelector('#burger-container')

console.log(burgerButton)
console.log(burgerButton.classList)
console.log(menuShow)

burgerButton.onclick = function () {
    burgerButton.classList.toggle("b-button-close")
    burgerButton.classList.toggle("b-button")
    menuShow.classList.toggle("nav-show")
    menuShow.classList.toggle("nav-hide")
    burgerContainer.classList.toggle("bc-open")
}
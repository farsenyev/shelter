let burgerButton,
    menuShow,
    burgerContainer,
    pageSize,
    petContainer,
    card,
    cards,
    petImg,
    petName,
    petButton,
    rightButton,
    leftButton,
    prev = [],
    current = [],
    prevAction = '',
    action,
    found,
    foundCur,
    petId

function init() {
    burgerButton = document.querySelector('#burger-button')
    menuShow = document.querySelector('#burger')
    burgerContainer = document.querySelector('#burger-container')

    petContainer = document.querySelector('#pets-slider')
    rightButton = document.querySelector('#right-button')
    leftButton = document.querySelector('#left-button')

    screenWidth()
    cardShowVer()

    burgerButton.onclick = menuShowen

    cards = document.querySelectorAll('.card')
    rightButton.addEventListener("click", moveRight)
    rightButton.addEventListener("click", sliderMain)

    leftButton.addEventListener("click", moveLeft)
    leftButton.addEventListener("click", sliderMain)
}

function menuShowen() {
    burgerButton.classList.toggle("b-button-close")
    burgerButton.classList.toggle("b-button")

    menuShow.classList.toggle("nav-show")
    menuShow.classList.toggle("nav-hide")

    burgerContainer.classList.toggle("bc-open")
}

function getRandom(value) {
    return Math.floor(Math.random() * value)
}

function screenWidth() {
    if (window.screen.width > 1280){
        pageSize = 3
    }else if (window.screen.width >= 768 && window.screen.width < 1280){
        pageSize = 2
    }else{
        pageSize = 1
    }
}

function cardFiller(i){
    petImg = document.createElement('img');
    petImg.classList.add('pet-img');
    petImg.setAttribute('src', petsJson[i].img);
    petImg.setAttribute('alt', petsJson[i].type + ' ' + petsJson[i].name);
    petName = document.createElement('h4')
    petName.classList.add('pet-name');
    petName.textContent = petsJson[i].name;
    petButton = document.createElement('button');
    petButton.classList.add('pets-learn-more');
    petButton.textContent = 'Learn more';
    card = document.createElement('section')
    card.classList.add('card')
    card.append(petImg);
    card.append(petName);
    card.append(petButton);

    return card
}

function cardShowVer() {
    while (current.length < pageSize){
        petId = getRandom(8)
        found = current.find(elem => elem === petId)
        if (found === undefined){
            current.push(petId)
        }
    }
    for (let i = 0; i < pageSize; i++){
        leftButton.before(cardFiller(current[i]))
    }
}

function moveRight() {
    action = 'right'
}
function moveLeft(){
    action = 'left'
}

function sliderMain() {
    if (prevAction !== action){
        let side = current
        current = prev
        prev = side
    }else{
        prev = current
        current = []
        while (current.length < pageSize){
            petId = getRandom(8)
            found = prev.find(elem => elem === petId)
            foundCur = current.find(elem => elem === petId)
            if (found === undefined && foundCur === undefined){
                current.push(petId)
            }
            foundCur = found = ''
        }
    }
    for (let i = 0; i < current.length; i++){
        cards.item(i).replaceWith(cardFiller(current[i]))
    }
    cards = document.querySelectorAll('.card')
    prevAction = action
}

window.onload = init
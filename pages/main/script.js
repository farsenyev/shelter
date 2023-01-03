let burgerButton,
    menuShow,
    burgerContainer,
    pageSize,
    petContainer,
    cards,
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
    burgerButton = document.getElementById('burger-button')
    menuShow = document.getElementById('burger')
    burgerContainer = document.getElementById('burger-container')

    petContainer = document.getElementById('pets-slider')
    rightButton = document.getElementById('right-button')
    leftButton = document.getElementById('left-button')

    screenWidth()
    cardShowVer()

    burgerButton.onclick = menuShowen

    cards = document.querySelectorAll('.card')

    rightButton.addEventListener("click", moveRight)

    leftButton.addEventListener("click", moveLeft)
}

function menuShowen() {
    burgerButton.classList.toggle("b-button-close")

    menuShow.classList.toggle("nav-show")

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
        if (!found){
            current.push(petId)
        }
    }
    for (let i = 0; i < pageSize; i++){
        leftButton.before(cardFiller(current[i]))
    }
}

function moveRight() {
    action = 'right'
    sliderMain()
}
function moveLeft(){
    action = 'left'
    sliderMain()
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
            if (!found && !foundCur){
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
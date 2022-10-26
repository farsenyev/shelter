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
    prevPet,
    currentPet,
    pageSizePet,
    petId



function init() {

    burgerButton = document.querySelector('#burger-button')
    menuShow = document.querySelector('#burger')
    burgerContainer = document.querySelector('#burger-container')
    petContainer = document.getElementById('card-container')
    rightButton = document.querySelector('#nav-bar-right')
    leftButton = document.querySelector('#nav-bar-left')


    screenWidth()
    cardShowVer()

    cards = document.querySelectorAll('.card')
    burgerButton.onclick = menuShowen

    rightButton.addEventListener("click", moveRight)
    rightButton.addEventListener("click", sliderMain)

    leftButton.addEventListener("click", moveLeft)
    leftButton.addEventListener("click", sliderMain)




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
        petContainer.append(cardFiller(current[i]))
    }
}

function moveRight() {
    action = 'right'
    console.log(action)
}
function moveLeft(){
    action = 'left'
    console.log(action)

}

function sliderMain() {
    console.log('work!!')
    if (prevAction !== action){
        console.log('change')
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

//
//
//     for (let i = 0; i < petsJson.length; i++) {
//         const card = document.createElement("section")
//         card.classList.add('card')
//
//         //depends on window screen width, change i
//
//         if (screenWidth >= 1280) {
//             if (i > 2) {
//                 card.classList.toggle('inactive-card')
//             }
//
//         } else if (screenWidth < 1280 && screenWidth >= 768) {
//             if (i > 1) {
//                 card.classList.toggle('inactive-card')
//             }
//
//         } else if (screenWidth < 768 && screenWidth >= 320) {
//             if (i > 0) {
//                 card.classList.toggle('inactive-card')
//             }
//
//         }
//
//         // if (i > 1) {
//         //     card.classList.add('inactive-card')
//         // }
//         const petImg = document.createElement('img')
//         petImg.classList.add('pet-img')
//         petImg.setAttribute('src', random[i].img)
//         petImg.setAttribute('alt', random[i].type + ' ' + random[i].name)
//         const petName = document.createElement('h4')
//         petName.classList.add('pet-name')
//         petName.textContent = random[i].name
//         const petButton = document.createElement('button')
//         petButton.classList.add('pets-learn-more')
//         petButton.textContent = 'Learn more'
//         card.append(petImg)
//         card.append(petName)
//         card.append(petButton)
//         petContainer.append(card)
//     }
//
//
// //-----------------slider v1.0---------------
//
//     const cards = document.getElementsByClassName('card')
//
//     const listNumber = document.querySelector('#nav-bar-number')
//
//     let pageSize = 0
//     let cardValue = 0
//
//     //depends on window screen width, change pageSize and cardValue
//
//     if (screenWidth >= 1280){
//         pageSize = 3
//         cardValue = 3
//     }else if(screenWidth < 1280 && screenWidth >= 768){
//         pageSize = 2
//         cardValue = 2
//     }else if(screenWidth < 768 && screenWidth >= 320){
//         pageSize = 1
//         cardValue = 1
//     }
//
//     // pageSize = 2
//     // cardValue = 2
//
//     listNumber.textContent = String(Math.floor(cardValue / pageSize))
//     const buttonRight = document.querySelector('#nav-bar-right')
//     const buttonLeft = document.querySelector('#nav-bar-left')
//
//     //-------for endless scroll-------
//     buttonLeft.classList.remove('nav-bar-inactive')
//     listNumber.hidden = true
//     //------------------
//
//     buttonRight.onclick = function scrollRight() {
//
//         cardValue += pageSize
//         listNumber.textContent = String(Math.floor(cardValue / pageSize))
//
//         //---------endless scroll right-------------
//         if (pageSize === 3) {
//             // pageSize = 3, cardValue = 3
//             if (cardValue === 4) {
//                 cards.item(6).classList.add('inactive-card')
//                 cards.item(7).classList.add('inactive-card')
//             }
//             if (cardValue === 5){
//                 cards.item(7).classList.add('inactive-card')
//             }
//             if (cardValue === 8){
//                 for (let i = 0; i <= pageSize; i++) {
//                     if (i < pageSize) {
//                         cards.item(cardValue - pageSize + i).classList.remove('inactive-card')
//                     }
//                     if (i > 0) {
//                         cards.item(cardValue - pageSize - i).classList.add('inactive-card')
//                     }
//
//                 }
//             }
//             if (cardValue > 10){
//                 for (let i = cardValue - pageSize; i >= 2 * pageSize ; i --){
//                     cards.item( i - 1).classList.add('inactive-card')
//                 }
//                 cardValue = pageSize
//             }
//             console.log(cardValue)
//
//
//             if (cardValue === 9 && cardValue - cards.length === 1) {
//                 for (let i = cardValue - pageSize; i < cardValue; i++) {
//                     let j = i
//                     if (i > cards.length - 1) {
//                         j = 0
//                     }
//                     cards.item(j).classList.remove('inactive-card')
//                     j++
//                 }
//                 for (let i = 0; i <= pageSize; i++) {
//                     if (i > 0) {
//                         cards.item(cardValue - pageSize - i).classList.add('inactive-card')
//                     }
//                 }
//                 cardValue = cardValue - cards.length
//             }
//
//             if (cardValue === 10 && cardValue - cards.length === 2) {
//                 for (let i = cardValue - pageSize; i < cardValue; i ++){
//                     let j = i
//                     if (i >= cards.length){
//                         j = Math.abs(i - cards.length)
//                     }
//                     cards.item(j).classList.remove('inactive-card')
//                     j ++
//                 }
//                 for (let i = 0; i <= pageSize; i++) {
//                     if (i > 0) {
//                         cards.item(cardValue - pageSize - i).classList.add('inactive-card')
//                     }
//                 }
//                 cardValue = cardValue - cards.length
//             }
//         } else if (cardValue === 2) {
//             //pageSize = 2, cardValue = 2
//             if (cardValue > cards.length) {
//                 cardValue = pageSize
//                 cards.item(0).classList.remove('inactive-card')
//                 cards.item(1).classList.remove('inactive-card')
//                 cards.item(cards.length - pageSize).classList.add('inactive-card')
//                 cards.item(cards.length - pageSize + 1).classList.add('inactive-card')
//             }
//             // }else if(screenWidth < 768 && screenWidth >= 320){
//             //     // pageSize = 1, cardValue = 1
//             // }
//
//             //------------------------------------------
//
//             // if (cardValue >= cards.length){
//             //     buttonRight.classList.add('nav-bar-inactive')
//             //     buttonRight.disabled = true
//             // }
//             // if( cardValue < cards.length && cardValue > 0) {
//             //     buttonRight.classList.remove('nav-bar-inactive')
//             //     buttonRight.disabled = false
//             //     buttonLeft.classList.remove('nav-bar-inactive')
//             //     buttonLeft.disabled = false
//             // }
//
//
//         }
//         if (cardValue >= pageSize && cardValue < cards.length) {
//             for (let i = 0; i <= pageSize; i++) {
//                 if (i < pageSize) {
//                     cards.item(cardValue - pageSize + i).classList.remove('inactive-card')
//                 }
//                 if (i > 0) {
//                     cards.item(cardValue - pageSize - i).classList.add('inactive-card')
//                 }
//
//             }
//         }
//     }
//
//         buttonLeft.onclick = function scrollLeft() {
//             cardValue -= pageSize
//
//             listNumber.textContent = String(Math.floor(cardValue / pageSize))
//             if (cardValue >= pageSize) {
//                 cards.item(cardValue).classList.add('inactive-card')
//                 cards.item(cardValue + 1).classList.add('inactive-card')
//                 cards.item(cardValue - 1).classList.remove('inactive-card')
//                 cards.item(cardValue - 2).classList.remove('inactive-card')
//
//             }
//
//             //--------endless scroll left--------
//             if (cardValue < pageSize) {
//                 cardValue = cards.length
//                 cards.item(0).classList.add('inactive-card')
//                 cards.item(1).classList.add('inactive-card')
//                 cards.item(cards.length - pageSize).classList.remove('inactive-card')
//                 cards.item(cards.length - pageSize + 1).classList.remove('inactive-card')
//             }
//             //------------------------------------
//
//             // if (cardValue <= pageSize) {
//             //     buttonLeft.classList.add('nav-bar-inactive')
//             //     buttonLeft.disabled = true
//             // }
//             // if (cardValue > pageSize && cardValue <= cards.length) {
//             //     buttonRight.classList.remove('nav-bar-inactive')
//             //     buttonRight.disabled = false
//             //     buttonLeft.classList.remove('nav-bar-inactive')
//             //     buttonLeft.disabled = false
//             // }
//             }
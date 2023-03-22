let burgerButton,
    menuShow,
    burgerContainer,
    pageSize,
    petContainer,
    pageIndex,
    pageNumber,
    card,
    cards,
    modalWindow,
    modals = [],
    modalCloseButton = [],
    modalContainer,
    modalOverlay,
    rightButton,
    leftButton,
    startButton,
    endButton,
    pets = [],
    current = [],
    foundCur,
    petId,
    burgerA,
    burgerOverlay

function init() {
    burgerButton = document.getElementById('burger-button')
    menuShow = document.getElementById('burger')
    burgerContainer = document.getElementById('burger-container')
    burgerA = document.getElementsByClassName('burger-a')
    burgerOverlay = document.createElement('section')
    document.body.append(burgerOverlay)

    petContainer = document.getElementById('card-container')
    rightButton = document.querySelector('#nav-bar-right')
    leftButton = document.querySelector('#nav-bar-left')
    startButton = document.querySelector('#start-button')
    endButton = document.querySelector('#end-button')
    pageIndex = document.querySelector('#nav-bar-number')
    pageNumber = 1

    modalContainer = document.createElement('section')
    modalContainer.classList.add('modal-container')
    petContainer.after(modalContainer)

    screenWidth()
    fillMassive()
    createModalWindows()
    menuAInit()
    cardShowPets()

    burgerButton.onclick = menuShowen
    burgerOverlay.onclick = menuHide

    cards = document.getElementsByClassName('card')
    rightButton.addEventListener("click", slideRight)

    rightButton.addEventListener("click", sliderPets)
    leftButton.addEventListener("click", slideLeft)

    leftButton.addEventListener("click", sliderPets)
    startButton.addEventListener("click", slideStart)

    startButton.addEventListener("click", sliderPets)
    endButton.addEventListener("click", slideEnd)

    endButton.addEventListener("click", sliderPets)

    modalCloseButton = document.getElementsByClassName('modal-close')

    initButtonLM()
    initCloseButton()
    modalOverlay.addEventListener("click", hideModalOverlay)
    modalOverlay.addEventListener("click", menuHide)

}

function menuShowen() {
    burgerButton.classList.toggle("b-button-close")

    menuShow.classList.toggle("nav-show")

    burgerContainer.classList.toggle("bc-open")

    burgerOverlay.classList.toggle('burger-overlay')
}

function menuAInit(){
    for (let i = 0; i < burgerA.length; i++){
        burgerA[i].addEventListener("click", menuShowen)
    }
}

function menuHide() {
    burgerButton.classList.remove("b-button-close")

    menuShow.classList.remove("nav-show")

    burgerContainer.classList.remove("bc-open")

    burgerOverlay.classList.remove('burger-overlay')
}

function screenWidth() {
    if (window.screen.width > 1280){
        pageSize = 8
    }else if (window.screen.width >= 768 && window.screen.width < 1280){
        pageSize = 6
    }else{
        pageSize = 3
    }
}

function getRandom(value) {
    return Math.floor(Math.random() * value)
}

function cardFiller(i){
    let petImg = document.createElement('img');
    petImg.classList.add('pet-img');
    petImg.setAttribute('src', petsJson[i].img);
    petImg.setAttribute('alt', petsJson[i].type + ' ' + petsJson[i].name);
    let petName = document.createElement('h4')
    petName.classList.add('pet-name');
    petName.textContent = petsJson[i].name;
    let petButton = document.createElement('button');
    petButton.classList.add('pets-learn-more');
    petButton.textContent = 'Learn more';
    card = document.createElement('section');
    card.classList.add('card');
    card.append(petImg);
    card.append(petName);
    card.append(petButton);

    return card
}

function createModalWindows(){
    for (let i = 0; i < petsJson.length; i++){
        let petImg = document.createElement('img');
        petImg.classList.add('modal-pet-img');
        petImg.setAttribute('src', petsJson[i].img);
        petImg.setAttribute('alt', petsJson[i].type + ' ' + petsJson[i].name);

        let petName = document.createElement('h3')
        petName.classList.add('pet-modal-name');
        petName.textContent = petsJson[i].name;

        let petType = document.createElement('h4')
        petType.classList.add('pet-type');
        petType.textContent = petsJson[i].type + ' - ' + petsJson[i].breed;

        let petDesc = document.createElement('h5')
        petDesc.classList.add('pet-descr');
        petDesc.textContent = petsJson[i].description;

        let petAge = document.createElement('h5')
        petAge.classList.add('pet-age');
        let age = 'Age: '
        petAge.innerHTML = age.bold() + petsJson[i].age;

        let petInoc = document.createElement('h5')
        petInoc.classList.add('pet-inoculation');
        let inn = 'Inoculation: '
        petInoc.innerHTML = inn.bold() + petsJson[i].inoculations;

        let petDeseas = document.createElement('h5')
        petDeseas.classList.add('pet-diseases');
        let dis = 'Diseases: '
        petDeseas.innerHTML = dis.bold() + petsJson[i].diseases;

        let petParasites = document.createElement('h5')
        petParasites.classList.add('pet-parasites');
        let par = 'Parsites: '
        petParasites.innerHTML = par.bold() + petsJson[i].parasites;

        let content = document.createElement('section')
        content.classList.add('pet-modal-content')

        content.append(petName)
        content.append(petType)
        content.append(petDesc)
        content.append(petAge)
        content.append(petInoc)
        content.append(petDeseas)
        content.append(petParasites)

        let modal = document.createElement('section')
        modal.classList.add('pet-modal')

        modal.append(petImg)
        modal.append(content)

        let closeButton = document.createElement('button')
        closeButton.classList.add('modal-close')
        closeButton.textContent = 'X'

        modalWindow = document.createElement('section')
        modalWindow.classList.add('pet-window')
        modalWindow.append(closeButton)
        modalWindow.append(modal)

        modalContainer.append(modalWindow)

        modals.push(modalWindow)
    }
    modalOverlay = document.createElement('section')
    modalOverlay.classList.add('modal-overlay-hide')

    modalContainer.append(modalOverlay)
}

function showModal(i) {
    return function () {
        modals[i].classList.add('modal-show')
        modalOverlay.classList.add('modal-overlay')
        document.body.classList.add('stop-scrolling')

        return modals[i]
    }
}

function hideModalOverlay() {
    for (let i = 0; i < cards.length; i++){
        if (modals[i].classList[1] === 'modal-show'){
            console.log('work')
            modals[i].classList.remove('modal-show')
            modalOverlay.classList.remove('modal-overlay')
            document.body.classList.remove('stop-scrolling')

        }
    }
}

function hideModal(i){

    return function () {
        modals[i].classList.remove('modal-show')
        modalOverlay.classList.remove('modal-overlay')
        document.body.classList.remove('stop-scrolling')

        return modals[i]
    }
}

function initButtonLM(){
    let petIndex
    for (let i = 0; i < cards.length; i++){
        petIndex = pets[i + pageSize * (pageNumber - 1)]
        cards[i].addEventListener("click", showModal(petIndex))
    }
}

function initCloseButton(){
    for (let i = 0; i < cards.length; i++){
        modalCloseButton[i].addEventListener("click", hideModal(i))
    }
}

function cardShowPets() {
    for (let i = 0; i < pageSize; i ++){
        petContainer.append(cardFiller(pets[i]))
    }
    pageIndex.textContent = String(pageNumber)
    leftButton.disabled = pageNumber <= 1
    startButton.disabled = pageNumber <= 1

}

function fillMassive(){
    while (pets.length < 48){
        while (current.length < pageSize){
            petId = getRandom(8)
            foundCur = current.find(elem => elem === petId)
            if (foundCur === undefined){
                current.push(petId)
            }
        }
        pets = pets.concat(current)
        current = []
    }
}

function sliderPets() {
    let petIndex = 0
    let start = pageSize * (pageNumber - 1)
    let end = pageSize * pageNumber
    for (let i = start; i < end; i++){
        cards.item(petIndex).replaceWith(cardFiller(pets[i]))
        petIndex ++
    }
    cards = document.querySelectorAll('.card')
    pageIndex.textContent = String(pageNumber)
    rightButton.disabled = pageNumber >= 48 / pageSize
    endButton.disabled = pageNumber >= 48 / pageSize
    leftButton.disabled = pageNumber <= 1
    startButton.disabled = pageNumber <= 1

    initButtonLM()
}

function slideRight() {
    pageNumber ++
}

function slideLeft(){
    pageNumber --
}

function slideEnd(){
    pageNumber = 48 / pageSize
}

function slideStart(){
    pageNumber = 1
}

window.onload = init
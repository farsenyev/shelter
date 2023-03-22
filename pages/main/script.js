let burgerButton,
    menuShow,
    burgerContainer,
    pageSize,
    petContainer,
    cards,
    modalWindow,
    modals = [],
    modalCloseButton = [],
    modalContainer,
    modalOverlay,
    rightButton,
    leftButton,
    prev = [],
    current = [],
    prevAction = '',
    action,
    found,
    foundCur,
    petId,
    burgerA,
    burgerOverlay

function init() {
    burgerButton = document.getElementById('burger-button')
    menuShow = document.getElementById('burger')
    burgerContainer = document.getElementById('burger-container')
    burgerA = document.getElementsByClassName("burger-a")
    burgerOverlay = document.createElement('section')
    document.body.prepend(burgerOverlay)

    petContainer = document.getElementById('pets-slider')
    rightButton = document.getElementById('right-button')
    leftButton = document.getElementById('left-button')

    modalContainer = document.createElement('section')
    modalContainer.classList.add('modal-container')
    petContainer.after(modalContainer)

    screenWidth()
    cardShowVer()
    createModalWindows()
    menuAInit()

    burgerButton.onclick = menuShowen
    burgerOverlay.onclick = menuHide

    cards = document.getElementsByClassName('card')

    rightButton.addEventListener("click", moveRight)

    leftButton.addEventListener("click", moveLeft)


    modalCloseButton = document.getElementsByClassName('modal-close')

    initButtonLM()
    initCloseButton()
    modalOverlay.addEventListener("click", hideModalOverlay)
    modalOverlay.addEventListener("click", hideModal)
}

function menuAInit(){
    for (let i = 0; i < burgerA.length; i++){
        burgerA[i].addEventListener("click", menuShowen)
    }
}

function menuShowen() {
    burgerButton.classList.toggle("b-button-close")

    menuShow.classList.toggle("nav-show")

    burgerContainer.classList.toggle("bc-open")

    burgerOverlay.classList.toggle('burger-overlay')
}

function menuHide() {
    burgerButton.classList.remove("b-button-close")

    menuShow.classList.remove("nav-show")
    burgerOverlay.classList.remove('burger-overlay')

    burgerContainer.classList.remove("bc-open")
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
        initCloseButton()

        return modals[i]
    }
}

function hideModalOverlay() {
    for (let i = 0; i < current.length; i++){
        if (modals[current[i]].classList[1] === 'modal-show'){
            console.log('work')
            modals[current[i]].classList.remove('modal-show')
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
    for (let i = 0; i < current.length; i++){
        petIndex = current[i]
        cards[i].addEventListener("click", showModal(petIndex))
    }
}

function initCloseButton(){
    for (let i = 0; i < current.length; i++){
        modalCloseButton[current[i]].addEventListener("click", hideModal(current[i]))
    }
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
    initButtonLM()
    initCloseButton()
}

window.onload = init
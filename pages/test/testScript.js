window.onload = function () {

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



//-------------json connect-------------

    let petsJson = [
        {
            "name": "Jennifer",
            "img": "../../assets/images/pets-jennifer.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Sophia",
            "img": "../../assets/images/pets-sophia.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Woody",
            "img": "../../assets/images/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "name": "Scarlett",
            "img": "../../assets/images/pets-scarlet.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Katrine",
            "img": "../../assets/images/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Timmy",
            "img": "../../assets/images/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "name": "Freddie",
            "img": "../../assets/images/pets-freddie.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Charly",
            "img": "../../assets/images/pets-charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        }
    ];
//---------------card filler 2.0----------------

    let petContainer = document.getElementById('card-container')

    for (let i = 0; i < petsJson.length; i++){
        let card = document.createElement("section")
        card.classList.add('card')
        if (i > 1){
            card.classList.toggle('inactive-card')
        }
        let petImg = document.createElement('img')
        petImg.classList.add('pet-img')
        petImg.setAttribute('src', petsJson[i].img)
        petImg.setAttribute('alt', petsJson[i].type + ' ' +  petsJson[i].name)
        let petName = document.createElement('h4')
        petName.classList.add('pet-name')
        petName.textContent = petsJson[i].name
        let petButton = document.createElement('button')
        petButton.classList.add('pets-learn-more')
        petButton.textContent = 'Learn more'
        card.append(petImg)
        card.append(petName)
        card.append(petButton)
        petContainer.append(card)
    }


//-----------------slider v1.0----------

    let cards = document.getElementsByClassName('card')

    let listNumber = document.querySelector('#nav-bar-number')

    let j = 2
    listNumber.textContent = String(j / 2)
    let buttonRight = document.querySelector('#nav-bar-right')
    let buttonLeft = document.querySelector('#nav-bar-left')

    //for endless scroll
    buttonLeft.classList.remove('nav-bar-inactive')
    listNumber.hidden = true
    //------------------

    buttonRight.onclick = function scrollRight () {


        if (j >= 2 && j < 8){
            cards.item(j).classList.remove('inactive-card')
            cards.item(j+1).classList.remove('inactive-card')
            cards.item(j-1).classList.add('inactive-card')
            cards.item(j-2).classList.add('inactive-card')
        }

        j += 2
        listNumber.textContent = String(j / 2)

        //---------endless scroll right-------------
        if (j > 8){
            j = 2
            cards.item(0).classList.remove('inactive-card')
            cards.item(1).classList.remove('inactive-card')
            cards.item(6).classList.add('inactive-card')
            cards.item(7).classList.add('inactive-card')
        }
        //------------------------------------------

        // if (j >= 8){
        //     buttonRight.classList.add('nav-bar-inactive')
        //     buttonRight.disabled = true
        // }
        // if( j < 8 && j > 0) {
        //     buttonRight.classList.remove('nav-bar-inactive')
        //     buttonRight.disabled = false
        //     buttonLeft.classList.remove('nav-bar-inactive')
        //     buttonLeft.disabled = false
        // }
    }



    buttonLeft.onclick = function scrollLeft () {
        j -= 2

        listNumber.textContent = String(j / 2)
        if (j >= 2) {
            cards.item(j).classList.add('inactive-card')
            cards.item(j + 1).classList.add('inactive-card')
            cards.item(j - 1).classList.remove('inactive-card')
            cards.item(j - 2).classList.remove('inactive-card')

        }

        //--------endless scroll left--------
        if (j < 2){
            j = 8
            cards.item(0).classList.add('inactive-card')
            cards.item(1).classList.add('inactive-card')
            cards.item(6).classList.remove('inactive-card')
            cards.item(7).classList.remove('inactive-card')
        }
        //------------------------------------

        // if (j <= 2) {
        //     buttonLeft.classList.add('nav-bar-inactive')
        //     buttonLeft.disabled = true
        // }
        // if (j > 2 && j <= 8) {
        //     buttonRight.classList.remove('nav-bar-inactive')
        //     buttonRight.disabled = false
        //     buttonLeft.classList.remove('nav-bar-inactive')
        //     buttonLeft.disabled = false
        // }

    }


}

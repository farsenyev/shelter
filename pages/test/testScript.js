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

    const petsJson = [
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

//--------------randomizer--------------

    function getRandom(list, items = 8) {
        return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, items)
    }

//---------------card filler 2.0----------------

    const petContainer = document.getElementById('card-container')
    const random = getRandom(petsJson)
    const screenWidth = window.screen.width


    for (let i = 0; i < petsJson.length; i++) {
        const card = document.createElement("section")
        card.classList.add('card')

        //depends on window screen width, change i

        if (screenWidth >= 1280) {
            if (i > 2) {
                card.classList.toggle('inactive-card')
            }

        } else if (screenWidth < 1280 && screenWidth >= 768) {
            if (i > 1) {
                card.classList.toggle('inactive-card')
            }

        } else if (screenWidth < 768 && screenWidth >= 320) {
            if (i > 0) {
                card.classList.toggle('inactive-card')
            }

        }

        // if (i > 1) {
        //     card.classList.add('inactive-card')
        // }
        const petImg = document.createElement('img')
        petImg.classList.add('pet-img')
        petImg.setAttribute('src', random[i].img)
        petImg.setAttribute('alt', random[i].type + ' ' + random[i].name)
        const petName = document.createElement('h4')
        petName.classList.add('pet-name')
        petName.textContent = random[i].name
        const petButton = document.createElement('button')
        petButton.classList.add('pets-learn-more')
        petButton.textContent = 'Learn more'
        card.append(petImg)
        card.append(petName)
        card.append(petButton)
        petContainer.append(card)
    }


//-----------------slider v1.0---------------

    const cards = document.getElementsByClassName('card')

    const listNumber = document.querySelector('#nav-bar-number')

    let pageSize = 0
    let cardValue = 0

    //depends on window screen width, change pageSize and cardValue

    if (screenWidth >= 1280){
        pageSize = 3
        cardValue = 3
    }else if(screenWidth < 1280 && screenWidth >= 768){
        pageSize = 2
        cardValue = 2
    }else if(screenWidth < 768 && screenWidth >= 320){
        pageSize = 1
        cardValue = 1
    }

    // pageSize = 2
    // cardValue = 2

    listNumber.textContent = String(Math.floor(cardValue / pageSize))
    const buttonRight = document.querySelector('#nav-bar-right')
    const buttonLeft = document.querySelector('#nav-bar-left')

    //-------for endless scroll-------
    buttonLeft.classList.remove('nav-bar-inactive')
    listNumber.hidden = true
    //------------------

    buttonRight.onclick = function scrollRight() {

        cardValue += pageSize
        listNumber.textContent = String(Math.floor(cardValue / pageSize))

        //---------endless scroll right-------------
        if (pageSize === 3) {
            // pageSize = 3, cardValue = 3
            if (cardValue === 4) {
                cards.item(6).classList.add('inactive-card')
                cards.item(7).classList.add('inactive-card')
            }
            if (cardValue === 5){
                cards.item(7).classList.add('inactive-card')
            }
            if (cardValue === 8){
                for (let i = 0; i <= pageSize; i++) {
                    if (i < pageSize) {
                        cards.item(cardValue - pageSize + i).classList.remove('inactive-card')
                    }
                    if (i > 0) {
                        cards.item(cardValue - pageSize - i).classList.add('inactive-card')
                    }

                }
            }
            if (cardValue > 10){
                for (let i = cardValue - pageSize; i >= 2 * pageSize ; i --){
                    cards.item( i - 1).classList.add('inactive-card')
                }
                cardValue = pageSize
            }
            console.log(cardValue)


            if (cardValue === 9 && cardValue - cards.length === 1) {
                for (let i = cardValue - pageSize; i < cardValue; i++) {
                    let j = i
                    if (i > cards.length - 1) {
                        j = 0
                    }
                    cards.item(j).classList.remove('inactive-card')
                    j++
                }
                for (let i = 0; i <= pageSize; i++) {
                    if (i > 0) {
                        cards.item(cardValue - pageSize - i).classList.add('inactive-card')
                    }
                }
                cardValue = cardValue - cards.length
            }

            if (cardValue === 10 && cardValue - cards.length === 2) {
                for (let i = cardValue - pageSize; i < cardValue; i ++){
                    let j = i
                    if (i >= cards.length){
                        j = Math.abs(i - cards.length)
                    }
                    cards.item(j).classList.remove('inactive-card')
                    j ++
                }
                for (let i = 0; i <= pageSize; i++) {
                    if (i > 0) {
                        cards.item(cardValue - pageSize - i).classList.add('inactive-card')
                    }
                }
                cardValue = cardValue - cards.length
            }
        } else if (cardValue === 2) {
            //pageSize = 2, cardValue = 2
            if (cardValue > cards.length) {
                cardValue = pageSize
                cards.item(0).classList.remove('inactive-card')
                cards.item(1).classList.remove('inactive-card')
                cards.item(cards.length - pageSize).classList.add('inactive-card')
                cards.item(cards.length - pageSize + 1).classList.add('inactive-card')
            }
            // }else if(screenWidth < 768 && screenWidth >= 320){
            //     // pageSize = 1, cardValue = 1
            // }

            //------------------------------------------

            // if (cardValue >= cards.length){
            //     buttonRight.classList.add('nav-bar-inactive')
            //     buttonRight.disabled = true
            // }
            // if( cardValue < cards.length && cardValue > 0) {
            //     buttonRight.classList.remove('nav-bar-inactive')
            //     buttonRight.disabled = false
            //     buttonLeft.classList.remove('nav-bar-inactive')
            //     buttonLeft.disabled = false
            // }


        }
        if (cardValue >= pageSize && cardValue < cards.length) {
            for (let i = 0; i <= pageSize; i++) {
                if (i < pageSize) {
                    cards.item(cardValue - pageSize + i).classList.remove('inactive-card')
                }
                if (i > 0) {
                    cards.item(cardValue - pageSize - i).classList.add('inactive-card')
                }

            }
        }
    }

        buttonLeft.onclick = function scrollLeft() {
            cardValue -= pageSize

            listNumber.textContent = String(Math.floor(cardValue / pageSize))
            if (cardValue >= pageSize) {
                cards.item(cardValue).classList.add('inactive-card')
                cards.item(cardValue + 1).classList.add('inactive-card')
                cards.item(cardValue - 1).classList.remove('inactive-card')
                cards.item(cardValue - 2).classList.remove('inactive-card')

            }

            //--------endless scroll left--------
            if (cardValue < pageSize) {
                cardValue = cards.length
                cards.item(0).classList.add('inactive-card')
                cards.item(1).classList.add('inactive-card')
                cards.item(cards.length - pageSize).classList.remove('inactive-card')
                cards.item(cards.length - pageSize + 1).classList.remove('inactive-card')
            }
            //------------------------------------

            // if (cardValue <= pageSize) {
            //     buttonLeft.classList.add('nav-bar-inactive')
            //     buttonLeft.disabled = true
            // }
            // if (cardValue > pageSize && cardValue <= cards.length) {
            //     buttonRight.classList.remove('nav-bar-inactive')
            //     buttonRight.disabled = false
            //     buttonLeft.classList.remove('nav-bar-inactive')
            //     buttonLeft.disabled = false
            // }

    }
 }

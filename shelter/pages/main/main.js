let pets = [
    {
      name: "Jennifer",
      img: "../../assets/images/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Sophia",
      img: "../../assets/images/pets-sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
    },    {
      name: "Woody",
      img: "../../assets/images/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },    {
      name: "Scarlett",
      img: "../../assets/images/pets-scarlet.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
    },    {
      name: "Katrine",
      img: "../../assets/images/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    },    {
      name: "Timmy",
      img: "../../assets/images/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },    {
      name: "Freddie",
      img: "../../assets/images/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },    {
      name: "Charly",
      img: "../../assets/images/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"]
    }
  ];



let petsCard = document.querySelectorAll('.pets-card');
let petsCardsWrapper = document.querySelectorAll('.pets-cards-wrapper');

let currentItem = 0;
let currentPetsItem = 0;
let isEnabledBtn = true;

//----------Popup----------------
let fillPopup = (petName) => {
    let indexPet;
    for(let i = 0; i < pets.length; i++){
        if(pets[i].name === petName){
            indexPet = i;
            break;
        }
    }
    document.querySelector('.popup').innerHTML = `
    <div class="popup__image"><img src="${pets[indexPet].img}" alt=""></div>
            <div class="popup__content">
              <h3 class="popup__name">${pets[indexPet].name}</h3>
              <h4 class="popup__type">${pets[indexPet].type} - ${pets[indexPet].breed}</h4>
              <h5 class="popup__description">${pets[indexPet].description}</h5>
              <ul class="popup-details">
                <li class="popup-details__item">Age: <span class="popup-details__item_normal">${pets[indexPet].age}</span></li>
                <li class="popup-details__item">Inoculations: <span class="popup-details__item_normal">${pets[indexPet].inoculations}</span></li>
                <li class="popup-details__item">Diseases: <span class="popup-details__item_normal">${pets[indexPet].diseases}</span></li>
                <li class="popup-details__item">Parasites: <span class="popup-details__item_normal">${pets[indexPet].parasites}</span></li>
              </ul>
          </div>
    `;
}
let popupListener = () => {
    let popup = document.querySelector('.popup-wrapper');
    document.querySelectorAll('.pets-card').forEach(e => {
    e.addEventListener('click', () => {
        fillPopup(e.querySelector('.pets-card__title').innerHTML);
        popup.classList.add('active');
        overlayBg.classList.add('active');
        overlayBg.addEventListener('click', () => {
            overlayBg.classList.remove('active');
            popup.classList.remove('active');
        });
        document.querySelector('.btn-close').addEventListener('click', () => {
            overlayBg.classList.remove('active');
            popup.classList.remove('active');
        });
    });
});
}
//--------End Popup--------------

function changeCurrentItem(n){
    currentItem = (n + petsCardsWrapper.length) % petsCardsWrapper.length;
}
function changePetsItem(n){
    currentPetsItem =  (n + pets.length) % pets.length;
}

const createCard = (amount, reverse = false) => {
    reverse ? changePetsItem(currentPetsItem - amount*2) : void(0);
    let items = [];
    let item;
    for(let i = 0; i < amount; i++){
        item = `<div class="pets-card">
                    <img src=${pets[currentPetsItem].img} alt="${pets[currentPetsItem].name}" class="pets-card__image"/>  
                    <div class="pets-card__content">
                    <h4 class="pets-card__title">${pets[currentPetsItem].name}</h4> 
                    <button class="pets-card__button">Learn more</button>
                    </div></div>`;
        items.push(item);
        changePetsItem(currentPetsItem + 1);
        }
    return items.join('');
}
const createCardsNext = (reverse = false) => {
    let items;
    if(document.documentElement.clientWidth >= 1280){
        items = reverse ? createCard(3, true) : createCard(3);
    }else if(document.documentElement.clientWidth > 767){
        items = reverse ? createCard(2, true) : createCard(2);
    }else {
        items = reverse ? createCard(1, true) : createCard(1);
    }
    
     petsCardsWrapper[currentItem].innerHTML = items;
     popupListener();

     
}
function hideItem(direction){
    isEnabledBtn = false;
    petsCardsWrapper[currentItem].classList.add(direction);
    petsCardsWrapper[currentItem].addEventListener('animationend', function() {
        this.classList.remove(direction);
        this.classList.add('disabled');
    });
}
function showItem(direction){
    petsCardsWrapper[currentItem].classList.add(direction);
    petsCardsWrapper[currentItem].addEventListener('animationend', function() {
        this.classList.remove('disabled', direction);
        isEnabledBtn = true;
    });
}
function nextItem(n){
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
function previousItem(n){
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

createCardsNext();

window.addEventListener('resize', event => {
    createCardsNext();
});
document.querySelectorAll('.slider-button').forEach(el => {
    el.addEventListener('click', () => {
        if(isEnabledBtn){ 
            previousItem(currentItem);
            createCardsNext(true);
        }
});
});
document.querySelectorAll('.slider-button_reverted').forEach(el => {
    el.addEventListener('click', () => {
        if(isEnabledBtn){  
            nextItem(currentItem);
            createCardsNext();
        }
});
});
// Burger and mobile menu
let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');
let overlayBg = document.querySelector('.overlay');
let headLogo = document.querySelector('#header-logo');
const mobileMenuOpen = () => {
    if(!burger.classList.contains('burger-active')){
        burger.classList.add('anim-burger');
        mobileMenu.classList.add('show-menu');
        headLogo.style.opacity = "0";
        burger.addEventListener('animationend', () => {
            burger.classList.remove('anim-burger');
            burger.classList.add('burger-active');
            
        });
        mobileMenu.addEventListener('animationend', () => {
            mobileMenu.classList.remove('show-menu');
            mobileMenu.classList.add('menu-active');
            overlayBg.classList.add('active');
        });
    }else{
        mobileMenuClose();
    }
}
const mobileMenuClose = () => {
    burger.classList.add('anim-burger-reverse');
        mobileMenu.classList.add('hide-menu');
        headLogo.style.opacity = "1";
        burger.addEventListener('animationend', () => {
            burger.classList.remove('anim-burger-reverse');
            burger.classList.remove('burger-active');
        });
        mobileMenu.addEventListener('animationend', () => {
            mobileMenu.classList.remove('hide-menu');
            mobileMenu.classList.remove('menu-active');
            overlayBg.classList.remove('active');
        });
}
burger.addEventListener('click', mobileMenuOpen);
overlayBg.addEventListener('click', mobileMenuClose);
document.querySelectorAll('.menu-list__link_active').forEach(e => {
    e.addEventListener('click', () => {
        window.scrollBy(0,0);
        mobileMenuClose();
    });
});

//-----------Buttons------------
document.querySelector('.header-logo').addEventListener('click', () => {
    void(0);
});
document.querySelector('#btn-make-friend').addEventListener('click', () => {
    document.location.href = '../pets/pets.html';
});
document.querySelector('#btn-get-know-rest').addEventListener('click', () => {
    document.location.href = '../pets/pets.html';
});
//----------End buttons----------


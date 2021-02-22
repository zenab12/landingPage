/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let section = document.querySelectorAll('section');
let navMenu = document.querySelector('.navbar__menu');
let navList = document.querySelector('#navbar__list');
let documentFragment = document.createDocumentFragment();

let verticalList = document.getElementById('vertical-list');
let icon = document.querySelector('.icon');
let linkDropMenu = document.querySelector('.verticalList li a.menu__link');
let main = document.querySelector('main');
let i = document.querySelector(`.icon i`);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let sec of section){

    let li = document.createElement('li');
    let anchor = document.createElement('a');
    let anchorText = document.createTextNode(sec.id);
    anchor.href = "#"+sec.id;
    let secId = sec.id;
    anchor.dataset.scroll = secId;
    anchor.classList.add('menu__link');
    anchor.appendChild(anchorText);
    li.appendChild(anchor);
    documentFragment.appendChild(li);   

}

/*
let lastLi = document.createElement('li');
let lastLink = document.createElement('a');
let toggleIcon = document.createElement('i');

toggleIcon.classList.add('fa fa-bars');
lastLink.appendChild(toggleIcon);
lastLi.appendChild(lastLink);
documentFragment.appendChild(lastLi);
*/

navList.appendChild(documentFragment);

let navItem = document.getElementsByTagName('li');
let links = document.querySelectorAll('li a');
//console.log(link);



// Add class 'active' to section when near top of viewport

for (let link of links){
    navList.firstElementChild.firstElementChild.classList.add('active')
 
}


function toggleActiveState(){

    const options = {
        threshold:.4
    };

    const addActiveClass = function(entries,observer){
          for (let entry of entries) {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                  //console.log(entry.target)

                  //syncronizr Active link with section 
                  let currentActiveLink  = document.querySelector('li a.active');
                  if (currentActiveLink){
                      currentActiveLink.classList.remove('active');
                  } 
                  let newActiveLink = document.querySelector(`li a[href="#${entry.target.id}"]`);
                  newActiveLink.classList.add('active');

                  // Set sections as active

                  let currentActiveSection  = document.querySelector('section.your-active-class');
                  if (currentActiveSection){
                      currentActiveSection.classList.remove('your-active-class');
                  } 
                  let newActiveSection = document.querySelector(`#${entry.target.id}`);
                  newActiveSection.classList.add('your-active-class');
            }
          }
    }

    const observer = new IntersectionObserver(addActiveClass,options);
    for(var sec of section){
        observer.observe(sec);
    }


    }



window.addEventListener('scroll',toggleActiveState);




/**
 * End Main Functions
 * Begin Events
 * 
*/



let scrollIntoView = function(){};

function scrollToSection(event){
  event.preventDefault();
 
  let  selectedSection = document.querySelector(`#${event.target.innerHTML}`);
  console.log( selectedSection);
  selectedSection.scrollIntoView({behavior: 'smooth', block: 'center'});

}


// Scroll to section on link click

for (let link of links){
link.addEventListener('click', scrollToSection); 
}



// Build menu 

function menuToggle() {

    verticalList.classList.toggle('hidden');
    icon.classList.toggle('margin-top');
    main.classList.toggle('margin')
    i.classList.toggle('fa-bars');
   
  }



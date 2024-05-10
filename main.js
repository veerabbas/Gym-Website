/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
 const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
 })
 sr.reveal('.home__data, .footer__container, .footer__group')
 sr.reveal('.home__img',{delay: 700, origin:'bottom'})
 sr.reveal('.logos__img , .program__card, .pricing__card',{interval: 100})
 sr.reveal('.choose__img , .calculate__content',{origin: 'left'})
 sr.reveal('.choose__content , .calculate__img',{origin: 'right'})

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

      const calculateBmi = (e) => {
        e.preventDefault()

        if (calculateCm.value === '' || calculateKg.value === ''){
            calculateMessage.classList.remove('color-green')
            calculateMessage.classList.add('color-red')
          
            calculateMessage.textContent = 'Fill in the Height and Weight'

            setTimeout(() =>{
                calculateMessage.textContent = ''
            }, 3000)
        } else{
            const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

            if (bmi < 18.5){
                calculateMessage.classList.add('color-green');
                calculateMessage.textContent = `Your BMI is ${bmi} and You are Skinny`;
            } else if (bmi < 25){
                calculateMessage.classList.add('color-green');
                calculateMessage.textContent = `Your BMI is ${bmi} and You are Healthy`;
            } else{
                calculateMessage.classList.add('color-green');
                calculateMessage.textContent = `Your BMI is ${bmi} and You are OverWeight`;
            }
            calculateCm.value = ''
            calculateKg.value = ''

            setTimeout(() =>{
                calculateMessage.textContent = ''
            }, 4000)

        }
      }
      calculateForm.addEventListener('submit', calculateBmi)



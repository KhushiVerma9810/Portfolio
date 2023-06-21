const navMenu = document.getElementById('menu'),
navToggle = document.getElementById('navtoggle'),
navClose = document.getElementById('navclose')

// MENU SHOW
// VALIDATE IF CONSTANT EXIST
if(navToggle){
    navToggle.addEventListener('click' , ()=>{
        navMenu.classList.add('show-menu')
    })
}
// MENU HIDDEN
if(navClose){
	navClose.addEventListener('click' , ()=>{
		navMenu.classList.remove('show-menu')
	})
}

// SKILLS 
const skillscontent = document.getElementsByClassName('skills_content') , 
skillsheader = document.querySelectorAll('.skills_header')

function toggleskills(){
    let itemclass = this.parentNode.className

    for(i=0; i<skillscontent.length; i++){
        skillscontent[i].className = 'skills_content skills_close'
    }
    if(itemclass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsheader.forEach((el) => {
    el.addEventListener('click' , toggleskills)
})

//QUALIFICATION 
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification_active')

            })
            target.classList.add('qualification_active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification_active')

            })
            tab.classList.add('qualification_active')
        })
   
    })

// SERVICE MODAL
// const modalview = document.querySelectorAll('.services_model') , 
// modalbtn = document.querySelectorAll('.services_button') ,
// modalclose = document.querySelectorAll('.services_model-close')

// let modal = function(modalclick){
//     modalview[modalclick].classList.add('active-modal')
// }
// modalbtn.forEach((modalbtn , i)=>{
//   modalbtn.addEventListener('click' , ()=>{
//     modal(i)
//   })  
// })
// modalclose.forEach((modalclose)=>{
//     modalclose.addEventListener('click' , ()=>{
//         modalview.forEach((modalview)=>{
//           modalview.classList.remove('active-modal')
//         })
        
//     })
// })
//   PROJECT SLIDER
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 50,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navmenu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active_link')
		}else{
			sectionsClass.classList.remove('active_link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80)nav.classList.add('scroll-header');
    else
    nav.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

// Scroll up  
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
   else
   scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil uil-moon' : 'uil uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'uil uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

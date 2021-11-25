/*Animation*/
window.onload = () => {
    var image = document.querySelector('.showcase')

    window.addEventListener('scroll', (e) => {
        let scroll = window.scrollY 
        console.log(scroll);

        image.style.backgroundPositionY = `${scroll/2}px`
    })
}

window.sr = ScrollReveal();
  sr.reveal('.contenedors', {
    duration: 2000,
    origin: 'bottom',
    distance: '400px'
  });
  sr.reveal('.about-section', {
    duration: 2000,
    origin: 'bottom',
    distance: '400px'
  });
  sr.reveal('.inner-container', {
    duration: 4000,
    origin: 'bottom',
    distance: '400px'
  });
  sr.reveal('.grid-container', {
    duration: 2000,
    origin: 'bottom',
    distance: '400px'
  });


/* TOGGLE ON MOBILE*/
const navToggle = document.querySelector(".navicon")
const navMenu = document.querySelector(".navmenu")
const menuLinks = document.querySelectorAll('.menu a[href^="#"]')

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});


menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click", function() {
        navMenu.classList.remove("nav-menu_visible")
    })
})

/*TOGGLE ON PC*/
const navpcToggle = document.querySelector(".navicon")
const navpcMenu = document.querySelector(".menu")
const menupcLinks = document.querySelectorAll('.menu a[href^="#"]')

navpcToggle.addEventListener("click", () => {
    navpcMenu.classList.toggle("nav-menu_visibles")
})

navpcMenu.addEventListener("mouseleave", () =>{
  navpcMenu.classList.toggle("nav-menu_visibles")
})




/*Boton GoUp*/
$(document).ready(function(){

	$('.goup').click(function(){
		$('html').animate({
			scrollTop: '0px'
		}, 300);
	});
});


/*Porfolio*/
var elem = document.querySelector('.grid-container');
imagesLoaded( elem, () => {
    var msnry = new Masonry( elem, {
        // options
        itemSelector: '.card-items',
        columnWidth: 250,
        gutter: 15,
        isFitWidth: true,
      });
})



let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
	loginForm.classList.toggle('active');
	navbar.classList.remove('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
	loginForm.classList.remove('active');
}

var swiper = new Swiper('.review-slider', {
	spaceBetween: 20,
	centeredSliders: true,
	grabCursor: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},

		768: {
			slidesPerView: 2,
		},
		
		991: {
			slidesPerView: 3
		}
	}
})


// LOADER
document.getElementById('app').classList.add("none");

function showContent() {
    document.querySelector(".container-loader").classList.add("hidden");
    document.getElementById('app').classList.remove("none");
}
setTimeout(showContent, 3000);

//

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header a[href*=' + Id + ']').classList.add('active')
        }else{
            document.querySelector('.header a[href*=' + Id + ']').classList.remove('active')
        }
    })
}
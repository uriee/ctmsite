

"use strict";

//===== Prealoder

window.onload = function () {
	window.setTimeout(fadeout, 2000);
	window.setTimeout(hide, 4000);
}

function fadeout() {
	document.querySelector('.preloader').style.opacity = '0';
}

function hide() {
	document.querySelector('.preloader').style.display = 'none';
}


/*=====================================
Sticky
======================================= */
window.onscroll = function () {
	var header_navbar = document.querySelector(".navbar-area");
	var sticky = header_navbar.offsetTop;

	if (window.pageYOffset > sticky) {
		header_navbar.classList.add("sticky");
	} else {
		header_navbar.classList.remove("sticky");
	}



	// show or hide the back-top-top button
	var backToTo = document.querySelector(".scroll-top");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		backToTo.style.display = "block";
	} else {
		backToTo.style.display = "none";
	}
};


// section menu active
function onScroll(event) {
	var sections = document.querySelectorAll('.page-scroll');
	var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

	for (var i = 0; i < sections.length; i++) {
		var currLink = sections[i];
		var val = currLink.getAttribute('href');
		var refElement = document.querySelector(val);
		var scrollTopMinus = scrollPos + 73;
		if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
			document.querySelector('.page-scroll').classList.remove('active');
			currLink.classList.add('active');
		} else {
			currLink.classList.remove('active');
		}
	}
};

window.document.addEventListener('scroll', onScroll);


//===== close navbar-collapse when a  clicked
let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".page-scroll").forEach(e =>
	e.addEventListener("click", () => {
		navbarToggler.classList.remove("active");
		navbarCollapse.classList.remove('show')
	})
);
navbarToggler.addEventListener('click', function () {
	navbarToggler.classList.toggle("active");
});



// WOW active
new WOW().init();




// count down timer
const countDownClock = (number = 100, format = 'seconds') => {

	const d = document;
	const daysElement = d.querySelector('.days');
	const hoursElement = d.querySelector('.hours');
	const minutesElement = d.querySelector('.minutes');
	const secondsElement = d.querySelector('.seconds');
	let countdown;
	convertFormat(format);


	function convertFormat(format) {
		switch (format) {
			case 'seconds':
				return timer(number);
			case 'minutes':
				return timer(number * 60);
			case 'hours':
				return timer(number * 60 * 60);
			case 'days':
				return timer(number * 60 * 60 * 24);
		}
	}

	function timer(seconds) {
		const now = Date.now();
		const then = now + seconds * 1000;

		countdown = setInterval(() => {
			const secondsLeft = Math.round((then - Date.now()) / 1000);

			if (secondsLeft <= 0) {
				clearInterval(countdown);
				return;
			};

			displayTimeLeft(secondsLeft);

		}, 1000);
	}

	function displayTimeLeft(seconds) {
		daysElement.textContent = Math.floor(seconds / 86400);
		hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
		secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
	}
}


/*
	start countdown
	enter number and format
	days, hours, minutes or seconds
*/
countDownClock(90, 'days');

// poster


// var qDesktop = 'only screen and (min-width: 1400px)';
// var qLaptop = 'only screen and (min-width: 1200px) and (max-width: 1399px)';
// var qlg = 'only screen and (min-width: 992px) and (max-width: 1199px)';
// var qMd = 'only screen and (min-width: 768px) and (max-width: 991px)';
// var qXs = '(max-width: 767px)';
// var qSm = 'only screen and (min-width: 480px) and (max-width: 767px)';


const
  screen = {
    desktop : window.matchMedia( '(min-width: 1400px)' ),
    laptop:  window.matchMedia( '(min-width: 1200px) and (max-width: 1399px)' ),
    lg : window.matchMedia( '(min-width: 992px) and (max-width: 1199px)' ),
	md : window.matchMedia( '(min-width: 768px) and (max-width: 991px)' ),
	xs : window.matchMedia( '(max-width: 767px)' ),
	sm : window.matchMedia( '(min-width: 480px) and (max-width: 767px)' ),
  };


// media query change events
for (let [scr, mq] of Object.entries(screen)) {
	if (mq) mq.addEventListener('change', mqHandler);
}

mqHandler();

  // media query handler function
function mqHandler() {

	var svg = document.getElementById('svg-poster');
	var pageLeft = document.getElementById('pageLeft');
	var pageUp = document.getElementById('pageUp');

	if (screen['desktop'].matches)
	{
		svg.setAttribute("viewBox","-200 700 2400 1200");
		pageLeft.setAttribute("display","block");
		pageUp.setAttribute("display","none");
		return;
	}

	if (screen['laptop'].matches)
	{
		svg.setAttribute("viewBox","-200 600 2400 1400");
		pageLeft.setAttribute("display","block");
		pageUp.setAttribute("display","none");
		return;
	}

	if (screen['lg'].matches)
	{
		svg.setAttribute("viewBox","-200 600 2400 1400");
		pageLeft.setAttribute("display","block");
		pageUp.setAttribute("display","none");
		return;
	}

	if (screen['md'].matches)
	{
		svg.setAttribute("viewBox","800 0 1300 2000");
		pageLeft.setAttribute("display","none");
		pageUp.setAttribute("display","block");
		return;
	}

	if (screen['sm'].matches)
	{
		svg.setAttribute("viewBox","800 0 1300 2000");
		pageLeft.setAttribute("display","none");
		pageUp.setAttribute("display","block");
		return;
	}

	if (screen['xs'].matches)
	{
		svg.setAttribute("viewBox","800 0 1300 2000");
		pageLeft.setAttribute("display","none");
		pageUp.setAttribute("display","block");
		return;
	}


}

// const mqLarge  = window.matchMedia( '(max-width: 800px)' );
// mqLarge.addEventListener('change', mqHandler);
// // initial state
// mqHandler(mqLarge);

// // media query handler function
// function mqHandler(e) {
 
// 	var svg = document.getElementById('svg-poster');
// 	var page1 = document.getElementById('page');
  
// 	if (e.matches) { 
// 		svg.setAttribute("viewBox","900 -800 1080 1920");
// 		page1.setAttribute("transform","translate(1000, -800)");
// 	} else {
// 		  svg.setAttribute("viewBox","-400 0 2820 1080");
// 		  page1.setAttribute("transform","translate(0, 0)");
// 	}
 
// }

// function layoutPoster()
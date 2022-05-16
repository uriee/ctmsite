

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
		svg.setAttribute("viewBox","-200.5 1100 2800 1400");
		pageLeft.setAttribute("display","block");
		pageUp.setAttribute("display","none");
		return;
	}

	if (screen['laptop'].matches)
	{
		svg.setAttribute("viewBox","-0.5 930 2400 1600");
		pageLeft.setAttribute("display","block");
		pageUp.setAttribute("display","none");
		return;
	}

	if (screen['lg'].matches)
	{
		svg.setAttribute("viewBox","-0.5 930 2400 1600");
		pageLeft.setAttribute("display","block");
		pageUp.setAttribute("display","none");
		return;
	}

	if (screen['md'].matches)
	{
		svg.setAttribute("viewBox","878.5 0 1400 2800");
		pageLeft.setAttribute("display","none");
		pageUp.setAttribute("display","block");
		return;
	}

	if (screen['sm'].matches)
	{
		svg.setAttribute("viewBox","878.5 0 1400 2800");
		pageLeft.setAttribute("display","none");
		pageUp.setAttribute("display","block");
		return;
	}

	if (screen['xs'].matches)
	{
		svg.setAttribute("viewBox","878.5 0 1400 2800");
		pageLeft.setAttribute("display","none");
		pageUp.setAttribute("display","block");
		return;
	}


}

var n = 1;
var mousex = 0;
var mousey = 0;

window.setInterval(animatePartical, 1500);


function animatePartical()
{
 	if(n>20) {n=1;}

	const newLocal = "par"+n;
	var p = document.getElementById(newLocal);

	p.setAttribute("r","30");
	p.setAttribute("cx",mousex);
	p.setAttribute("cy",mousey);
	p.classList.add("move-to-center");
	n=n+1;
}

var svg = document.querySelector('svg');
// Create an SVGPoint for future math
var pt = svg.createSVGPoint();

svg.addEventListener('mousemove',function(evt){
	var loc = cursorPoint(evt);
	mousex =loc.x;
	mousey =loc.y;
  },false);

// Get point in global SVG space
function cursorPoint(evt){
  pt.x = evt.clientX; pt.y = evt.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
  }



// function animatePartical()
// {
//  	if(n>10) {n=1;}


// 	 var cx="1200.5";
// var cy="1146";
// 	 var angle = Math.random()*Math.PI*2;

// 	 var r =  getRandomArbitrary(0,100);
// 	var x = Math.cos(angle)*r;
// 	var y = Math.sin(angle)*r;

// 	const newLocal = "par"+n;
// 	var p = document.getElementById(newLocal);

// 	var a = Math.random() > 0.5 ? 1: -1;
// 	var px = cx+a*r;
// 	var py = cy+y;

// 	p.setAttribute("r","50");
// 	p.setAttribute("cx",mousex);
// 	p.setAttribute("cy",mousey);
// 	p.classList.add("move-to-center");
// 	n=n+1;
// }

// var svg = document.getElementsByTagName('svg')[0]; //Get svg element
// var crc = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
// crc.setAttribute("r","50"); //Set path's data
// crc.setAttribute("cx","1000"); 
// crc.setAttribute("cy","1000"); 
// crc.setAttribute("opacity","0.5"); 
// crc.setAttribute("id","ci"); 
// crc.style.stroke = "#fff"; //Set stroke colour
// crc.style.strokeWidth = "50px"; //Set stroke width
// svg.appendChild(crc);

// crc.animate({
// 	duration: 2000,
// 	delay: 1000,
// 	when: 'now',
// 	swing: true,
// 	times: 5,
// 	wait: 200
//   }).attr({ strock: '#f03' })
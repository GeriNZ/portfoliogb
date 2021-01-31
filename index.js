let btn = document.getElementById('ab');
let el = document.querySelector('.about');

btn.addEventListener('click', 
function () { 
    el.scrollIntoView(true); 
} )

let btn1 = document.getElementById('sk');
let el1 = document.querySelector('.skills');

btn1.addEventListener('click', 
function () { 
    el1.scrollIntoView(true); 
} )

let btn2 = document.getElementById('pr');
let el2 = document.querySelector('.work');

btn2.addEventListener('click', 
function () { 
    el2.scrollIntoView(true); 
} )

let btn3 = document.getElementById('ct');
let el3 = document.querySelector('.contact');

btn3.addEventListener('click', 
function () { 
    el3.scrollIntoView(true); 
} )

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// window.addEventListener = ('scroll', function () {

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// )

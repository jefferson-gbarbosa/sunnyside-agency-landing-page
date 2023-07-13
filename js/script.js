const navToggleButton = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');

function toggleMenu(){
   // const navigation = document.querySelector('.navigation');
   const navList = document.querySelector('.nav-list');
   // navigation.classList.toggle('active');
   navList.classList.toggle('active')
}
// REMOVE MENU MOBILE
// When we click on each nav-link,we remove the show-menu
function linkAction(){
   const navList = document.querySelector('.nav-list');
   navList.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click',linkAction));
// SCROLL FUNCTION
/* change page header when scrolling */
const nav = document.querySelector('.nav')
const navHeight = nav.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll is greater than header height
    nav.classList.add('scroll')
  } else {
    // smaller than header height
    nav.classList.remove('scroll')
  }
}

navToggleButton.addEventListener('click',toggleMenu);

/* When Scroll */
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
})
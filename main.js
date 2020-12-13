let menu = document.querySelector("#menu");
let leftNav = document.querySelector('#left-nav');

menu.addEventListener('click', showLeftNavBar);



function showLeftNavBar(e) {
    leftNav.classList.toggle('active');
}
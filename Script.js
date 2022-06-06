document.querySelector(".menu__hamburguesa").addEventListener("click", animateMenu);

var line1__bars = document.querySelector(".list1__bars-menu");
var line2__bars = document.querySelector(".list2__bars-menu");
var line3__bars = document.querySelector(".list3__bars-menu");

function animateMenu() {
    line1__bars.classList.toggle("activelist1__bars-menu");
    line2__bars.classList.toggle("activelist2__bars-menu");
    line3__bars.classList.toggle("activelist3__bars-menu");
}
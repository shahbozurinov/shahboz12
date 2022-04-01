let puls = document.querySelector('.pl-1');
let pl_2 = document.querySelector('.pl-2');
let pl_3 = document.querySelector('.pl-3');
let pl_4 = document.querySelector('.pl-4');
let pl_5 = document.querySelector('.pl-5');

puls.addEventListener("click", function(){
    this.classList.toggle('deg')
})

pl_2.addEventListener("click", function(){
    this.classList.toggle('deg')
})

pl_3.addEventListener("click", function(){
    this.classList.toggle('deg')
})

pl_4.addEventListener("click", function(){
    this.classList.toggle('deg')
})

pl_5.addEventListener("click", function(){
    this.classList.toggle('deg')
})


let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
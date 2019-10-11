let options = document.querySelector(".options");
let bars = document.querySelector(".options i:first-child");
let x = document.querySelector(".options i:last-child");
let menu = document.querySelector("#menu");

options.addEventListener("click", ()=>{
    menu.classList.toggle('hide-mobile');
    bars.classList.toggle('hide-mobile');
    x.classList.toggle('hide-mobile');
})


window.addEventListener("load",()=>{

let home_show = document.querySelector("#home");
let a1_hide = document.querySelector("article.a1-hide").style.display="none";
let a2_hide = document.querySelector("article.a2-hide").style.display="none";
let a3_hide = document.querySelector("article.a3-hide").style.display="none";
let a4_hide = document.querySelector("article.a4-hide").style.display="none";
let a5_hide = document.querySelector("article.a5-hide").style.display="none";
let a6_hide = document.querySelector("article.a6-hide").style.display="none";


let menu_home = document.querySelector("li.home");
let menu_a1 = document.querySelector("li.a1");
let menu_a2 = document.querySelector("li.a2");
let menu_a3 = document.querySelector("li.a3");
let menu_a4 = document.querySelector("li.a4");
let menu_a5 = document.querySelector("li.a5");
let menu_a6 = document.querySelector("li.a6");

menu_home.addEventListener("click", ()=>{
    alert("hola");
})
menu_a1.addEventListener("click", ()=>{
    alert("hola");
})
menu_a2.addEventListener("click", ()=>{
    alert("hola");
})
menu_a3.addEventListener("click", ()=>{
    alert("hola");
})
menu_a4.addEventListener("click", ()=>{
    alert("hola");
})
menu_a5.addEventListener("click", ()=>{
    alert("hola");
})
menu_a6.addEventListener("click", ()=>{
    alert("hola");
})




let menuOptions = document.querySelector("#menu");
let currentDisplay = document.querySelector(menuOptions[0].getAttribute=("href"));

content.style.display="none";


menuOptions.forEach((option) =>{
    let option_content = document.querySelector(option.getAttribute("href"));
    content.style.display = "none";

    option.addEventListener("click", function(){
        currentDisplay = document.querySelector(this.getAttribute("href"));
        currentDisplay.style.display = "block";
        switch(currentDisplay)
    })
})*/
})



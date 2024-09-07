let btn_menu = document.querySelector(".btn-menu");
let links = document.querySelector(".links ul");
let list = document.querySelector(".links ul li");

btn_menu.addEventListener('click' , function(){
    btn_menu.classList.toggle("open");
    if(btn_menu.getAttribute("class") === "btn-menu open"){
        links.style.cssText= "transform:scale(1,1)translateY(0px)";
    }
    else{
        links.style.cssText= "transform:scale(0,0)translateY(200px)";
    }
})
window.onscroll = function(){
    if(window.scrollY >= 250){
        document.querySelector("header").style.cssText = "top:-100%"
    }
    else{
        document.querySelector("header").style.cssText = "top:0";
    }
}
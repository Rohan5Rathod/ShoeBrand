const menu = document.querySelector('[data-toggle="menu"]');
const close = document.querySelector('[data-toggle="close"]');
const nav = document.querySelector('nav');

menu.addEventListener("click", ()=>{
    nav.classList.add("open-nav")
})

close.addEventListener("click", ()=>{
    nav.classList.remove("open-nav")
})
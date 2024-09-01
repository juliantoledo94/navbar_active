const navLinkElements = document.querySelectorAll(".nav__link");
console.log(navLinkElements)
const windownPathName = window.location.pathname;

navLinkElements.forEach((navLinkElement) =>{
    if(navLinkElement.href.includes(windownPathName)){
        navLinkElement.classList.add("active-new");
    }
})

///https://www.youtube.com/watch?v=ThSaI0kuez8
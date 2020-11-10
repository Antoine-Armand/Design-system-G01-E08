/*
    MAIN JS
*/

// Nav bar burger
function navBarResponsive (){
    const navBarBurger = document.querySelector('.nav-bar-burger')
    const navBarCross = document.querySelector('.nav-bar-cross')
    const navBarAltContainer = document.querySelector('.nav-bar-alt-container')

    navBarBurger.addEventListener('click', ()=> {
        navBarAltContainer.classList.add('expanded')
    })

    navBarCross.addEventListener('click', ()=> {
        navBarAltContainer.classList.remove('expanded')
    })
}
navBarResponsive()


// Favicon theme
function faviconAlt (){
    const favicon = document.querySelector('#favicon');

    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        favicon.href="https://hujinn.com/assets/img/favicon-light.png";
    }
    else {
        favicon.href="https://hujinn.com/assets/img/favicon-dark.png";
    }
}
faviconAlt()
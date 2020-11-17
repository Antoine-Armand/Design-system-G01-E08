import './assets/styles/main.scss'

/*
    Dark mode switcher
*/

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
    console.log('hello');
}

toggleSwitch.addEventListener('change', switchTheme, false);

import cardsFood from './json/menu.json' 
import makeMarkUpTpl from './templates/gallery.hbs'
import './styles/style.css';

const markup = makeMarkUpTpl(cardsFood);

const menuCardsRef = document.querySelector('.js-menu');
const checkboxChangeThemeRef = document.querySelector('#theme-switch-toggle')

menuCardsRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkboxChangeThemeRef.addEventListener('change', onChangeTheme)

function onChangeTheme(e) {
    const darkThemeChange = document.body.classList.toggle(Theme.DARK);
    localStorage.setItem('darkTheme', darkThemeChange);
    
}
populateTheme();

function populateTheme() {
    const savedPositionTheme = JSON.parse(localStorage.getItem('darkTheme'));

    if (savedPositionTheme) {
        checkboxChangeThemeRef.checked = true;
        document.body.classList.add(Theme.DARK);
    }
    
}

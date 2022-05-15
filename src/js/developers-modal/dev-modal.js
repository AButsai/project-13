import data from '../../json/developers/developers.json'
import getRefs from '../refs/getRefs';
import {devListMarkupAdd} from './developers-markup'
import { devMarkup } from './developers-markup';

const { closeModalBtn, backdrop, modal } = getRefs();
const devModalLink = document.querySelector('.footer__link');

const onDevModalLinkClick = () =>{

    closeModalBtn.classList.add('dev-modal-button-close')
    backdrop.classList.remove('visually-hidden');
    modal.insertAdjacentHTML('beforeend', devMarkup);
    devListMarkupAdd(data);
}

devModalLink.addEventListener('click',onDevModalLinkClick);
document.addEventListener('keydown', keyPress);

function onCloseBtnPress() {

    closeModalBtn.classList.remove('dev-modal-button-close')
    backdrop.classList.add('visually-hidden');
    document.body.removeEventListener('keypress', keyPress); 
}
closeModalBtn.addEventListener('click', () => {
    onCloseBtnPress();
});

backdrop.addEventListener('click', (e)=>{
    if (e.target === e.currentTarget) {
        onCloseBtnPress();
    }
});

function keyPress(e) {
    if (e.key === 'Escape') {
      onCloseBtnPress();
    }
}
import { scrollTo } from 'scroll-js';

const scrollBtnEl = document.querySelector(".scroll-up-btn");

window.addEventListener("scroll", showScroll);

function showScroll(evt) {
    const startPosition = window.scrollY;

    if (startPosition > 1250) {
        scrollBtnEl.classList.remove("visability");
    } else {
        scrollBtnEl.classList.add("visability");
    }

        evt.target.onclick = function () {
            scrollTo(document.body, {
                top: 0,
                duration: 1250,
                easing: 'ease-out',
            })
        
        }
    }

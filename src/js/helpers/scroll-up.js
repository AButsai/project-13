import { scrollTo } from 'scroll-js';

const scrollBtnEl = document.querySelector(".scroll-up-btn");

// scrollBtnEl.onclick = function () {
//     scrollTo(document.body, {
//         top: 0,
//         duration: 1000,
//         easing: 'ease-out',
//     })
// }
// window.addEventListener("scroll", myScrollFunc);

window.addEventListener("scroll", showScroll);

function showScroll(evt) {
    const startPosition = window.scrollY;

    if (startPosition > 1250) {
        scrollBtnEl.classList.remove("hidden");
        scrollBtnEl.classList.add("beaty-appear");
    } else {
        scrollBtnEl.classList.add("hidden");
        scrollBtnEl.classList.remove("beaty-appear");
    }

        evt.target.onclick = function () {
            scrollTo(document.body, {
                top: 0,
                duration: 1250,
                easing: 'ease-out',
            })
        
        }
    }

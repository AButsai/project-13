const devMarkup =`
            <div class="dev-grid">
                <ul class="dev-grid__base">
                </ul>
            </div>`;

const devListMarkupAdd = developers => {
    
    const gridBase = document.querySelector('.dev-grid__base')
    const devMarkup = ({name, github, photo, mail, linkedin}) => {
            return `<li class="dev-grid__el">
                        <img class="dev-img" src="${photo}" alt="${name}" width="180"
                        height="170">
                        <p class="dev-name">${name}</p>
                        <div class="dev-icons">
                            <a class="link-icons" href="${github}">
                                <svg class="dev-git link-icon"></svg>
                            </a>
                            <a class="link-icons" href="${linkedin}">
                                <svg class="dev-linkedin link-icon"></svg>
                            </a>
                            <a class="link-icons" href="mailto:${mail}">
                                <svg class="dev-mail link-icon"></svg>
                            </a>
                        </dev>
                    </li>`
    };
    const makeDevMarkup = developers.map(devMarkup).join('');
    gridBase.insertAdjacentHTML('beforeend', makeDevMarkup);
};

export {devMarkup}
export {devListMarkupAdd}
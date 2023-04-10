// ==UserScript==
// @name         Duolingo Hide Text
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @author       Marlon Passos
// @match        *://*.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        none
// ==/UserScript==

main()

function main () {
    setInterval(()=> {
        if (getPhase()) {
            getPhase().classList.add('hideText')
        }

        if (getErrorContainer()) {
            getPhase() && getPhase().classList.remove('hideText')
        }

        handleStyle()

    }, 200)
};

function createStyleClass () {
    document.body.insertAdjacentHTML('beforeend', '<style class="stylePlugin"> .hideText {color: #FFF;}.hideText:hover {color: #3c3c3c}</style>')
}

function getSyleClass() {
   return document.querySelector('.stylePlugin')
}

function handleStyle() {
   if (getSyleClass() === null ) createStyleClass()
}

function getPhase() {
    /** https://prnt.sc/UQSi6DQ_nAXq */
    const CSS_SELECTOR = '[data-test="challenge challenge-translate"] ._1KUxv._11rtD [dir="ltr"] > span:nth-child(2), [data-test="challenge challenge-listenIsolation"] ._1KUxv._11rtD > [dir="ltr"] > span:nth-child(2)';
    return document.querySelector(CSS_SELECTOR) ?? document.querySelector('span.hideText')
}

function getErrorContainer() {
    /** https://prnt.sc/jYiswWE1I8Qm */
    const CSS_SELECTOR = `[data-test="blame blame-incorrect"]`;
    return document.querySelector(CSS_SELECTOR)
}





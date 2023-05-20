// ==UserScript==
// @name         Duolingo Hide Text
// @namespace    http://tampermonkey.net/
// @version      0.4.0
// @author       Marlon Passos
// @match        *://*.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        none
// ==/UserScript==

const CLASS_CSS_HIDE_TEXT = 'hideText'
const CLASS_CSS_MY_STYLE = 'stylePlugin'
const CLASS_CSS_TAP_TOKEN_TEXT = '[data-test="challenge-tap-token-text"]'

main()

function main () {
    setInterval(()=> {
        handleStyle()
        handlePhases()
    }, 200)
};

function handlePhases() {
        if (getPhaseElement()) {
            getPhaseElement().classList.add(CLASS_CSS_HIDE_TEXT)
        }

        if (getErrorContainerElement() || getCorrectContainerElement()) {
            getPhaseElement() && getPhaseElement().classList.remove(CLASS_CSS_HIDE_TEXT)
        }
}

function createStyleClass () {
    const styleElementInString = `
        <style
            class="${CLASS_CSS_MY_STYLE}"
        >
            .${CLASS_CSS_HIDE_TEXT} {
                color: #FFF;
            }

            .${CLASS_CSS_HIDE_TEXT}:hover {
                color: #3c3c3c
            }

            ${CLASS_CSS_TAP_TOKEN_TEXT} {
                color: transparent;
            }
        </style>`

    document.body.insertAdjacentHTML('beforeend', styleElementInString )
}

function handleStyle() {
   if (getMyStyleElement() === null ) createStyleClass()
}

function getPhaseElement() {
    /** https://prnt.sc/UQSi6DQ_nAXq */
    const CSS_SELECTOR = '[data-test="challenge challenge-translate"] ._1KUxv._11rtD [dir="ltr"] > span:nth-child(2), [data-test="challenge challenge-listenIsolation"] ._1KUxv._11rtD > [dir="ltr"] > span:nth-child(2)';
    return document.querySelector(CSS_SELECTOR) ?? document.querySelector(`span.${CLASS_CSS_HIDE_TEXT}`)
}

function getErrorContainerElement() {
    /** https://prnt.sc/jYiswWE1I8Qm */
    const CSS_SELECTOR = `[data-test="blame blame-incorrect"]`;
    return document.querySelector(CSS_SELECTOR)
}

function getCorrectContainerElement() {
    /** https://prnt.sc/EdChsyEy8xmo */
    const CSS_SELECTOR = `[data-test="blame blame-correct"]`;
    return document.querySelector(CSS_SELECTOR)
}

// blame-correct"

function getMyStyleElement() {
   return document.querySelector(`.${CLASS_CSS_MY_STYLE}`)
}

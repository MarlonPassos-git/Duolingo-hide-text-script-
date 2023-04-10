// ==UserScript==
// @name         Duolingo Hide Text
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @author       Marlon Passos
// @match        *://*.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        none
// ==/UserScript==
const CLASS_CSS_HIDE_TEXT = 'hideText'
main()

function main () {
    setInterval(()=> {
        handleStyle()
        handlePhases()
    }, 200)
};

function handlePhases() {
        if (getPhase()) {
            getPhase().classList.add(CLASS_CSS_HIDE_TEXT)
        }

        if (getErrorContainer()) {
            getPhase() && getPhase().classList.remove(CLASS_CSS_HIDE_TEXT)
        }
}

function createStyleClass () {
    document.body.insertAdjacentHTML('beforeend', `<style class="stylePlugin"> .${CLASS_CSS_HIDE_TEXT} {color: #FFF;}.${CLASS_CSS_HIDE_TEXT}:hover {color: #3c3c3c}</style>`)
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
    return document.querySelector(CSS_SELECTOR) ?? document.querySelector(`span.${CLASS_CSS_HIDE_TEXT}`)
}

function getErrorContainer() {
    /** https://prnt.sc/jYiswWE1I8Qm */
    const CSS_SELECTOR = `[data-test="blame blame-incorrect"]`;
    return document.querySelector(CSS_SELECTOR)
}





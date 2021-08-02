// ==UserScript==
// @name         Duolingo Hide Text
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @author       You
// @match        *://*.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let loop = setInterval(()=> {
    let phase = document.querySelector('._1KUxv [data-test="hint-sentence"]')
    let sond = document.querySelector('._21LCG')
    let answer = document.querySelector('.YQ0lZ ')

    if (sond) {
        phase.classList.add('hideText')
    }

    if (answer) {
        phase.classList.remove('hideText')
    }

    hasStyle()

}, 500)
    loop()

    function hasStyle() {

        let b = document.querySelector('.stylePlugin')
        if (b == null) {
            document.body.insertAdjacentHTML('beforeend', '<style class="stylePlugin"> .hideText {color: #FFF;}.hideText:hover {color: #3c3c3c}</style>')
        }
    }

})();

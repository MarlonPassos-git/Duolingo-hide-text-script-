// ==UserScript==
// @name         Duolingo Hide Text
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
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

    if (sond) {
        phase.classList.add('hideText')
    }

    hasStyle()

}, 1000)
    loop()

    function hasStyle() {

        let b = document.querySelector('.stylePlugin')
        if (b == null) {
            document.body.insertAdjacentHTML('beforeend', '<style class="stylePlugin"> .hideText {color: #FFF;}.hideText:hover {color: #3c3c3c}</style>')
        }
    }

})();

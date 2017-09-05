const $ = require('jquery');
const handle = require('./handlers')

document.addEventListener("DOMContentLoaded", () => {

    const textSubmission = $('.text-submission textarea')
    const textSubmitButton = $('.text-submission button')
    const wordCount = $('.word-count')
    const topWordHeader = $('.top-word h3')

    handle.topWord(topWordHeader)

    textSubmitButton.on('click', () => handle.wordAppend(textSubmission, wordCount))

    textSubmission.on('keyup', (e) => handle.pressEnter(e, textSubmission, wordCount))

})
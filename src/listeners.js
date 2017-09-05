const $ = require('jquery');
const service = require('./service')
const handle = require('./handlers')

document.addEventListener("DOMContentLoaded", () => {

    const textSubmission = $('.text-submission textarea')
    const textSubmitButton = $('.text-submission button')
    const wordCount = $('.word-count')
    const topWordHeader = $('.top-word h3')

    service.getTopWord(topWordHeader);

    textSubmitButton.on('click', () => handle.wordAppend(textSubmission, wordCount))

    textSubmission.on('keyup', (e) => handle.pressEnter(e, textSubmission, wordCount))

})
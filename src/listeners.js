const $ = require('jquery');
const service = require('./service')
const handlers = require('./handlers')

document.addEventListener("DOMContentLoaded", () => {

    const textSubmission = $('.text-submission textarea')
    const textSubButton = $('.text-submission button')
    const wordCount = $('.word-count')
    const topWordHeader = $('.top-word h3')

    service.getTopWord(wordCount, topWordHeader);

    textSubButton.on('click', () => handlers.handleAppend(textSubmission, wordCount))

    textSubmission.on('keyup', (e) => handlers.handleEnter(e, textSubmission, wordCount))

})
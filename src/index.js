const $ = require('jquery');


document.addEventListener("DOMContentLoaded", () => {

    const textSubmission = $('.text-submission textarea')
    const textSubButton = $('.text-submission button')

    $.getJSON('https://wordwatch-api.herokuapp.com/api/v1/top_word')
        .then((data) => {
            const topWord = Object.keys(data.word)[0]
            const topWordCount = data.word[topWord]
            $('.top-word h3').append(`${topWord}: (${topWordCount})`)
        })

    textSubButton.on('click', () => {
        const words = textSubmission.val().split(/[ :;,-.\]\[\n)(]+/)
        const grouped = {}
        words.forEach(function(word) {
            let lowerWord = word.toLowerCase()
            if (grouped[lowerWord]) {
                grouped[lowerWord] += 1
            } else {
                grouped[lowerWord] = 1
            }
        })
        debugger

    })

})
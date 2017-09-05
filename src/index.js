const $ = require('jquery');

const postToWordWatch = word => {
    $.post(`https://wordwatch-api.herokuapp.com/api/v1/words?word[value]=${word}`)
        .then(data => console.log(data))
}

const appendWordsToWordCount = (textSubmission, wordCount) => {
    const words = textSubmission.val().split(/[ :;,-.\]\[\n)(]+/)
    const grouped = {}
    words.forEach(function(word) {
        debugger
        let lowerWord = word.toLowerCase()
        if (word !== '') {
            postToWordWatch(lowerWord)
        }
        if (grouped[lowerWord]) {
            grouped[lowerWord] += 1
        } else {
            grouped[lowerWord] = 1
        }
    })
    Object.keys(grouped).forEach(function(key) {
        let count = grouped[key]
        let word = document.createElement('p')
        $(word).text(`${key} `)
        $(word).css('font-size', `${count}em`)
        wordCount.append(word)
    })
}

document.addEventListener("DOMContentLoaded", () => {

    const textSubmission = $('.text-submission textarea')
    const textSubButton = $('.text-submission button')
    const wordCount = $('.word-count')
    const topWordHeader = $('.top-word h3')

    $.getJSON('https://wordwatch-api.herokuapp.com/api/v1/top_word')
        .then((data) => {
            const topWord = Object.keys(data.word)[0]
            const topWordCount = data.word[topWord]
            topWordHeader.append(`${topWord}: (${topWordCount})`)
        })

    textSubButton.on('click', () => appendWordsToWordCount(textSubmission, wordCount))

    textSubmission.on('keyup', function(event) {
        if (event.keyCode === 13) {
            appendWordsToWordCount(textSubmission, wordCount)
        }
    })

})
const $ = require('jquery')
const service = require('./service')

const appendWords = (grouped, wordCount) =>
    Object.keys(grouped).forEach(function(key) {
        let count = grouped[key]
        let word = document.createElement('p')
        $(word).text(`${key} `)
        $(word).css('font-size', `${count}em`)
        wordCount.append(word)
    })

const countWords = words => {
    const grouped = {}
    words.forEach(function(word) {
        let lowerWord = word.toLowerCase()
        service.postToWordWatch(lowerWord)
        grouped[lowerWord] ?
            grouped[lowerWord] += 1 :
            grouped[lowerWord] = 1
    })
    return grouped
}

module.exports = {
    appendWords,
    countWords,
}
const $ = require('jquery')
const service = require('./services')

const appendWords = (grouped, wordCount) => {
    Object.keys(grouped).forEach((key) => {
        const count = grouped[key]
        const word = document.createElement('p')
        $(word).text(`${key} `).css('font-size', `${count}em`)
        wordCount.append(word)
    })
}

const countWords = words => {
    const grouped = {}
    words.forEach((word) => {
        let lowerWord = word.toLowerCase()
        grouped[lowerWord] ?
            grouped[lowerWord] += 1 :
            grouped[lowerWord] = 1
    })
    return grouped
}

const postWords = words => {
    words.forEach((word) => service.postWord(word))
}

const appendTopWord = (topWordHeader) => {
    service.getTopWord()
        .then((data) => {
            const topWord = Object.keys(data.word)[0]
            const topWordCount = data.word[topWord]
            topWordHeader.append(`${topWord}: (${topWordCount})`)
        })
}

module.exports = {
    appendWords,
    appendTopWord,
    countWords,
    postWords,
}
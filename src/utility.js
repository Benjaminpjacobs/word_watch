const apiService = require('./service')
debugger
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
        service.postWord(lowerWord)
        grouped[lowerWord] ?
            grouped[lowerWord] += 1 :
            grouped[lowerWord] = 1
    })
    return grouped
}

const appendTopWord = (data, topWordHeader) => {
    const topWord = Object.keys(data.word)[0]
    const topWordCount = data.word[topWord]
    topWordHeader.append(`${topWord}: (${topWordCount})`)
}

module.exports = {
    appendWords,
    appendTopWord,
    countWords,
}
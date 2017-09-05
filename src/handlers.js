const $ = require('jquery');
const dataUtility = require('./data_utility');

const pressEnter = (event, textSubmission, wordCount) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        wordAppend(textSubmission, wordCount)
    }
}

const wordAppend = (textSubmission, wordCount) => {
    const words = textSubmission.val().split(/[ :;!?,-.\]\[\n)(]+/)
    const grouped = dataUtility.countWords(words)
    wordCount.html('')
    dataUtility.appendWords(grouped, wordCount)
}

const topWord = (topWordHeader) => {
    dataUtility.appendTopWord(topWordHeader)
}

module.exports = {
    pressEnter,
    wordAppend,
    topWord,
}
const $ = require('jquery');
const utility = require('./utility');

const pressEnter = (event, textSubmission, wordCount) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        wordAppend(textSubmission, wordCount)
    }
}

const wordAppend = (textSubmission, wordCount) => {
    const words = textSubmission.val().split(/[ :;!?,-.\]\[\n)(]+/)
    const grouped = utility.countWords(words)
    wordCount.html('')
    utility.appendWords(grouped, wordCount)
}

module.exports = {
    pressEnter,
    wordAppend,
}
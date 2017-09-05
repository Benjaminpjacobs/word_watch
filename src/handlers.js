const $ = require('jquery');
const utility = require('./words');

const handleEnter = (event, textSubmission, wordCount) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        handleAppend(textSubmission, wordCount)
    }
}

const handleAppend = (textSubmission, wordCount) => {
    const words = textSubmission.val().split(/[ :;,-.\]\[\n)(]+/)
    const grouped = utility.countWords(words)
    wordCount.html('')
    utility.appendWords(grouped, wordCount)
}

module.exports = {
    handleEnter,
    handleAppend,
}
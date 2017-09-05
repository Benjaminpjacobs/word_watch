const $ = require('jquery')
const utility = require('./utility')

const postWord = (word) => {
    word !== '' ?
        $.post(`https://wordwatch-api.herokuapp.com/api/v1/words?word[value]=${word}`) :
        null
}

const getTopWord = (topWordHeader) => {
    $.getJSON('https://wordwatch-api.herokuapp.com/api/v1/top_word')
        .then(function(data) {
            utility.appendTopWord(data, topWordHeader)
        })
}


module.exports = {
    getTopWord: getTopWord,
    postWord: postWord,
}
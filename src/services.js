const $ = require('jquery')
const dataUtility = require('./data_utility')

const postWord = (word) => {
    if (word !== '') {
        $.post(`https://wordwatch-api.herokuapp.com/api/v1/words?word[value]=${word}`)
    }
}

const getTopWord = () =>
    $.getJSON('https://wordwatch-api.herokuapp.com/api/v1/top_word')

module.exports = {
    postWord,
    getTopWord,
}
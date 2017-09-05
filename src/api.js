const $ = require('jquery')
const dataUtility = require('./data_utility')

class Api {
    static postWord(word) {
        $.post(`https://wordwatch-api.herokuapp.com/api/v1/words?word[value]=${word}`)
    }

    static getTopWord(topWordHeader) {
        $.getJSON('https://wordwatch-api.herokuapp.com/api/v1/top_word')
            .then(function(data) {
                utility.appendTopWord(data, topWordHeader)
            })
    }
}
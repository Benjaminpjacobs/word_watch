const $ = require('jquery')


const getTopWord = (wordCount, topWordHeader) => {
    $.getJSON('https://wordwatch-api.herokuapp.com/api/v1/top_word')
        .then((data) => {
            const topWord = Object.keys(data.word)[0]
            const topWordCount = data.word[topWord]
            topWordHeader.append(`${topWord}: (${topWordCount})`)
        })
}

const postToWordWatch = word => {
    word !== '' ?
        $.post(`https://wordwatch-api.herokuapp.com/api/v1/words?word[value]=${word}`) :
        null
}



module.exports = {
    getTopWord,
    postToWordWatch,
}
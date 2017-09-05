document.addEventListener("DOMContentLoaded", () => {
    $.getJSON('https://wordwatch-api.herokuapp.com/api/v1/top_word')
        .then((data) => {
            const topWord = Object.keys(data.word)[0]
            const topWordCount = data.word[topWord]
            $('.top-word h3').append(`${topWord}: (${topWordCount})`)
        })
})
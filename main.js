let quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall.', 'The way to get started is to quit talking and begin doing.', "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 'It is during our darkest moments that we must focus to see the light.', 'Do not go where the path may lead, go instead where there is no path and leave a trail.', "Don't judge each day by the harvest you reap but by the seeds that you plant."]
let authors = ['Nelson Mandela', 'Walt Disney','Oprah Winfrey', 'Benjamin Franklin', 'Aristotle', 'Ralph Waldo Emerson', 'Robert Luis Stevenson']
//initailize index
let i = 0

$( document ).ready(function() {
    //get random index
    let j = Math.floor(Math.random()*quotes.length)
    //if index is same as last reroll
    while(j == i){
        j = Math.floor(Math.random()*quotes.length)
    }
    //set new index
    i = j
    //set text/author
    $("#text").text('"' + quotes[i] + '"')
    $("#author").text('-' + authors[i])
    $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + quotes[i] + ' -' + authors[i] + '"')
});

$("#new-quote").click(function(){
    //get random index
    let j = Math.floor(Math.random()*quotes.length)
    //if index is same as last reroll
    while(j == i){
        j = Math.floor(Math.random()*quotes.length)
    }
    //set new index
    i = j
    //set text/author
    $("#text").text('"' + quotes[i] + '"')
    $("#author").text('-' + authors[i])
    $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + quotes[i] + ' -' + authors[i] + '"')
});


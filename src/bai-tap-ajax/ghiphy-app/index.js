
async function searchMeme() {
    let meme = document.getElementById('memene').value
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${meme}&api_key=BhdKAyxpJqdJ6t6nfHX0rrwIYjvzNnvg`, {
        method: 'GET'
    })
    let giphyList = await response.json()
    console.log(giphyList)
    let html = await giphyList?.data?.map((giphy) => {
        return (`
        <img src="${giphy?.images?.original?.url}" alt='' />
        `
        )
    })
    document.getElementById('show').innerHTML = html.join('')
    // console.log(meme)

}   
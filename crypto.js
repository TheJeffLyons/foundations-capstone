
let cryptoGecko = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

let cryptoNews = `https://newsdata.io/api/1/news?apikey=pub_4277052647e45c167a229a5f76f3707a4e78&q=cryptocurrency&language=en&country=us`

function getCryptos() {
    console.log(`button clicked`);


    axios.get(cryptoGecko)
    .then(function(res){
        const results = res.data
        console.log(results)
        const cryptoContainer = document.querySelector(`#postContainer2`);
        results.forEach(crypto => {
            const cryptoElement = document.createElement(`div`);
            cryptoElement.classList.add('cryptoCard')
            cryptoElement.innerHTML = `<img  src=${crypto.image} class="cryptoName" id="cryptoImage"/>
            <div class="cryptoName"> Rank: ${crypto.market_cap_rank}</div>
            <div class="cryptoName" id="cryptoName">${crypto.name} &nbsp &nbsp ${crypto.symbol} </div>
            <div class="cryptoName" id="price"> Price: ${crypto.current_price}</div>
            <div class="cryptoName"> Market Cap: ${crypto.market_cap}</div>
            <div class="cryptoName"> 24h Change: ${crypto.price_change_24h}</div>
            <div class="cryptoName"> Max Supply: ${crypto.max_supply}</div>
            <div class="cryptoName"> Circulating Supply: ${crypto.circulating_supply}</div>
            <div class="cryptoName"> 24h High: ${crypto.high_24h}</div>
            <div class="cryptoName"> 24h Low: ${crypto.low_24h}</div>
            `
            cryptoContainer.append(cryptoElement);
   
    })
})
}


getCryptos()








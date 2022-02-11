let cryptoNews = `https://newsdata.io/api/1/news?apikey=pub_4277052647e45c167a229a5f76f3707a4e78&q=cryptocurrency`

const baseURL = `http://localhost:2000/api/news`

const newsContainer = document.querySelector(`#postNews`)

function getNews() {
    console.log(`button clicked`);

    fetch(cryptoNews).then((res) =>{
        return res.json()
    })
    .then((data) =>{
        console.log(data)
        data.results.forEach(result =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            li.setAttribute('id', "testnews")
            a.setAttribute('id', "testnews2")
            a.setAttribute('href', result.link);
            a.setAttribute('target', '_blank')
            a.textContent = result.title + result.description;
            li.appendChild(a);
            newsContainer.appendChild(li)
        })
    })

}


getNews()

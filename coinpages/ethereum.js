const postsContainer = document.querySelector('#postContainer');
const form = document.querySelector('form');
const deleteNow = document.querySelector('#deleteBtn');
const baseURL = `http://localhost:2000/api/ethereum`;

const postsCallback = ({ data: posts }) => displayPosts(posts)
const errCallback = err => console.log(err.response.data)
const getAllPosts = () => axios.get(baseURL).then(postsCallback).catch(errCallback)
const createPosts = body => axios.post(baseURL, body).then(postsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let message = document.querySelector('#postBox')   
    let photo = document.querySelector('#photo')

    let bodyObj = {
        message: message.value,
        photo: photo.value,
        coin: "ethereum",
        userName: "jefflyons22",
        proPic: "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
          
    }
   
    createPosts(bodyObj)
    message.value = '' 
    photo.value = "''"  
    
}

function createPostsCard(post) {
    if(post.photo === ''){
    const postsCard = document.createElement('div')
    postsCard.classList.add('postCard')
    postsCard.innerHTML = `<img src=${post.proPic} class="proPicCard"/>
    <p class="post-username">${post.userName}</p>
    <p class="post-message">${post.message}</p>
    `
    postsContainer.appendChild(postsCard)
    }else if(post.photo != ''){
        const postsCard = document.createElement('div')
    postsCard.classList.add('postCard')
    postsCard.innerHTML = `<img src=${post.proPic} class="proPicCard"/>
    <p class="post-username">${post.userName}</p>
    <p class="post-message">${post.message}</p>
    <img src=${post.photo} class="photoPost"/>
    `
    postsContainer.appendChild(postsCard)
    }
}

function displayPosts(arr) {
    postsContainer.innerHTML = ``
    for (let i = arr.length - 1; i >= 0; i--) {
        createPostsCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPosts()
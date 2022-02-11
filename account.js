const picCard = document.querySelector('#profilePic');

const baseURL = `http://localhost:2000/api/account`;

const postsCallback = ({ data: posts }) => displayPic(posts)
const getPic = () => axios.get(baseURL).then(postsCallback)
const createPic = body => axios.post(baseURL, body).then(postsCallback)

function storePic(event) {
    
var pic = document.querySelector('input[type=file]').files[0];
    pic.srcObject = pic.result

    let bodyObj = {
        pic: pic,
          }
   
    createPic(bodyObj)
    pic.result = '' 
     console.log(pic)
}

function createPicCard(post) {
  
        const picCard = document.querySelector('#profilePic');
    
    picCard.src = post.pic
}

function displayPic(arr) {
    picCard.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPicCard(arr[i])
    }
}

// picCard.addEventListener('onchange', storePic)

getPic()
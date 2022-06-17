let body = document.querySelector('#body')
let title = document.querySelector('#title')
let postForm = document.querySelector('#post-card')
let postWrapper = document.querySelector('#post-holder');

let eachCard = [];

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            // console.log(postBox)
               console.log(data)
            eachCard = data
            renderUI(eachCard)
        })


}

getPosts();

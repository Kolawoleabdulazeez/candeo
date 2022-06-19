let body = document.querySelector('#body')
let title = document.querySelector('#title')
let postForm = document.querySelector('#post-card')
let postWrapper = document.querySelector('#post-body');

let eachCard = [];

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => { console.log(data)
            eachCard = data
        
        let postBody ="";
        eachCard.forEach(post => {
        postBody+=`<div class="col-lg-4 col-md-6 col-12">
            <div class="card shadow p-1 mb-3 bg-body rounded border-0">
                <div class="card-body">
                    <p>${post.id}</p>
                    <h5 class="post-title">${post.title}</h5>
                    <p class="post-body">${post.body}</p>
                    <div class="row">
                         <div class="col-lg-6 col-md-6 col-6">
                        <button class=" text-white btn update px-1" onclick="updatePost(${post.id})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                          </svg>Update</button>
                        </div>
                        <div class="col-lg-6 col-md-6 col-6">
                        <button class="text-white btn delete px-1"  onclick="deletePost(${post.id})"><svg xmlns="http://www.w3.org/2000/svg" class="px-1" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        });
        postWrapper.innerHTML = postBody;
    })
    
}

getPosts();



postForm.addEventListener('submit', createPost)

function createPost(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            eachCard.unshift(data);
            console.log(eachCard)
            let postBody = '';
            eachCard.forEach(post => {
                postBody +=`<div class="col-lg-4 col-md-6 col-12">
                <div class="card shadow p-1 mb-3 bg-body rounded border-0">
                    <div class="card-body">
                        <p>${post.id}</p>
                        <h5 class="post-title">${post.title}</h5>
                        <p class="post-body">${post.body}</p>
                        <div class="row">
                             <div class="col-lg-6 col-md-6 col-6">
                            <button class=" text-white btn update px-1" onclick="updatePost(${post.id})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                              </svg>Update</button>
                            </div>
                            <div class="col-lg-6 col-md-6 col-6">
                            <button class="text-white btn delete px-1" onclick="deletePost(${post.id})"><svg xmlns="http://www.w3.org/2000/svg" class="px-1" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            
        });
        postWrapper.innerHTML = postBody;
    })
}


function updatePost(id) {
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title.value,
            body: body.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let postTitles = document.querySelectorAll('.post-title')
            let postBodies = document.querySelectorAll('.post-body')
            console.log(postTitles)
            postTitles.forEach((postTitle, index) => {
                if(index + 1 === id) {
                    if (data.title !== "") {


                        postTitle.innerHTML = data.title
                    }
                }

            })
            postBodies.forEach((postBody, index) => {
                if (index + 1 === id){
                    if (data.body !== "") {

                        postBody.innerHTML = data.body
                    }
                }

            })

        });
}


function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            eachCard = eachCard.filter(post => post.id !== id)
            console.log(eachCard)


let postBody ="";
        eachCard.forEach(post => {
        postBody+=`<div class="col-lg-4 col-md-6 col-12">
            <div class="card shadow p-1 mb-3 bg-body rounded border-0">
                <div class="card-body">
                    <p>${post.id}</p>
                    <h5 class="post-title">${post.title}</h5>
                    <p class="post-body">${post.body}</p>
                    <div class="row">
                         <div class="col-lg-6 col-md-6 col-6">
                        <button class=" text-white btn update px-1" onclick="updatePost(${post.id})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                          </svg>Update</button>
                        </div>
                        <div class="col-lg-4"></div>
                        <div class="col-lg-6 col-md-6 col-6">
                        <button class="text-white btn delete px-1"  onclick="deletePost(${post.id})"><svg xmlns="http://www.w3.org/2000/svg" class="px-1" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        });
        postWrapper.innerHTML = postBody;  
        })

}

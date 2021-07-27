let postTitle = document.getElementById("postTitle");
let userId = document.getElementById("userId");
let postId = document.getElementById("postId");
let postBody = document.getElementById("postBody");
let requestedPost = document.getElementById("requestedPost");
let findButton = document.getElementById("findButton");

let postData;

findButton.addEventListener("click", findPost);

function findPost() {
  let postNumber = requestedPost.value;
  console.log("Request post number: " + postNumber);

  fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`) // promise!
    .then(processResponse, rejected) // resolve , reject
    .then(displayPost, rejected)
    .catch(rejected); // resolve , reject
}

function processResponse(response) {
  if (response.status == 200) return response.json();
}

function displayPost(json) {
  postData = json;
  console.log(json);

  postTitle.innerText = postData.title;
  userId.innerText = postData.userId;
  postId.innerText = postData.id;
  postBody.innerText = postData.body;
}

function rejected(rejectInfo) {
  console.log("Rejected: " + rejectInfo);
}

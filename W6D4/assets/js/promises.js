const promiseA = new Promise((resolve, reject) => {
  let statusCode = 404; // some complicated action that might fail!
  let imageInfo = "a puppy";

  // Check and see if the result meets our criteria
  if (statusCode == 200) {
    // If it does, resolve!
    resolve(imageInfo);
  } else {
    // If it doesn't, reject!
    reject(statusCode);
  }
});

promiseA
  .then(
    (val) => console.log("Async logging has value: " + val) // Resolve
    //   (err) => console.log("Error: " + err) // Reject
  )
  .catch((err) => {
    console.log("Promise Rejected! Status Code: " + err);
  });
console.log("This is the immediate log!"); // Happens synchronously

async function myFunc() {
  return 1;
}

// myFunc().then(alert);

async function timedAction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });

  let result = await promise; // Pauses and waits for the return value
  //   let result = promise; // Doesn't pause, doesn't get return value

  alert(result);
}

timedAction();

// let url = "https://www.google.com";
// let options = "GET";
// let fetchResult = fetch(url, [options]);

let url = "https://www.google.com";
let options = "GET";

// async function getStuffFromWeb() {
//   //   let response = await fetch(url);

//   //   if (response.ok) {
//   //     let json = await response.json();
//   //     return json;
//   //   } else {
//   //     alert("HTTP-Error: " + response.status);
//   //   }

//   await fetch("https://javascript.info/article/promise-chaining/user.json")
//     .then(async function (response) {
//       return response.text();
//     })
//     .then(function (text) {
//       alert(text);
//     });
// }

// getStuffFromWeb();

// One way to handle promises - with promise chaining
// fetch("https://javascript.info/article/promise-chaining/user.json")
//   .then((response) => response.json())
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((response) => response.json())
//   .then((githubUser) => {
//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//   });

// A better way to handle this with async/await
async function showAvatar() {
  // read our JSON
  let response = await fetch(
    "https://javascript.info/article/promise-chaining/user.json"
  );
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);
}

showAvatar();
showAvatar();

// Syntax Error! Await is only allowed in async functions!
// let response = await fetch(url);
// let user = await response.json();

// Get around this requirement by wrapping the await calls in an anonymous function!
(async () => {
  let response = await fetch(url);
  let user = await response.json();
})();

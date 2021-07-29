// Rewrite the following code using async/await:

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }

//   loadJson('http://httpstat.us/500')
//     .catch(alert); // Error: 500

// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     return await response.json();
//   } else {
//     throw new Error(response.status);
//   }
// }

// console.log(loadJson("http://httpstat.us/200").catch(alert)); // Error: 500

const URL_TO_FETCH = "http://httpstat.us/500";
// let url = "https://javascript.info/article/promise-chaining/user.json";

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

let result = loadJson(url).catch(alert);
console.log(result);

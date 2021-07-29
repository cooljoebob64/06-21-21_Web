// Call the async function in the regular function f().
//How could we do this since we can't use await in f()?

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"

  wait().then((result) => console.log(result));
  //   console.log(result);
}

f();

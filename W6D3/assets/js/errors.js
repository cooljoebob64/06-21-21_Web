let fs = require("fs");

// fs.readFile("Does/Not/Exist", handleFile);

function handleFile(error, file) {
  if (error) {
    throw new MediaError();
    // return console.error("Uh oh there was an error: " + error);
  } else {
    console.log("No error, here's your file!");
    console.log(file);
  }
}

try {
  nonExistantFunction();
} catch (error) {
  console.error("Non existant function error: " + error);
}

// nonExistantFunction();
console.log("Here is the next step!");



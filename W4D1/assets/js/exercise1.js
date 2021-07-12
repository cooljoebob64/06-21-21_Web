let header = document.querySelector("header");
console.log("Header:");
console.log(header);

let sections = document.querySelectorAll("section");
console.log("Sections:");
console.log(sections);

let currentSection = document.querySelector("section.current");
console.log("Current Section:");
console.log(currentSection);

let afterCurrent = currentSection.nextElementSibling;
console.log("After the current section:");
console.log(afterCurrent);

let myH2 = currentSection.previousElementSibling.firstElementChild;
console.log("My H2:");
console.log(myH2);

let myDiv = document.querySelector("h2.highlight").parentElement.parentElement;
console.log("My Div:");
console.log(myDiv);

// find the sections that contain H2s
let sectionsWithH2 = Array.from(document.querySelectorAll("section h2")).map(
  function (headline) {
    return headline.parentElement;
  }
);
console.log("Sections with H2s:");
console.log(sectionsWithH2);


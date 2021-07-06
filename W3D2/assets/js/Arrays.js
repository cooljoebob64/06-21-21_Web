let teachers = ["Shane", "Zack"];

console.log(teachers.push("Josh"));

let arrayLength = teachers.length;
let oldTeacher = teachers.pop();

teachers.unshift("New Guy");
let newGuy = teachers.shift();

teachers[5] = "Mister Fiveo";
teachers[1] = "Lady Onsie";
let fiveoSpot = teachers.indexOf("Mister Fiveo");

console.log("At index 20: " + teachers[20]);
console.log("The array is now: " + arrayLength);
console.log("The old teacher was: " + oldTeacher);
console.log(teachers);
console.log("The new guy was: " + newGuy);

teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
teachers.unshift("Shane");
console.log(teachers);

console.log("Index of Shane: " + teachers.indexOf("Shane"));

console.log("The person in Fiveo's old spot:" + teachers[fiveoSpot]);

let teacherSlice = teachers.slice(0, 3);
console.log("Teacher slice is: " + teacherSlice);
console.log(teachers);

teachers.splice(0, 3, "Josh");
console.log("Teacher SPlice is: ");
console.log(teachers);

let numberOfShanes = 0;
let indexOfShanes = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] != undefined) {
    console.log(teachers[i] + " is at index " + i);
    if (teachers[i] === "Shane") {
      numberOfShanes++;
      indexOfShanes.push(i);
    }
  }
}

teachers.forEach(function (item, index) {
  console.log(item + " is at index " + index);
});

console.log("Number of Shanes: " + numberOfShanes);
console.log("The indexes of shanes: " + indexOfShanes);

console.log(teachers.join(""));

let numbers = [4, 7, 2, 3];
console.log(numbers);
numbers.sort();
console.log(numbers);

teachers.sort();
console.log(teachers);
numbers.reverse();
console.log(numbers);
teachers.reverse();
console.log(teachers);

let course = {
  name: "Javascript Fundamentals",
  awesome: true,
  teacherList: teachers,
};

let school = {
  name: "the place we go",
  courses: course,
};

console.log(course.awesome);
console.log(course.name);
console.log(course.teacherList);

let x = "courses";
console.log(school.courses);
console.log(school["courses"]);

let course2 = {
  name: "JavaScript Applications",
  awesome: true,
  teachers: ["Assaf", "Shane"],
  students: [
    {
      name: "Steve",
      computer: {
        OS: "Linux",
        type: "laptop",
      },
    },
  ],
};

let course3 = course2;
course2.name = "New Course Name";

console.log(course2.name);
console.log(course2.students[0].computer.OS);

course2.time = 2;
console.log(course2.time);

delete course2.time;
console.log(course2.time);

console.log("Course 3 name: " + course3.name);

course4 = course2;
course4.name = "whoah";
course5 = course2;
console.log(course4 === course5);

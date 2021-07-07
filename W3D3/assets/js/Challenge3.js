function outer() {
  let a = "This is the A string!";
  let b = {
    name: "The B object!",
  };

  console.log("a in the outer function: ");
  console.log(a);
  console.log("b in the outer function");
  console.log(b);

  function inner(a, b) {
    a = "Updated inside the inner!";
    b = {
      newProperty: "This property is in the inner!",
    };
    console.log(newProperty);
    b.extraNewProperty = "this is even newer!";
    console.log("a inside the inner function: " + a);
    console.log("b inside the inner function: ");
    console.log(b);
  }

  inner(a, b);
  console.log("a after the inner execution: " + a);
  console.log("b after the inner execution:");
  console.log(b);
}

outer();

function outerFunction() {
  let data = Array.from({ length: 1000000 }, (_, i) => i + 1);

  function innerFunction() {
    // Use the data array here
    console.log(data[0]);
  }

  // Release the reference to the data array
  data = null;

  return innerFunction;
}

const myFunction = outerFunction();
myFunction();

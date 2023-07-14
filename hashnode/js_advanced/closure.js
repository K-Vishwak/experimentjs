// Closure.
const counter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

const count = counter();
count();
count();
count();
count();

// Closure with params.
const multiply = (num) => {
  return (x) => {
    console.log(num * x);
  };
};

const multi = multiply(3);
multi(4);
multi(5);

// Closure with private variables.
const createPerson = (name, age) => {
  let _name = name;
  let _age = age;
  return {
    getName: () => _name,
    getAge: () => _age,
    setAge: (sage) => (_age = sage),
  };
};
const person = createPerson("John", 30);
console.log(person.getAge());

// Closure in loops.
// for (let i = 0; i <= 5; i++) {
//   // used var will have function scope.Hence, shared across all closures.
//   setTimeout(() => {
//     // if we use let. let will have block scope.
//     console.log(i);
//   }, i * 1000);
// }

//Closure with event listeners.
function addClickHandlers() {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      console.log(`Button ${i} clicked`);
    });
  }
}

// addClickHandlers();
// by the time user clicks on button. same array value printed because event listener is a closure and i becomes the length of the array.

function addClickHandlers() {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    (function (index) {
      button.addEventListener("click", function () {
        console.log(`Button ${index} clicked`);
      });
    })(i); // IIFE fix this issue.
  }
}
// addClickHandlers();

// Closure with timers.
function countdown(seconds) {
  let timerId;
  function tick() {
    if (seconds > 0) {
      console.log(seconds);
      seconds--;
    } else {
      clearInterval(timerId);
    }
  }
  timerId = setInterval(tick, 1000);
}

// countdown(5);

// Closure with variable shadowing.
const createCounter = () => {
  let count = 0;
  return {
    getCount: () => count,
    increment: () => count++,
    reset: () => {
      count = 0;
    },
  };
};

const counter2 = createCounter();
console.log(counter2.getCount());
counter2.increment();
console.log(counter2.getCount());
counter2.reset();

// Closure in recursion.

const countDown1 = (n) => {
  if (n <= 0) console.log("Done!");
  else {
    console.log(n);
    countDown1(n - 1);
  }
};

countDown1(3);

// Closure with Currying.
const add = (x) => (y) => x + y;

const add5 = add(5);
console.log(add5(3));
console.log(add5(7));

const add6 = add(6);
console.log(add6(3));
console.log(add6(7));

// Closure with generators.

function* counter3() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const count3 = counter3();
console.log(count3.next().value);
console.log(count3.next().value);
console.log(count3.next().value);

//memory leak.
// Closures are created in a way that they retain references to objects that are no longer needed, preventing the garbage collector from reclaiming the memory they occupy.

// one common way is: Event listeners added to DOM nodes using closure which captures objects of parent scope.
function attachEventListener(element) {
  const message = "Hello, World!";
  element.addEventListener("click", function () {
    console.log(message); // message is captured by each of the closure causese memory leak.
  });
}

// to avoid this:
function attachEventListener(element) {
  const message = "Hello, World!";
  const listener = function () {
    console.log(message);
  };
  element.addEventListener("click", listener);
  return function () {
    element.removeEventListener("click", listener);
  };
}

const removeListener = attachEventListener(someElement);
// later, when the event listener is no longer needed:
removeListener();

// another example:

function setup() {
  const button = document.getElementById("button");
  button.addEventListener("click", function () {
    console.log("Button clicked"); // this function inside even listener created each time user clicks and retains references of button and any parent objects created.
  });
}

// to avoid this:Define event listener function separately and call.
function handleClick() {
  console.log("Button clicked");
}

function setup() {
  const button = document.getElementById("button");
  button.addEventListener("click", handleClick);
}

// another example:

function setup() {
  const elements = document.getElementsByTagName("button");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
      console.log("Button " + i + " clicked"); // i value will be elements.length is being displayed each button click.
    });
  }
}

// solution for this:
function handleClick(i) {
  return function () {
    // i will become unique for each listener.
    console.log("Button " + i + " clicked");
  };
}

function setup() {
  const elements = document.getElementsByTagName("button");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", handleClick(i));
  }
}

// another memory leak:
function startTimer() {
  let count = 0;
  setInterval(function () {
    console.log(count++);
  }, 1000);
}
// this will create many closures with startTimer function of closure.
// we can avoid as:
function tick() {
  let count = 0;
  return function () {
    console.log(count++);
  };
}

function startTimer() {
  const callback = tick();
  setInterval(callback, 1000);
}

// This creates a single closure that is reused for each interval, rather than creating a new closure every time.

// let i;

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);

// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);

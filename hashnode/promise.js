// const promise = new Promise((resolve, reject) => {
//   //   resolve("Resolved Successfully!");
//   reject("Rejected");
// });

// promise.then((data) => console.log(data));
// promise.catch((error) => console.error(error));

// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
// const resolvePromise = Promise.reject("Rejected");
// resolvePromise.catch((data) => console.log(data));

// const promise1 = Promise.resolve("Promise 1");
// const promise2 = Promise.resolve("Promise 2");
// const promise3 = Promise.resolve("Promise 3");

// Promise.all([promise1, promise2, promise3]).then((results) =>
//   console.log(results)
// );

const promise1 = new Promise((resolve) =>
  setTimeout(resolve, "Promise1", 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, "Promise 2", 500)
);

Promise.race([promise1, promise2]).then((data) => console.log(data));

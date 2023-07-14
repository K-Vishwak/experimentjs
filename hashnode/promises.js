function getUserName(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (userId === 1) {
        resolve("John");
      } else if (userId === 2) {
        resolve("Jane");
      } else {
        reject("Invalid User ID");
      }
    }, 1000);
  });
}

function getPosts() {
  return new Promise(function (resolve, reject) {
    const success = true;
    if (success) {
      resolve("Posted");
    } else {
      reject("Not Posted");
    }
  });
}

// getUserName(2)
//   .then(function (name) {
//     console.log("user name: " + name);
//     return getPosts(); // Chaining promises.
//   })
//   .then(function (name) {
//     console.log("user name: " + name);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// Using async and await.

async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// getUserData();

function wait(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`waited for ${time}s`);
    }, time);
  });
}

async function waitFor2Secs() {
  const result = await wait(2000);
  return result;
}

// waitFor2Secs().then((result) => console.log(result));
// wait(2000).then((result) => console.log(result));

// const promise1 = Promise.reject("Hello");
// const promise2 = Promise.reject("World");
// const promise3 = Promise.reject("!");

// Promise.any([promise1, promise2, promise3])
//   .then((results) => console.log("Success:" + results))
//   .catch((error) => console.log("Error:" + error));

async function myAsyncFunction() {
  throw new Error("Async error");
}

myAsyncFunction().catch((error) => {
  console.log(error.message);
});

const fsPromise = require("fs/promises");

fsPromise
  .readFile("./greet.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

async function readFile() {
  try {
    const data = await fsPromise.readFile("greet.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();

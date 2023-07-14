function delay(ms) {
  return new Promise((resolve) => resolve);
}

async function foo() {
  console.log("foo start");
  const prom = await delay(2000);
  prom.then(() => console.log("prom"));
  console.log("foo end");
}

async function bar() {
  console.log("bar start");
  await foo();
  console.log("bar end");
}

console.log("start");
Promise.resolve(() => resolve("Prom")).then((data) => console.log(data));
bar();
console.log("end");

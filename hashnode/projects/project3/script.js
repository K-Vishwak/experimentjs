const first = document.getElementById("first");
const second = document.getElementById("second");

first.addEventListener("mouseover", () => {
  let r = document.querySelector(":root");
  r.style.setProperty("--blue", "yellow");
});

second.addEventListener("mouseover", () => {
  let r = document.querySelector(":root");
  r.style.setProperty("--black", "pink");
});

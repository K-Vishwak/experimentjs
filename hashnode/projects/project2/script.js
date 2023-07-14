const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const number = document.getElementById("size_number");

nextButton.addEventListener("click", () => {
  number.max = 4;
  const list = document.querySelectorAll(".active");
  const wholeList = document.querySelectorAll(".circle");
  wholeList[list.length] && wholeList[list.length].classList.add("active"); //12
  if (list.length === wholeList.length - 1) {
    nextButton.disabled = true;
  }
  if (list.length === 1) {
    prevButton.disabled = false;
  }
  applyWidth();
});

prevButton.addEventListener("click", () => {
  const list = document.querySelectorAll(".active");
  const wholeList = document.querySelectorAll(".circle");
  list.length > 1 && list[list.length - 1].classList.remove("active"); //11
  if (list.length === 2) {
    prevButton.disabled = true;
  }
  if (list.length === wholeList.length) {
    nextButton.disabled = false;
  }
  applyWidth();
});

function applyWidth() {
  const list = document.querySelectorAll(".active");
  const wholeList = document.querySelectorAll(".circle");
  const progress = document.getElementById("progress");
  progress.style.width =
    ((list.length - 1) / (wholeList.length - 1)) * 100 + "%";
}

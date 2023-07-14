const numMod = 7 % 2;

const byNum = Math.floor(7 / 2);

const pattern = ["*", " ", " ", " ", " ", " ", " "];

if (numMod === 1) {
  for (let i = 0; i < pattern.length; i++) {
    console.log(pattern.join(""));
    if (byNum > i) {
      pattern.unshift(" ");
      pattern.pop();
    } else {
      if (numMod === 0 && byNum === i) {
        console.log(pattern.join(""));
      }
      pattern.shift();
      pattern.push(" ");
    }
  }
}

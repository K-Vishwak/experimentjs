// create month object.
const monthObject = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

// Get days in month - fetch last day.
const daysInMonth = (value) =>
  new Date(new Date().getFullYear(), monthObject[value], 0).getDate();

// write into table.
function onLoad() {
  const table = document.getElementById("table");
  const tr = document.createElement("tr");
  for (let i = 1; i <= daysInMonth("January"); i++) {
    // create new tr after 7 items.
    if (i % 7 === 0) {
      const newTr = "tr" + i;
      newTr = document.createElement("tr");
    }
  }
}

function updateTable() {
  const td = document.createElement("td");
  td.innerText = i;
  tr.appendChild(td);
  table.appendChild(tr);
}

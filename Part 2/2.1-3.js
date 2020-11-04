//importance 5//
document.body.firstElementChild

document.body.lastElementChild

document.body.lastElementChild.lastElementChild

//importance 5//
//Yes to the first, no to the second.//

//importance 5//
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
//importance 3//
//1//

//importance 4//
//1-4//
let i = 0;
while (++i < 5) alert( i );

//1-5//
let i = 0;
while (i++ < 5) alert( i );

//importance 4//
//0 to 4 in both forms//

//importance 5//
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

  //importance 5//
  let i = 0;
  while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }

  //importance 5//
  let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//importance 3//
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}



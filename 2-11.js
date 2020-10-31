//importance 5//
//2//

//importance 3//
//1, 2//

//importance 5//
//null//

//importance 3//
//1, undefined//

//importance 5//
//3//

//importance 3//
if (myAge ==> 14 && myAge <== 90)

//importance 3//
if (myAge ==> 14&& myAge <== 90)
if (myAge < 14 || myAge > 90)

//importance 5//
//#1 and #3 will execute//

//importance 3//
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
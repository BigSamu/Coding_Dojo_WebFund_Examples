function factorialForLoop(num) {
  if (num == 0) return 1;
  else if (num < 0) return 'Negative numbers are not accepted as parameters';
  else {
    var result = 1;
    for (var i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

function factorialWhileLoop(num) {
  if (num == 0) return 1;
  else if (num < 0) return 'Negative numbers are not accepted as parameters';
  else {
    var result = 1;
    var i = 1;
    while (i <= num) {
      result *= i;
      i++;
    }
    return result;
  }
}

// Driver Code

console.log('\nTESTING FACTORIAL WITH FOR LOOP');
var test_1 = factorialForLoop(5);
console.log(test_1);
var test_2 = factorialForLoop(0);
console.log(test_2);
var test_3 = factorialForLoop(-1);
console.log(test_3);

console.log('\nTESTING FACTORIAL WITH WHILE LOOP');
var test_4 = factorialForLoop(5);
console.log(test_4);
var test_5 = factorialForLoop(0);
console.log(test_5);
var test_6 = factorialForLoop(-1);
console.log(test_6);

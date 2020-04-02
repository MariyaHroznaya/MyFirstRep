//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
  const a = 3,
    b = 2;

  if (a + b < 4) {
    console.log('wrong');
  } else {
    console.log('too much');
  }
}


//Task execution

const a = 3,
  b = 2;
result = (a + b < 4) ? 'Wrong' : 'Too much';
console.log(result);

/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */
{
  const x = 3;
  const y = 7;
}


//Task1 execution

const x = 3;
const y = 7;

if (x < 10 && y < 10) {
  console.log(z = x + y);
} else {
  console.log(z = x * y);
}

// Task2 execution

const x = 3;
const y = 7;

let z;

z = x > 10 && y > 10 ? x + y : x * y

console.log(z);


/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */

const x = 3;
const y = 7;
const operator = "add";


// Task execution

{
  const x = 3;
  const y = 7;
  const operator = "add";

  let o = operator

  switch (o) {

    case "add":
      console.log(x + y);
      break;

    case "substract":
      console.log(x - y);
      break;

    case "multiply":
      console.log(x * y);
      break;

    case "divide":
      console.log(x / y);
      break;

    default:
      console.log('This is stupid!')

  }

}

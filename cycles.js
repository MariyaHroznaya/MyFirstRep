/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */



// Task execution

{
    function calculateDiscount(redemption) {

        switch (true) {
            case (redemption <= 350):
                return (0)

            case (redemption >= 350 && redemption <= 1350):
                return (15);

            case (redemption >= 1351 && redemption <= 2700):
                return (30);

            case (redemption >= 2701 && redemption <= 6500):
                return (45);

        }


        return discount;

    }

    console.log(calculateDiscount(1300));

}


/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */


// Task execution for 'For'

const n = 10; //10! = 3628800 
let result = 1;
for (i = n; i > 1; i--) {
    result = result * i;
}
console.log(result);


// Task execution for 'While'

const n = 10;
let result = 1;
let i = n
while (i != 1) {

    result = result * i;
    i--;

    console.log(result);
}

//Task execution for 'do...While'

const n = 10;
let result = 1;
let i = n

do {


    result = result * i;
    i--;
}
while (i != 1)

console.log(result);



/**
 * return concatenated string from an array of substring
 */


// Task execution

const substr = ["I", " love", " JS"];

console.log(substr.join(''));






/**
 * calculate a total of income of certain person
 */


//Task execution

{
    const personIncomes = {
        salary: 1985,
        rent: -600,
        interestOnDeposit: 250,
        otherExpences: -300
    };

    let result = 0;
    for (let total in personIncomes) {
        result += personIncomes[total]
    }

    console.log(result);
}









// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [9, 7, 1, 4, 6, 8, 4, 9, 0, 1, 4, 7, 1, 7, 2, 3]
const mystery7 = [7, 4, 5, 1, 0, 3, 9, 9, 5, 7]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6, mystery7]

const cardChecker = array => {
    let sum = [];
    let popped = array.slice(0,-1);
    let newArr = [];
    for (i = popped.length - 1; i >= 0; i--) {
        newArr.push(popped[i]);       
    }
    //console.log(newArr);
    for (let i = 0; i < newArr.length; i++) { //iterate and multiply every other num by 2 
        let index = i % 2;
        let remainder = ''
        if(index === 0) {
            remainder = true;
        } else if (index !== 0) {
            remainder = false;
        }
        if (((newArr[i] * 2) > 9) && (remainder === true)) {
            sum.push((newArr[i] * 2)  - 9)  ;
        } else if (((newArr[i] * 2) < 10) && (remainder === true)){
            sum.push(newArr[i] * 2);
        }else if (remainder === false) {
            sum.push(newArr[i]);
        }
    }   
    const getSum = (total,num) => {
        return total + num;
    }
    sum.push(array[array.length-1])
    let summed = sum.reduce(getSum, 0);

    if ((summed % 10) === 0) {
        return true;
    } else {
        return false
    }
        
};

const findInvalidCards = nest => {
    let invalidCards = [];
    let validCards = [];
    for (let i = 0; i < nest.length; i++){
        const check = cardChecker(nest[i]);
    if (check === false) {
        invalidCards.push(nest[i])
    } else if (check === true) {
        validCards.push(nest[i]);
    }
  }
  return invalidCards;
}

const idInvalidCardCompanies = array => {
    invalidCompanies = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === 3) {
            invalidCompanies.push('AMEX: ' + array[i]);
            //console.log(array[j])
        } else if (array[i][0] === 4) {
            invalidCompanies.push('VISA: ' + array[i]);
            //console.log(array[j])
        } else if (array[i][0] === 5) {
            invalidCompanies.push('MASTERCARD: ' + array[i]);
            //console.log(array[j])
        } else if (array[i][0] === 6) {
            invalidCompanies.push('DISCOVER: ' + array[i]);
            //console.log(array[j])
        } else {
            invalidCompanies.push('Unknown company: ' + array[i])
        }
    } 
    return invalidCompanies;
}

const randNum1 = () => {
    let arr = [];
    for (let i = 0; i < 50; i++) {
        newArr = [];
        let num = Math.floor(Math.random() * 10000000000);
        let numstring = Array.of(num);
        for (let j = 0; j < numstring.length; j++) {
            newArr.push(numstring[j]);
        }
        arr.push(newArr);
    }
    return arr;
    
};

const batch2 = randNum1();

//const test = cardChecker(invalid1); //easier logging/should output false
//const test2 = cardChecker(valid1); //output true
//const test3 = cardChecker(mystery1); //outputfalse
const invalids = findInvalidCards(batch); //saves invalid numbers to a variable
//const invalids2 = findInvalidCards(batch2);
const companies = idInvalidCardCompanies(invalids);
//const companies2 = idInvalidCardCompanies(invalids2);
//console.log(test);
//console.log(test2);
//console.log(test3);
console.log(companies);
//console.log(companies2);
//cd Challenges/credit-card-checker-starter
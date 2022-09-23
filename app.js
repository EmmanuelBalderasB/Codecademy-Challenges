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
const batch2 = [invalid1, invalid2, invalid3, invalid4, invalid5];

const cardChecker = {
    check(array) {
        let sliced = array.slice(0,-1); //creates a new array without the last number on the card
        let flipped = []; 
        let multiplied = [];
        for(let i = sliced.length - 1; i >= 0; i--) { //reverses the index order of sliced and pushes it into a new array
            flipped.push(sliced[i])
        }
        for (let i = 0; i < flipped.length; i++) { //iterates through flipped array
            let index = i % 2; //takes the current index and checks if if it's a pair or odd index num
            let remainder = '' 
            if (index === 0) {  //if it's pair sets remainder to true; else to false
                remainder = true;
            } else if (index !== 0) {
                remainder = false;
            }
            if ((!index) && ((flipped[i] * 2) > 9)) {    //if it's an odd index and multiplied * 2 is > 9, then push into array substracting 9 from the total of the multiplication
                multiplied.push((flipped[i] * 2) - 9);
            } else if ((!index) && ((flipped[i] * 2) <= 9)) {    //if it's an odd index and multiplied * 2 is <= 9, push into array total of the multiplication
                multiplied.push(flipped[i] * 2)
            } else if (index) { //if it's an even index, push the value of th eindex as is
                multiplied.push(flipped[i]);
            }
        }
        const last = array[array.length - 1] //locates again the last index of the original array;
        multiplied.push(last); //pushes the above value back to the multiplied array
        console.log(multiplied)
        let sum = multiplied.reduce((total, num) => { //sums all the array values and returns total
            return total + num;
        })
        const byTen = sum % 10; //checks if the total sum is divisible by ten, if true it's a valid card; else it's invalid
        if (byTen === 0) {
            return true; 
        } else {
            return false;
        }
    },
    findInvalid(nest) {
        let invalid = [];
        let valid = [];
        return new Promise((resolve, reject) => {
                for (let i = 0; i < nest.length; i++) {
                    const checked = cardChecker.check(nest[i]);
                    if (checked) {
                        valid.push(nest[i]);
                    } else if (!checked) {
                        invalid.push(nest[i]);
                    }
                }
                if (invalid.length >= 1) {
                    resolve(invalid);
                } else {
                    reject['No invalid cards.']
                }
            
        })
        
    },
    idInvalidCompanies(arr) {
        return new Promise((resolve, reject) => {
                let cards = [];
                const map = {
                    '3': 'AMEX',
                    '4': 'VISA',
                    '5': 'MASTERCARD',
                    '6': 'DISCOVERY',
                }
                for (const card of arr) {
                    cards.push(map[card[0]] +' | ' + card + '\n');
                }
                if (cards.length >= 1) {
                    resolve('The invalid cards are '  
                    + cards)
                }
            
        })
    }
};
const test = cardChecker.idInvalidCompanies(batch2);
module.exports.cardChecker = cardChecker
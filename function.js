function oddToEven(params) {
    let evenSum = 0;
    let evenArray = [];
    let oddSum = 0;
    for(let number of params){
        if(number % 2 === 0){
            evenSum = number + evenSum ;
            evenArray.push(number);
        }
        else{
            oddSum = number + oddSum;
        }
    }
    return evenArray;
}
const numbers = [2, 5, 4, 6, 5];
const total = oddToEven(numbers);
console.log(total)

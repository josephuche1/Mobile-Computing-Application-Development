// Find the even numbers in an array
const findEvenNumbers = (arr) => {
    let evenNumbers = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;

}
const findEvenNumbers2 = (arr) => {
    return arr.filter((num) => num % 2 === 0);
}
let arr = [];
for(let j = 0; j < 1000000; j++) {
    arr.push(Math.floor(Math.random() * 200)); // get a random number between 0 and 200
}
let newArr = [...arr];

console.log("Array: "+ arr);
console.log();
console.log("New Array: " + newArr);
console.log();
console.log("Find Even numbers 1: " + findEvenNumbers(arr));
console.log();
console.log("Find Even numbers 2: " + findEvenNumbers2(arr));


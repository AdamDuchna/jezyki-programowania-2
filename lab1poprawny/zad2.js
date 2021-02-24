const numbers = [4, 10, 32, 1, 54, 43, 21, 43, 65, -43, 5];
var min=numbers[0]
var max=numbers[0]
for (let i = 0; i < numbers.length; i++){
if (min > numbers[i] ) {
    min=numbers[i];
}
if (max < numbers[i] ) {
    max=numbers[i];
}
console.log(numbers[i]);}
console.log(min,max)
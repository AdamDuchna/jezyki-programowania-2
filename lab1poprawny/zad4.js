const numbers = [4, 10, 32, 1, 54, 43, 21, 43, 65, -43, 5];
let pom;
for (let i = 0; i < numbers.length/2; i++){
pom=numbers[i];
numbers[i]=numbers[numbers.length - (i+1)];
numbers[numbers.length - (i+1)]=pom;

}
console.log(numbers)
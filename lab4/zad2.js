const array=[ 1, -3, 6, -2, 9]
const score=array.reduce((previousValue,currentValue) => {
    if (currentValue>0){
    return [...previousValue,currentValue*currentValue];
    }
    else
    return [...previousValue]
},[]);
console.log(score)
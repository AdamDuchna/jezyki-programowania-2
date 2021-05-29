const array=[ 1, 3, 6, 2, 9]
const score=array.reduce((previousValue,currentValue,index) => {
    console.log(index,':',currentValue)
    return currentValue

},{});

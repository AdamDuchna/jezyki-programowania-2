const array=[ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
]
const score=array.reduce((acc,currentValue) => {
    acc[currentValue.id]={ id:currentValue.id, name:currentValue.name};
    return acc
},{});
console.log(score)

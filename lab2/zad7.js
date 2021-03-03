function removeIf(array){
    for ( let i = 0; i < array.length; i++){
        if( array[i] === null || array[i] > 0 || array[i] === "" || array[i] === undefined || Number.isNaN(array[i]) ){
            array.splice(i)
        }
    }
    return array
}

let a=[14,'lis','',null, -13, -2, 0]
console.log(removeIf(a))

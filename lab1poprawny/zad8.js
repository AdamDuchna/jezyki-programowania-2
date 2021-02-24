function amounts(array){
    let arrayOfAmmounts=[]
    for (let i = 0; i < array.length; i++){
        let current=array[i];
        let count=0
        for (let j = 0; j < array.length; j++){
            if (current==array[j]){
                count++;
            }
        }
        let object= { 'element':current,
            'count':count
    }
        arrayOfAmmounts.push(object )
    }
 return arrayOfAmmounts
}
console.log(amounts([4, 10, 32, 4, 54, 4, 21, 43, 65, -43, 5]))
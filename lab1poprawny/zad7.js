function mostAmount(array){
    let mostAmmount=0
    for (let i = 0; i < array.length; i++){
        let current=array[i];
        let count=0
        for (let j = 0; j < array.length; j++){
            if (current==array[j]){
                count++;
            }
        }
        if ( count > mostAmmount) {
            mostAmmount=count;
        }
    }
    return mostAmmount
}
console.log(mostAmount([4, 10, 32, 4, 54, 4, 21, 43, 65, -43, 5]))
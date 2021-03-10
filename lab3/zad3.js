function outer(){
    let number=4;

    function inner(number2){

        let score=number2+number
        return score;
    }
    return inner;
}

console.log(outer()(9))
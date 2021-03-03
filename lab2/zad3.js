function unequal(a,b,c) {
    let isTrue
    (a == b) && (a === b) ? isTrue='false' : (a == c) && (a === c) ? isTrue='false' : (b == c) && (b === c) ? isTrue='false' : isTrue='true' ;
    return isTrue
}

console.log(unequal(1,1,3))
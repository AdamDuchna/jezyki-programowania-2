function unequal(a,b,c) {
    ((a == b) and (a === b)) ? return false : ((a == c) and (a === c)) ? return false : ((b == c) and (b === c)) ? return false : return true ;

}

console.log(unequal(1,1,3))
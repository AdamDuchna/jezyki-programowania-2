function NWD(a,b){
    if(b!=0){
        return NWD(b,a % b)
    }
    else{
        return a 
    }
}
console.log(NWD(6,78))
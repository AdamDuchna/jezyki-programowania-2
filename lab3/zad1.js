function canFormTriange(a,b,c){
    if(a+b>=c && a+c>=b && b+c>=a)
        return true
    else
        return false
}
console.log(canFormTriange(2,3,5))
function x(){
    return "Hi"
}
function callFunc(func){

    return func()
}
console.log(callFunc(x))
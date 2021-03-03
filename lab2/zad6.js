function flatten(array){
let flattened=[]
for ( let i = 0; i < array.length; i++){
flattened+=[...array[i],'']

}
return flattened
}
let a = [ [1,2,3], [4,5,6] ]
console.log(flatten(a))

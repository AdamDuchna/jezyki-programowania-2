const tablica = [1,3,5,1];
function Palindrom(tab){
    let size=tab.length-1
    for (let i = 0; i <= parseInt(size/2); i++){
        if (tab[i] != tab[(size-i)]){
          return false
        }
    }
    return true 
}
console.log(Palindrom(tablica))

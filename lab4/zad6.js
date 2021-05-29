
function serach(arg){
const lista=['Ola','Ala','Jaś']
const wynik=lista.reduce((acc,currentValue) => {
    if( currentValue === arg){
        return currentValue
    }
    else{
        return acc
    }

  },undefined);
  return wynik
}
console.log(serach('Jaś'))
  
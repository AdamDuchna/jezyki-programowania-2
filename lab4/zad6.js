const lista=['Ola','Ala','Jaś']

const wynik=lista.reduce((acc,currentValue) => {
    if( currentValue === 'Ala'){
        return currentValue
    }
    else{
        return acc
    }

  },'');
  console.log(wynik);
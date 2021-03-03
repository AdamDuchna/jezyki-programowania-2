function isStringEmpty(data){
    if (typeof data === 'string' || data instanceof String){
        console.log('String')
        if ( data === ''){
            console.log('Pusty')
        }
        else {
            console.log('Niepusty')
        }
    }
    else{

    
    console.log('Nie String')
    }
}
isStringEmpty('')
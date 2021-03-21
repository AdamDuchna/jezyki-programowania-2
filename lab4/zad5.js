const wishlist = [   
    {  
        name: 'Czajnik',  
        netto: 100  
    },  
    {  
        name: 'Lodówka',  
        netto: 1300  
    },  
    {  
        name: 'Mikrofalówka',  
        netto: 340  
    },  
    {  
        name: 'Mikser',  
        netto: 120  
    },  
    {  
        name: 'Piekarnik',  
        netto: 2100  
    }  
]
//pkt 1
const score=wishlist.reduce((acc,currentValue) => {
    return acc+currentValue['netto']*1.23
},0);
console.log(score)
//pkt 2
const score2=wishlist.reduce((acc,currentValue) => {
    return [...acc,currentValue['netto']]
},[]);
console.log(score2);
//pkt 3
const score3=wishlist.reduce((acc,currentValue) => {
   return [...acc,currentValue.name +' : '+currentValue.netto]
},[]);
console.log(score3);
//pkt4
const score4=wishlist.map((currentValue) => {
 return currentValue.name +' : '+currentValue.netto
},[]);
console.log(score4);
//pkt5
const score5=wishlist.reduce((acc,currentValue) => {
    if(currentValue.netto < 500){
        return [...acc,currentValue]
    }
    else{
        return [...acc]
    }
  },[]);
  console.log(score5);

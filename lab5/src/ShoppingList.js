const listaZakupow = [{
    produkt: "chleb",
    typ: "pieczywo",
    ilosc: 2,
    cena: 3.6,
    jednostka: "sztuk"
},
{
    produkt: "jabłka",
    typ: "owoce",
    ilosc: 6,
    cena: 2.5,
    jednostka: "kg"
},
{
    produkt: "mleko",
    typ: "nabiał",
    ilosc: 3,
    cena: 2.9,
    jednostka: "litry"
},
{
    produkt: "kawa",
    typ: "napoje",
    ilosc: 1,
    cena: 24,
    jednostka: "sztuk"
},
{
    produkt: "kefir",
    typ: "nabiał",
    ilosc: 2,
    cena: 2.4,
    jednostka: "sztuk"
},
{
    produkt: "woda",
    typ: "napoje",
    ilosc: 6,
    cena: 1.9,
    jednostka: "sztuk"
},
{
    produkt: "marchewka",
    typ: "warzywa",
    ilosc: 2,
    cena: 4,
    jednostka: "kg"
},
{
    produkt: "banan",
    typ: "owoce",
    ilosc: 1,
    cena: 4.6,
    jednostka: "kg"
},
{
    produkt: "herbata",
    typ: "napoje",
    ilosc: 2,
    cena: 8,
    jednostka: "sztuk"
},
{
    produkt: "ziemniaki",
    typ: "warzywa",
    ilosc: 5,
    cena: 3.5,
    jednostka: "kg"
},
{
    produkt: "jogurt",
    typ: "nabiał",
    ilosc: 8,
    cena: 1.4,
    jednostka: "sztuk"
}
]
//pkt1
const zmieniona=listaZakupow.reduce((acc,currentValue) => {
    acc[currentValue.produkt]={currentValue}
    return acc
},[]);
console.log(zmieniona)
//pkt2
const zwrocVal=listaZakupow.reduce((acc,currentValue) => {
    if(currentValue.typ == 'nabiał'){
        return acc+currentValue.cena
    }
    else {
        return acc
    }
},0);
console.log(zwrocVal)
//pkt3
const listaKg=listaZakupow.reduce((acc,currentValue) => {
    if(currentValue.jednostka == 'kg'){
        return [...acc,currentValue.produkt]
    }
    else {
        return acc
    }
},[]);
console.log(listaKg.sort())
//pkt4
function find(klucz){
    const ofType=listaZakupow.reduce((acc,currentValue) => {
        if(currentValue.typ == klucz && (currentValue.ilosc*currentValue.cena)<10 ){
            return [...acc,currentValue]
        }
        else {
            return acc
        }
    },[]);
    return ofType.sort()
}
console.log(find('warzywa'))
//pkt5
const units=listaZakupow.reduce((acc,currentValue) => {
    if(currentValue.jednostka == 'sztuk' ){
        return [...acc,currentValue.produkt]
    }
    else {
        return acc
    }
},[]);
console.log(units)
//pkt6 
const zestaw=listaZakupow.reduce((acc,currentValue) => {
if(acc[currentValue.typ] == undefined ){acc[currentValue.typ]=[]}
acc[currentValue.typ].push(currentValue.produkt+' - '+currentValue.jednostka+":"+currentValue.ilosc)
acc[currentValue.typ].sort()
 return acc
},[]);
console.log(zestaw)

//pkt7
function szukaj(){
const priciest=listaZakupow.reduce((acc,currentValue) => {
    if(acc<currentValue.cena){
        return currentValue.cena*currentValue.ilosc
    }
    else {
        return acc
    }  
},0);
const ceny=listaZakupow.reduce((acc,currentValue) => {
    if(currentValue.cena*currentValue.ilosc<priciest){acc[currentValue.produkt]={'cena':currentValue.cena*currentValue.ilosc}}
    return acc
},[]);
console.log(priciest)
console.log(ceny)
}
szukaj()


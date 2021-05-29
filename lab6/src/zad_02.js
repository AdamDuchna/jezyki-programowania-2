const lp3= require('./toplist');
const lodash = require('lodash');
//zad1
const wynik= lodash.filter(lp3,['author','Queen'])
//console.log(wynik)
//zad2
const wynik2= lodash.filter(lp3,function(o){ if(o.author=='Pink Floyd' && o.change >=10) return o})
//console.log(wynik2)
//zad3
const wynik3=lodash.chain(lp3).orderBy(['change'],['asc']).dropRight(4).value()
//console.log(wynik3)
//zad4
const wynik4=lodash.take(lp3,1)
//console.log(lodash.flatMap(wynik4,function(o){ return {'author': o.author, 'song': o.song}}))
//zad5
console.log
function search(arr){
    const resl=lodash.filter(arr,(n)=>{if(typeof n  == 'number') return n})

    const wynik5=lodash.filter(lp3,function(o){
    resl.forEach((el)=>{
        if(el == o.place){console.log(o)
            return o}})
        })

    return wynik5
}
search(['lis',1])

//zad6
function getRand(n, min, max){
    const losowa=Math.floor(Math.random()*(max-min)+min)
    const piosenka=lodash.find(lp3,function(o){ if(o.place == losowa) return o})
    return lodash.repeat(piosenka.song,n)
}
console.log(getRand(3,2,8))

//zad7
function printWait(){
    const firstTen= lodash.takeRight(lp3,10)
    firstTen.forEach((x)=>{
        lodash.delay(function(text){console.log(text)},5000,x)
    })
}
printWait()

//zad8
const wynik8=lodash.filter(lp3,function(o){ if(o.change<0) return o})
//console.log(wynik8)
//zad9
const wynik9=lodash.keyBy(lp3,function(o){ return o.song})
//console.log(wynik9)
//zad10
const wynik10=lodash.groupBy(lp3,function(o){ return o.author})
//console.log(wynik10)
//zad11
const wynik11=lodash.countBy(lp3,function(o){ return o.author})
//console.log(wynik11)
//zad12
const wynik12=lodash.orderBy(lp3,'change','desc')
//console.log(lodash.head(wynik12))
//console.log(lodash.last(wynik12))
const lp3= require('./toplist');
const lodash = require('lodash');
//zad1
const wynik= lodash.filter(lp3,['author','Queen'])
console.log(wynik)
//zad2
const wynik2= lodash.filter(lp3,function(o) { if(o.author=='Pink Floyd' && o.change >=10) return o})
console.log(wynik2)
//zad3 ??
const wynik3= lodash
.chain(lp3)
.orderBy('change','desc');
console.log(wynik3)
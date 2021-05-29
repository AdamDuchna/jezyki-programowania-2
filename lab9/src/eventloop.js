'use strict';
// Zadanie 1.1. Dopisz do pomiędzy deklaracją funkcji helloWorld, a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    setTimeout(function(){
        console.log('Hello world!');
    },500)
}

//helloWorld()

//console.log('No, hello universe!');

// Zadanie 1.2. Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.
function itWelcomes(){
    setInterval(function(){console.log('Welcome')},1000)
}
//itWelcomes()

// Zadanie 1.3. Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. Podpowiedź: (użyj clearInterval)
function itWelcomesForAWhile(){
    var o = setInterval(function(){console.log('Welcome')},1000);
    setTimeout(function(){clearInterval(o);},5000)
}
//itWelcomesForAWhile()

// Zadanie 1.4. Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x milisekund i automatycznie zatrzyma się po upływie y milisekund. 
function itDoesStuff(todo,x,y){
    var h=setInterval(todo,x);
    setTimeout(() => {
        clearInterval(h)
    }, y);
}

//itDoesStuff(function(){console.log('hi')},3000,10000)
// Zadanie 1.5. 
/* Napisz funkcję:

//const poKolei = (fun1, fun2, cb) => { ... };                    
                        
taką, że:

    - jej dwoma pierwszymi argumentami są funkcje asynchroniczne – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie poKolei
    - funkcja poKolei powinna zapewnić, że fun2 wykona się zawsze po fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
    - trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez fun2
*/

   const f1= async function(n) {
        return new Promise(resolve=>{
            setTimeout(()=>{resolve(n+1)},1000)   
        })
    }
    const f2=async function(n) {
        return new Promise(resolve=>{
            setTimeout(()=>{resolve(n+2)},1000)   
        })
    }

  const cb = (x)=>{x.then((el)=>{console.log(el)})}

  const poKolei =  (fun1,fun2,callback,n)=> {
      const wart1= fun1(n)
      const toCallback=wart1.then((x)=>{return fun2(x)})
    
    return callback(toCallback)

  }
  

poKolei(f1,f2,cb,3)


// Zadanie do przećwiczenia: 

// Zmodyfikuj rozwiązanie zadania 1.5, używając mechanizmu async-await zamiast callbacków.

const poKoleiAwait =  async (fun1,fun2,n)=> {
    const wart1= await fun1(n)
    const wart2= await fun2(wart1) 
    console.log(wart2)

}
poKoleiAwait(f1,f2,3)
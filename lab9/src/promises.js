'use strict';
const axios= require("axios")

// 2.1 Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'.
const obietnica= new Promise(resolve=>{
    setTimeout(()=>{resolve("Udało się")},5000)
})
obietnica.then(x=>{console.log(x)})
// Jako callback niech wypisze zwrócony string w konsoli.

// 2.2 Zmodyfikuj powyższy kod tak, aby zamiast z sukcesem - promise zakończył się porażką i zwracał string 'Porażka'.
// Skorzystaj z then() aby obsłużyć błąd.
const obietnica2= new Promise((resolve,reject)=>{
    setTimeout(()=>{reject('Porażka')},5000)
})
obietnica2.then(x=>{console.log(x)},r=>{console.log(r)})

// 2.3 Zamiast then(), zmodyfikuj powyższy kod używając catch()
const obietnica3= new Promise((resolve,reject)=>{
    setTimeout(()=>{reject('Porażka')},5000)
})
obietnica3.catch(x=>{console.log(x)})

// 2.4 Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą).
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik w konsoli.
const multiplyAsync=(x,y)=>{
    return new Promise((resolve,reject)=>{
        if(typeof x != 'number' || typeof y != 'number') reject("Nie jest liczbą")
        else resolve(x*y)
    })
}
const wynik= multiplyAsync(3,5)
wynik.then(x=>{console.log(x)},err=>{console.log(err)})

// 2.5 Dołącz axios do projektu. Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts. 
// Jako pierwszy callback - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.

axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{console.log(response.headers,response.data)}).catch(err=>console.log(err))


/* 2.6 Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos.
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/
axios.post('https://jsonplaceholder.typicode.com/todos',{idUser: 10, title: "exxaexexeaaee", completed: true}).then(x=>{console.log("Dodano "+x.idUser)}).catch(console.log("błąd"))
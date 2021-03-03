'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

//isEquals(2, '2'); Zwraca A i D ponieważ przy porównaniu === różnią się one typem
//isEquals(null, undefined); Zwraca A i D ponieważ przy porównaniu === różnią się one typem
//isEquals(undefined, NaN); Zwraca B i D ponieważ undefined to wartośc liczbowa, a NaN już nie
//isEquals(['a', 'b', 'c'], ['b', 'c', 'd']) Zwraca B i D ponieważ są to 2 rózne listy
//isEquals(0, ''); Zwraca A i D ponieważ '' to pusty ciąg znaków
//isEquals('0', ''); Zwraca B i D ponieważ są to 2 rózne ciągi znaków
// isEquals(+0, -0); Zwraca A i C pomimo iż -0 i +0 są rozróznialne ze względu na to jak działa przyrównanie ===
//isEquals(0, false); Zwraca A i D , ponieważ obie wartości przetrzymują 0 ale jedna jest typu Boolean
//isEquals(0, 'false'); Zwraca B i D ponieważ drugi element to niepusty napis 
//isEquals([1, 2], '1,2'); Zwraca A i D ponieważ elementy mają takie same wartości ale jeden to tablica a drugi to string

!!false;
!!true;
!!undefined;
!!null;

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

//const person = {
//    firstName: 'Jan',
//    lastName: 'Kowalski'
//}

// console.log(person);
// person = {};
// console.log(person);
//Jest to obiekt typu słownik przechowujący stałą zawartość
//Można go wyswietlać, ale nie zmienić 

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }
// console.log(number);

//Przez to że część kodu jest zagnieżdzona to isnieją 2 rózne zmienne o tej samej nazwie

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// const arr = [1, 2];
// const newArr1 = [arr, 3, 4];
// console.log(newArr1);
// const newArr2 = [...arr, 3, 4];
// console.log(newArr2);

//W wyniku działania 1 częsci kodu tablica zostaje zagnieżdzona w innej, a w kolnejnym przypadku już nie

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// const word = 'react';
// const arrWord = [...word];
// console.log(arrWord);

//Napis jest tablicą znaków więc po użyciu ... zostaje rozbity na pojedyńcze elementy

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

//var hello = 'Hello world!';
//var result = hello / 2;
//result;
//Number.isNaN(result);
//Number.isNaN(hello);

//Program przechodzi ponieważ obie zmienne nie są liczbą

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

// var car = 'BMW';

// function showCar() {
//     car = 'Audi';
//     model = 'A5';
//     console.log('Great car!');
// }

// showCar();

// car;
// model;

//-------

// var name = 'Bryan';

//(function differentName() {
//     var name = 'Adam';
//     console.log(name);
// })();

// console.log(name);

//-------

// if (true) {
//     var a = 2;
//}
// console.log(a);

// if (true) {
//     const b = 2;
// }
// console.log(b);

//-------

// for (var i = 0; i < 10; i++) {
//    console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//    console.log(i);
//}
// console.log(i);

//-------

// var test = "var1";
// var test = "var2";

// let test2 = "let1";
// let test2 = "let2";


// Zmienna jest deklarowana globalnie a let/const istnieją tylko w miejsu gdzie są zakorzenienia
//Przez co 1 można wywołać wszędzie, a drugiej już nie


// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?
//Tryb ten eliminuje występowanie pewnych cichych błędów, blokuje możliwośc przywoływania nieopisanych zmiennych oraz czasem sprawia że czasem kod zwraca wynik szybciej 
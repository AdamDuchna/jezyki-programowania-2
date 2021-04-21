'use strict';
// 1.1 
// Co wyświetlą na ekranie poniższe wywołania?

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}

console.log(book.__proto__ === Object.prototype);
console.log(book.__proto__.__proto__ === null);

// 1.2. 
// Zastanów się, co należy wpisać w miejsce ..., tak aby każde wywołanie po odkomentowaniu zwróciło true.

const animals = ["dog", "cat", "rabbit", "hamster"];

 console.log(animals.__proto__ === Array.prototype);
 console.log(animals.__proto__.__proto__ === Object.prototype);
 console.log(animals.__proto__.__proto__.__proto__ === null);

// 1.3. 
// Co zostanie wyświetlone na ekranie w poniższym przykładzie? Wyjaśnij dlaczego.

function Animal(animal) {
    this.animal = animal;
}

var dog = new Animal('dog');
var cat = new Animal('cat');
dog.whatIs = function () {
    console.log("It's a " + this.animal);
}

 console.log(dog.__proto__ === Animal.prototype);
 console.log(dog.__proto__ === cat.__proto__);

// 1.4.
// Stwórz obiekt za pomocą funkcji CreateMovie (zawierający klucze bez wartości: director, title, year) wykorzystując słówko `this`.
// Jeśli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmować wartość "unknown".

function CreateMovie(director, title, year="unknown"){
    this.director=director
    this.title=title
    this.year=year
}


// Następnie nie zmieniając implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracającą true/false w zależności od tego, czy podany film jest młodszy/starszy nić rok 2000.
// * print - wyświetlającą: "director: title (year)"
CreateMovie.prototype.isOlder= function(){
    if(this.year<2000) return true
    else return false
}
CreateMovie.prototype.print= function(){
    print(this.director,": ",title,"(",year,")")
}


// 1.5.
// Uzupełnij poniższy konstruktor o inicjalizację name, type i funkcję printInstrument. Funkcja printInstrument powinna być współdzielona między wszystkie utworzone obiekty.

function CreateInstrument(name, type) {
    const instrument = Object.create({
         name: name,
         type: type,
         printInstrument(){
             console.log(name,type)
         }
    });


    return instrument;
}
let instrument1=CreateInstrument("gitara","strunowy")
instrument1.printInstrument()
// 1.6. 
// Uzupełnij poniższy konstruktor, który tworzy obiekt dziedziczący po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcję setStrings(number), która ustala liczbę strun w instrumencie (ta funkcja też powinna być współdzielona). NewStringInstrument powinien mieć też dostęp do funkcji, która znajduje się w Instrument.
// Podpowiedź: aby zmienić wartość zmiennej __proto__ należy użyć - Object.setPrototypeOf(object, prototype) - należy użyć tej funkcji dwa razy w tym rozwiązaniu. 

 function CreateStringedInstrument(name, type, stringsCount) {
     const newStringedInstrument = Object.create({}
        CreateInstrument.call(name,type),
        stringsCount:stringsCount,

    })

     return newStringedInstrument;
 }


// const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
// stringedInstrument.printInstrument();
// stringedInstrument.setStrings(3);


// 1.7. 
// Przeanalizuj poniższy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: " + name + ", typ: " + type);
}
function StringedInstrument(stringsCount, name, type) {
    Instrument.call(this, name, type);
    this.stringsCount = stringsCount;
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) Stwórz instancję StringedInstrument.

// b) W jaki sposób odwołać się do metod printInstrument i printStringedInstrument?

// c) Zastąp wywołanie call() funkcją apply() 

// 1.8.
// Utwórz obiekt Animal z polem 'name' i funkcją printName, po którym będą dziedziczyły Mammal (z polem age i funkcją getAge) i Fish (z polem weight i funkcją increaseWeight()) . 
// Następnie stwórz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(), która tutaj będzie najpierw wywoływała funkcję getAge() z klasy dziedziczonej, a następnie mnożyła wynik razy 4 i wyświetlała go) i Salmon (z funkcją catch()), które będą dziedziczyły odpowiednio po Mammal i Fish.
// W razie problemów wzoruj się na rozwiązaniu z poprzedniego zadania.
// Brawo, na poprzednich laboratoriach dowiedziałeś/aś się jak działa słowo kluczowe new :) 
// 1. Uprość funkcję BookCreator tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 
function BookCreator(title,author){
    this.title=title
    this.author=author
};
let book1=new BookCreator("At the Mountains of Madness","H.P. Lovecraft")
// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.
BookCreator.prototype.print=function(){
    console.log(this.title,this.author)
}
BookCreator.prototype.addReader=function(reader){
    this.reader=reader
}
book1.print();
book1.addReader("Adam");
console.log(book1);



// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczwych class i constructor, aby osiągnąć powyższy efekt.
class BookCreatorNew {
    constructor(title,author){
        this.title=title
        this.author=author
    }
    print(){
        console.log(this.title,this.author)
    }
    addReader(reader){
        this.reader=reader
    }

}
let book2= new BookCreatorNew("The Music of Erich Zann","H.P. Lovecraft")
book2.print()
book2.addReader("Jan")
console.log(book2)



// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = (name,age) =>{
    this.name=name,
   this.age=age,
    function addAge(){
        Person.age=age+1 
    }
}

// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)
// nie będzie działało jako prawidłowy obiekt ponieważ słowo this w arrow function ma szerszy scope



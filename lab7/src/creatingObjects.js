//  1. Zdefiniuj pola 'title' i 'author' i funkcjÄ print(), ktĂłra wypisuje author - title

const book0 = {
    title:'Qld',
    author:'Piotr',
    print(){
        console.log(this.title,this.author)
    }
    };
    
    //book0.print();
    
    const book2 = Object.create(book0);
    book2.title='Ald'
    book2.name='Paweł'
    
    //book2.print();
    
    function BookCreator(title, author) {
        const b = Object.create(book0)
        b.title=title
        b.author=author
        return b
    
    }
    
    const book3 = BookCreator('CieĹ wiatru', 'Carlos Ruiz Zafon');
    const book4 = BookCreator('Ojciech Chrzestny', 'Mario Puzo');
    
    //book3.print();
    //book4.print();
    
    // 2. Przetestuj poniĹźszy kod i odpowiedz na pytania
    
    function testThis() {
        console.log(this);
    }
    
    //testThis();
    
    function testThis2() {
        "use strict"
        console.log(this);
    }
    
    //testThis2();
    
    
    // 2.1. Czym jest this? | this jest obiektem na którym wykonywana jest metoda
    // 2.2. Do czego odwoĹuje siÄ this | do obiektu w którym jesteśmy
    
    const person = {
        name: 'Oscar Wilde',
        print() {
            console.log(this.name);
            
            function a() {
                console.log(a.name,':',person.name);
            }
            a();
        }
    }
    //person.print();
    
    // 2.3. Jakie wartoĹci przyjmuje this w powyĹźszych przypadkach i dlaczego? pierwsze to określone imię drugie ponownie niezdefiniowane
    // 2.4. Zmodyfikuj powyĹźszy kod w ten sposĂłb, aby funkcja a wyĹwietlaĹa w konsoli 'a: Oscar Wilde'. Nie uĹźywaj arrow function.
    
    const printName = function() {
        console.log(this.name);
    }
    
    const person1 = {
        name: 'Aaron Towels',
    }
    
    const person2 = {
        name: 'Tom Clancy',
    }
    person1.printName

    // 2.5. Za pomocÄ funkcji printName wypisz 'name' obu autorĂłw. Nie zmieniaj implementacji funkcji printName!
    
    
    const person3 = {
        name: 'Arthur Conan Doyle',
        print() {
            const a = () => {
                console.log(this);
            };
            a();
        }
    }
    //person3.print();
    
    // 2.6. Co wydrukuje w konsoli powyĹźszy kod? zawartość obiektu person3 Jaki scope ma arrow function? na cały obiekt
    
    // 3. owrĂłÄmy do zadania 1. 
    // Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiÄzaniem do tworzenia obiektĂłw?
    
    // Zmodyfikuj funkcjÄ BookCreator tak, aby inicjalizowaĹa pola author i title. 
    // FunkcjÄ print zadeklaruj jako wspĂłlnÄ dla wszystkich obiektĂłw tworzonych przez BookCreator.
    // Dopisz do tworzonych obiektĂłw pole readers, ktĂłre bÄdzie zawieraĹo liczbÄ czytelnikĂłw.
    // Zadeklaruj funkcjÄ addReader, ktĂłra inkrementuje pole readers. addReader powinna byÄ funkcjÄ wspĂłlnÄ, tak jak print.
    
    
    // 4. Na stworzonym obiekcie wywoĹaj funkcjÄ hasOwnProperty('isBestseller'). 
    // Napisz dlaczego nasz obiekt ma do niej dostÄp. (jeĹli wyskakuje bĹÄd - powrĂłÄ do poprzedniego zadania lub spytaj prowadzÄcego)
    
    
    
    // 5. OdwoĹaj siÄ do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego sĹuĹźy?
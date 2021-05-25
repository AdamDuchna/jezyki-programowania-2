exports.booksArray = [
    {
        title: 'It',
        author: 'Stephen King',
        genre: 'horror',
        readers: 5433,
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        genre: 'fantasy',
        readers: 20043,
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        genre: 'fantasy',
        readers: 95438,
    },
    {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoyevsky',
        genre: ['fiction', 'classics'],
        readers: 6993,
    },
    {
        title: 'Metro 2033',
        author: 'Dmitry Glukhovsky',
        genre: ['postapo', 'fiction'],
        readers: 5433,
    },
    {
        title: 'Roland',
        author: 'Stephen King',
        genre: 'fantasy',
        readers: 5699,
    },
    {
        title: 'Cloud Atlas',
        author: 'David Mitchell',
        genre: ['fiction', 'fantasy'],
        readers: 2345,
    },
    {
        title: 'A Bridge Too Far',
        author: 'Cornelius Ryan',
        genre: 'history',
        readers: 1243,
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: ['fiction', 'scifi'],
        readers: 2224,
    },
    {
        title: 'The Prince',
        author: 'Niccolo Machiavelli',
        genre: ['history', 'nonfiction', 'classics'],
        readers: 1000,
    },
    {
        title: 'Leonardo Da Vinci',
        author: 'Walter Isaacson',
        genre: 'nonfiction',
        readers: 5991,
    },
    {
        title: 'The Autumn Republic',
        author: 'Brian McClellan',
        genre: 'fantasy',
        readers: 1123,
    },
    {
        title: 'The Silmarillion',
        author: 'J.R.R. Tolkien',
        genre: 'fantasy',
        readers: 9988,
    },
    {
        title: 'The Angel Game',
        author: 'Carlos Ruiz Zafon',
        genre: ['fiction', 'history' ],
        readers: 2211,
    },
];
const booksW=books.reduce((books_by_genre, book) => {
    if (book.genre instanceof Array) {
      book.genre.reduce((acc,book_genre) => {
        if(books_by_genre[book_genre] == undefined) books_by_genre[book_genre]=[];
        books_by_genre[book_genre].push({'title': book.title, 'author': book.author});
      })
      return books_by_genre
    }
    else {
    if(books_by_genre[book.genre] == undefined) books_by_genre[book.genre]=[];
      books_by_genre[book["genre"]].push({'title': book.title, 'author': book.author});
      return books_by_genre
    };
  }, {});
  
  console.log(booksW)
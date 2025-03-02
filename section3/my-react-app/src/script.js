const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// const books = getBooks();
// // console.log(books);

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// const book = getBook(1);
// console.log(book);
// const title = book.title;
// const author = book.author;

//Destructuring object
// const { title, author, pages, genres, hasMovieAdaptation, publicationDate } =
//   book;
// console.log(title, author, pages, genres, hasMovieAdaptation);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[2];
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);
//
// const newGenres = [...genres, "epic fantasy"];
// newGenres;

// const updatedBook = {
//   ...book,
//Adding a new property
//   moviePublicationDate: "2021-12-19",

//Overwriting an existing property
//   pages: 1210,
// };
// updatedBook;

// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }`;

// const stringPage = pages > 1000 ? "over a thousand" : "less than 1000";
// console.log(stringPage);

// function getYear(str) {
//   return str.split("-")[0];
// }

// const getYear = (str) => {
//   return str.split("-")[0];
// };

// console.log(getYear(publicationDate));

// function getTotalReviewCount(book) {
//   const goodread = book.reviews.goodread.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodread + librarything;
// }

// console.log(getTotalReviewCount(book));

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount;
//   return goodreads + librarything;
// }

function getBooks() {
  return data;
}

const books = getBooks();
// books;
// const x = [1, 2, 3, 4, 5, 6, 7].map((ele) => ele * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => {
//   return {
//     title: book.author,
//     author: book.author,
//     reviewsCount: getTotalReviewCount(book),
//   };
// });
// essentialData;

// // filtter method
// const longBooksWithMovie = books
//   .filter((book) => {
//     return book.pages > 1200;
//   })
//   .filter((book) => {
//     return book.hasMovieAdaptation;
//   });
// console.log(longBooksWithMovie);

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);

// adventureBooks;

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// const y = [3, 1, 5, 6, 7, 8];
// const sorted = y.slice(0, 2).sort((a, b) => a - b);
// sorted;

// const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
// sortedByPages;

//a add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

//2 delete book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

//3 update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// booksAfterUpdate;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  //   console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);

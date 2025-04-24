import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book("Метро 2033", "Дмитро Глуховський", 2005);
const book2 = new EBook("Іловайськ", "Євген Положій", 2000, "PDF");

book1.printInfo();
book2.printInfo();

const books = [book1, book2];
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

const ebook = EBook.createFromBook(book1, "EPUB");
console.log("Електронна книга:");
ebook.printInfo();

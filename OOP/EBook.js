import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._fileFormat = value;
    } else {
      console.error('Невірний формат файлу');
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this._fileFormat}`);
  }

  static createFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

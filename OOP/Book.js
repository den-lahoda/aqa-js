export default class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._title = value;
    } else {
      console.error('Невірний формат назви книги');
    }
  }

  set author(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._author = value;
    } else {
      console.error('Невірний формат автора книги');
    }
  }

  set year(value) {
    if (Number.isInteger(value) && value > 0) {
      this._year = value;
    } else {
      console.error('Невірний рік видання');
    }
  }

  printInfo() {
    console.log(
      `Назва: ${this._title}, Автор: ${this._author}, Рік видання: ${this._year}`
    );
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) =>
      oldest.year < current.year ? oldest : current
    );
  }
}

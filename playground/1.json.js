const fs = require('fs');

const book = {
    title: 'Refactoring',
    author: 'Martin Fowler'
}

const bookstr = JSON.stringify(book);
console.log(bookstr);
fs.writeFileSync('book.json',bookstr);

const fileData = fs.readFileSync('book.json').toString();
const newBook = JSON.parse(fileData);
console.log(newBook);

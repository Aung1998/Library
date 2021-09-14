// DOM assets
const books_div = document.getElementById('books')

let myLibrary = []


class Book {
   constructor(title, author, pages, have_read) {
      this.title = title
      this.author = author
      this.pages = pages
      this.have_read = have_read
   }
}

function checkLibrary(title, author) {
   return myLibrary.some(book => book.title == title && book.author == author)
}

function addToLibrary(title, author, pages, have_read) {
   if (!checkLibrary(title, author)) {
      let book = new Book(title, author, pages, have_read)
      myLibrary.push(book)
      updateLibrary()
   }
   else {
      alert("The book already exist!")
   }
}

function removeFromLibrary(title) {
   myLibrary = myLibrary.filter(book => book.title != title)
}

function updateLibrary() {
   // to update DOM library
}





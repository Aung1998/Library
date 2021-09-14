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
      addToDOM()
   }
   else {
      alert("The book already exist!")
   }
}

function removeFromLibrary(title) {
   myLibrary = myLibrary.filter(book => book.title != title)
}

function createBookDiv(name) {
   let div = document.createElement('div');
   div.textContent = name;
   return div;
}

function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}

function createBook(book){
   const book_div = document.createElement('div')
   const remove_btn = document.createElement('input')
   remove_btn.type = 'button'
   remove_btn.value = "Remove"
   book_div.classList.add('book')
   book_div.appendChild(createBookDiv(book.title))
   book_div.appendChild(createBookDiv(book.author))
   book_div.appendChild(createBookDiv(book.pages))
   if(book.have_read){
      book_div.appendChild(createBookDiv("Has read"))
   }
   else{
      book_div.appendChild(createBookDiv("Has not read"))
   }
   book_div.appendChild(remove_btn)
   return book_div
}

function addToDOM() {
   // to update DOM library
   removeAllChildNodes(books)
   myLibrary.forEach(book => {
      book_div = createBook(book)
      books_div.appendChild(book_div)
   })
}





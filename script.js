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
      updatePage()
   }
   else {
      alert("The book already exist!")
   }
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
   return book_div
}

function updatePage() {
   // to update DOM library
   removeAllChildNodes(books)
   myLibrary.forEach(book => {
      const remove_btn = document.createElement('input')
      remove_btn.type = 'button'
      remove_btn.value = "Remove"
      remove_btn.classList.add('btnremove')
      addRemoveEvent(remove_btn, book.title, book.author)
      book_div = createBook(book)
      book_div.appendChild(remove_btn)
      books_div.appendChild(book_div)
   })
}

function addRemoveEvent(btn, t, a){
   btn.addEventListener("click", () => {
      myLibrary.forEach(book => {
         if(book.title == t && book.author == a){
            myLibrary.pop(myLibrary.indexOf(book))
         }
      })
      console.log(myLibrary)
      updatePage()
   })
}




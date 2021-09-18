// DOM assets
const books_div = document.querySelector('.books')

const open_form = document.querySelector('.bookbtn')
open_form.addEventListener('click', displayPopUp)

const cancel_btn = document.querySelector('.cancelbtn')
cancel_btn.addEventListener('click', closePopUp)

const add_btn = document.querySelector('.addbtn')
add_btn.addEventListener('click', () => {
   let title = document.querySelector('.bookname').value
   let author = document.querySelector('.authorname').value
   let page = document.querySelector('.page').value
   let have_read = document.querySelector('.check').checked
   addToLibrary(title, author, page, have_read)
   closePopUp()
})

let myLibrary = []

class Book {
   constructor(title, author, pages, have_read) {
      this.title = title
      this.author = author
      this.pages = pages
      this.have_read = have_read
   }
}

function displayPopUp(){
   const openform = document.querySelector('.formPopup')
   openform.style.display = "block"
}

function closePopUp(){
   const openform = document.querySelector('.formPopup')
   openform.style.display = "none"
   document.querySelector('.bookname').value = ''
   document.querySelector('.authorname').value = ''
   document.querySelector('.page').value = ''
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
      const read_btn = document.createElement('input')
      read_btn.type = 'button';
      read_btn.value = "Have Read"
      read_btn.classList.add('btn', 'readbtn', 'read')
      read_btn.addEventListener('click', () => readChange(book))
      book_div.appendChild(read_btn)
   }
   else{
      const read_btn = document.createElement('input')
      read_btn.type = 'button';
      read_btn.value = "Have not Read"
      read_btn.classList.add('btn', 'readbtn', 'unread')
      read_btn.addEventListener('click', () => readChange(book))
      book_div.appendChild(read_btn)
   }
   return book_div
}

function updatePage() {
   // to update DOM library
   removeAllChildNodes(books_div)
   myLibrary.forEach(book => {
      const remove_btn = document.createElement('input')
      remove_btn.type = 'button'
      remove_btn.value = "Remove"
      remove_btn.classList.add('btnremove', 'btn')
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
      updatePage()
   })
}

function readChange(book){
   book.have_read = !book.have_read;
   updatePage()
}
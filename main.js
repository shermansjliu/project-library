let removeBookBtns = [...document.querySelectorAll('.remove-book-btn')];
let readBtns = [...document.querySelectorAll('.read-btn')]
function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = read;
}

 Book.prototype.changeStatus = function() {
     if (this.hasRead) {
         hasRead = false;
     }
     else {
         hasRead = true;
     }
 }


function newBook (book){ //Book object
    let bookCard = document.createElement("div");
    bookCard.textContent = book["title"];
    bookCard.toggle("b-card");
    return  bookCard;
}



function render (){
        // //Create new book
        let bookCard = document.createElement('div');

        let title = document.createElement('p')
        title.textContent = document.querySelector('input[name="title"]').value;
        let author = document.createElement('p');
        author.textContent = document.querySelector('input[name="author"]').value;
        let pages = document.createElement('p');
        pages.textContent = document.querySelector('input[name="pages"]').value;
        let hasRead = document.createElement('p');
        if (document.querySelector('input[name = "read"]').checked){
            hasRead.textContent = "Read";
        } else {
            hasRead.textContent = "Not Read";
        }
        let removeBtn = document.createElement('button');
        removeBtn.classList.toggle('remove-book-btn');
        removeBtn.textContent = "Remove";
        let readBtn = document.createElement('button');
        readBtn.classList.toggle('read-btn');
        readBtn.textContent = "Change Read Status";

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(hasRead);
        bookCard.appendChild(removeBtn);
        bookCard.append(readBtn)

        for(let i = 0; i < bookCard.children.length; i++){
            if (bookCard.children[i].nodeName == 'P'){
            bookCard.children[i].classList.toggle('attribute');
            }

        }
        bookCard.classList.toggle('b-card');
        domLibrary.appendChild(bookCard);
        removeBookBtns.push(removeBtn)

        readBtns.push(readBtn);

        return false;
}

function inputClicked(){
    let background = false;
    let inputs = [...document.querySelectorAll('input')]
    inputs.forEach((node) => {;
        if (node.nodeName == 'INPUT'){
            return true;
        }
    })
    return false;
}
let form = document.querySelector('form')
let addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', () => {
    isCreating = true;
    form.classList.remove('form-hidden');
})

document.addEventListener('click', () => {
    removeBookBtns.forEach((removeBtn) => {
        removeBtn.addEventListener('click', () => {

            domLibrary.removeChild(removeBtn.parentElement);
        })
    })
    console.log(readBtns)
    readBtns.forEach((readBtn) => {
        readBtn.addEventListener('click', ()=> {

            let readStatus = readBtn.parentElement.children[3];
            if (readStatus.textContent == "Read" ){
                readStatus.textContent = "Not Read"
            } else {
                readStatus.textContent = "Read";
            }


        })
    })
})


document.addEventListener('click', (e) => {
    let selectedClass = e.target
    if(selectedClass == document.querySelector('form')){
        form.classList.add('form-hidden');
    }
})

let isCreating = false;
let domLibrary = document.querySelector('.library')

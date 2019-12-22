
function Book(title){
    this.title = title;
}


function newBook (book){ //Book object
    let bookCard = document.createElement("div");
    bookCard.textContent = book["title"];
    bookCard.toggle("b-card");
    return  bookCard;
}

function render (){
    myLibrary.forEach(book => {
        let title = book["title"]
        let bookCard = document.createElement('div');
        bookCard.textContent = title;
        bookCard.classList.toggle('b-card');
        library.appendChild(bookCard);
        //Create new Div createElement
        //set newdiv element text content to Title/
        //APpend title to library as child
    })
}
let myLibrary = []
let lotr = new Book('Lord of the Rings: Fellowship of the ring');
let lordOfTheFlies = new Book ('Lord of the flies');
let chocofactory= new Book ("Charlie and the chocolate factory")
let library = document.querySelector('.library');
myLibrary.push(lotr);
myLibrary.push(lordOfTheFlies);
myLibrary.push(chocofactory);
render();

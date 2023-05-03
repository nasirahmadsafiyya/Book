const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//Add Author
function Author(authorname, dateofbirth, bookname, isbn){
    this.name = authorname;
    this.dateofbirth = dateofbirth;
    this.name = bookname;
    this.isbn = isbn;
    this.publisher = publisher;
    this.date = publicationDate;
}


function UI(){
    UI.prototype.addAuthorToList = function(author){
        const list = document.getElementsByClassName('author');
        list.appendChild();
    }
}

function UI(){
    UI.prototype.addBookToList = function(book){
        const list = document.getElementsByClassName('books');
        list.appendChild();
    }
}

function addAuthors(){
    const name = document.querySelector('#author-name').value;
    const dob = document.getElementById('dateofbirth').value;
    const data = {id: '6763d931-359d-419f-9c6a-3c0559bd33fa', name: name, dateOfBirth: dob};
    fetch('https://localhost:7246/api/Authors',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((data) => {
    })
    
}


function deleteAuthor(id){
    fetch(`https://localhost:7246/api/Authors/${id}`,{
        method: 'DELETE'})
    .then(response => response.status)
    .then(data => {
        if (data.textContent === "delete") {
           span.removeChild(author);
        }
        // else{            
        //     showError("error")
        // }
    });
}

function editAuthor(id){ 
    const name = document.querySelector('#author-name').value;
    const dob = document.getElementById('dateofbirth').value;
    const data = {id:id, name: name, dateOfBirth: dob};
    fetch(`https://localhost:7246/api/Authors/${id}`,{
        method: 'PUT',
        headers: {            
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.status)
    .then((data) => {
        alert("success");
    });
}

function getAuthors(){
    fetch('https://localhost:7246/api/Authors')
        .then(response => response.json())
        .then (data => {
        data.forEach(author => {
            const select = document.getElementById('id');
            const option = document.createElement('option')
            option.value = author.id;
            option.appendChild(document.createTextNode(author.name));
            select.appendChild(option);
        });
    })        
}

function getAuthor(id){
    fetch(`https://localhost:7246/api/Authors/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("author-name").value = data.name;
        document.getElementById("dateofbirth").value = (data.dateOfBirth).split('T')[0];
    })
}


// Add Books
function addBooks(){
    const name = document.getElementById('book-name').value;
    const id = document.getElementById('id').value;
    const isbn = document.getElementById('isbn').value;
    const publisher = document.getElementById('publisher');
    const publicationDate = document.getElementById('date').value;
    const data = {name: name, authorId: id, isbn: isbn, publicationDate: (new Date()).toISOString(), publisher: "NNPC"};
    console.log(data)
    fetch('https://localhost:7246/api/Books',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((data) => {
        alert("success");
    })
}

function getBook(id){
    fetch(`https://localhost:7246/api/Books/${id}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("name").value = data.name;
        document.getElementById("isbn").value = data.isbn;
        // document.getElementById("id").value = data.id;
        document.getElementById("publisher").value = data.publisher;
        document.getElementById("publicationDate").value = (data.publicationDate).split('T')[0];
    })  
}

function deleteBook(id){
    fetch(`https://localhost:7246/api/Books/${id}`,{
    method: 'DELETE'})
    .then(response => response.status)
    .then((data) => {
        alert('deleted');
    })
}

function editBook(id){
    const name = document.getElementById('name').value;
    const isbn = document.getElementById('isbn').value;
    const date = document.getElementById('publicationDate').value;
    const publisher = document.getElementById('publisher').value;
    const data = {id: id, name: name, isbn: isbn, publicationDate: date, publisher: 'NNPC'}
    fetch(`https://localhost:7246/api/Books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.status)
    .then((data) => {
        alert('Edited')
    });
}
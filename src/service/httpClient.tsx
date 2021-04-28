import axios from 'axios';

const apiUrl= 'http://localhost:3001';

const dbUris = {
    books: apiUrl + '/books',
    hardcodedBooks: 'http://localhost:3001/books'
};

//get all books
export function getBooks () {
   
   
    return fetch(dbUris.books);
    
}

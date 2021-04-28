const apiUrl= 'http://localhost:3001';

const dbUris = {
    books: apiUrl + '/books'
};

//get all books
export function getBooks () {
   
   
    return fetch(dbUris.books);
    
}

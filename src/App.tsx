import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import StickyHeader from './components/Header/StickyHeader';
import PostsArea from './components/Posts/PostsArea';
import { Book } from './models/Books';
import { getBooks } from './service/httpClient';

const  tags =  ['javascript','fundamentals', 'advanced', 'css',
'accessibility', 'svg', 'architecture'];

function App() {

  const [filterTags, setFilterTags] = useState<Array<string>>([]);
  const [filterPrices, setFilterPrices] = useState<Array<string>>([]);
  const [fetchedData, setFetchedData] = useState<Array<Book>>([])
  const [currentPosts, setCurrentPosts] = useState<Array<Book>>([])
  
  const getData = () => {
    getBooks()
    .then(response => response.json())
    .then(data => {
      console.log(data.books);
      setFetchedData(data.books);
      setCurrentPosts(data.books);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const filterByTags = (books: Array<Book>, filters: Array<string> ) => {
    //get books
    let temp = books;
    //get elements from a book, check if they have at least 1 element from 
    //filters if yes return it, no leave it
  }

  const filterByPrices = (books: Array<Book>, prices: Array<string> ) => {
    //get books
    let temp = books;
    //get elements from a book, check if they have at least 1 element from 
    //filters if yes return it, no leave it
    temp = temp.
  }


  //update current posts should fiilters change
  useEffect(() => {
    console.log('filters');
   //get 'cached' elements from fetcheddata
   const tempData = fetchedData;
   //get elements with(out) tags
  //  const filteredByTags = filterTags.length = 0 
  //  ? tempData 
  //  : ;
   //get filtered
   //get elements with(out) price from previous filter
   const filteredByPrice = filterPrices.length = 0 
   ? filteredByTags  
   : ;
   //update current posts
   setCurrentPosts(filteredByPrice);

  }, [filterTags, filterPrices])

  //1st download
  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="App">
      <StickyHeader 
      tags={filterTags}
      setTags={setFilterTags} 
      prices={filterPrices}
      setPrices={setFilterPrices} />
      <PostsArea  {...currentPosts} />
    </div>
  );
}

export default App;

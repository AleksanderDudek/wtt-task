import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import StickyHeader from './components/Header/StickyHeader';
import PostsArea from './components/Posts/PostsArea';
import { Book } from './models/Books';
import { PriceVariants } from './models/Prices';
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
    // temp = temp.filter( (book: Book) => {
    //   for(var i = 0; i < tags.length; i++) {
    //     if(book.tags.includes(tags[i])) return book;
    //   }
    //   return;
    // })
    temp = temp.filter( (book: Book) => {
      if(book.tags.some(r => filters.includes(r))) return book;
      return;
    })

    console.log(temp);
    return temp;
  }


  const checkPriceValue = (value: string, tempArray: Array<number>) => {
    if(!"<10$".localeCompare(value)) tempArray.push(1);
    if(!"10$-20$".localeCompare(value)) tempArray.push(2);
    if(!">20$".localeCompare(value)) tempArray.push(4);
  }

  const filterByPrices = (books: Array<Book>, prices: Array<string> ) => {
    //get books
    let temp = books;
    let transformationArray = new Array<number>();

    //create corresponding array
    prices.forEach(item => checkPriceValue(item,transformationArray))
    //sum price equivalents
    let sum = transformationArray.reduce((a,b) => a+b ,0)
    //get elements from a book by given solution
    
    switch(sum) {
      case PriceVariants['10$-20$']:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) >= 10
        && parseFloat(item.price.substring(1)) <= 20 ))
      // code block
      break;
      case PriceVariants['<10$']:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) < 10 ))
        // code block
      break;
      case PriceVariants['>20$']:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) > 20 ))

      // code block
      break;
      case PriceVariants.All:
        temp = temp;
        // code block
      break;     
      case PriceVariants.Biggerthan10:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) >= 10 ))

      // code block
      break;
      case PriceVariants.Empty:
        temp = [];
        // code block
      break;      
      case PriceVariants.Lowerthan20:
      temp = temp.filter((item => parseFloat(item.price.substring(1)) <= 20 ))

      // code block
      break;
      case PriceVariants.MoreOrLess:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) < 10 
        || parseFloat(item.price.substring(1)) > 20 ))
        // code block
      break;
  default:
    // code block
    }

    console.log(sum);
    console.log(books);

    return temp;
  }


  //update current posts should fiilters change
  useEffect(() => {
    console.log('filters');
   //get 'cached' elements from fetcheddata
   const tempData = fetchedData;
   //get elements with(out) tags
   const filteredByTags = filterTags.length == 0 
   ? tempData 
   : filterByTags(tempData, filterTags);
   //get filtered
   //get elements with(out) price from previous filter
   const filteredByPrice = filterPrices.length == 0 
   ? filteredByTags  
   : filterByPrices(filteredByTags, filterPrices);
   //update current posts
   setCurrentPosts(filteredByPrice);

  }, [filterPrices, filterTags, setFilterTags, setFilterPrices])

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

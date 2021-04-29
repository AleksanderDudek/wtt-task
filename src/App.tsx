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

const  priceAttrs =  ['<10$','10$-20$', '>20$'];
interface IPriceCheckbox {
  priceTag: string,
  isChecked: boolean
}

function App() {

  //dataManager
  const [fetchedData, setFetchedData] = useState<Array<Book>>([])
  const [currentPosts, setCurrentPosts] = useState<Array<Book>>([])

  //filterHolders
  const [filterTags, setFilterTags] = useState<Array<string>>([]);
  const [filterPrices, setFilterPrices] = useState<Array<string>>([]);
 
  //tagsFilters
  const [checkboxTag1, setCheckboxTag1] = useState<IPriceCheckbox>({priceTag: tags[0], isChecked: false });
  const [checkboxTag2, setCheckboxTag2] = useState<IPriceCheckbox>({priceTag: tags[1], isChecked: false });
  const [checkboxTag3, setCheckboxTag3] = useState<IPriceCheckbox>({priceTag: tags[2], isChecked: false });
  const [checkboxTag4, setCheckboxTag4] = useState<IPriceCheckbox>({priceTag: tags[3], isChecked: false });
  const [checkboxTag5, setCheckboxTag5] = useState<IPriceCheckbox>({priceTag: tags[4], isChecked: false });
  const [checkboxTag6, setCheckboxTag6] = useState<IPriceCheckbox>({priceTag: tags[5], isChecked: false });
  const [checkboxTag7, setCheckboxTag7] = useState<IPriceCheckbox>({priceTag: tags[6], isChecked: false });

  //priceFilters
  const [checkboxPrice1, setCheckboxPrice1] = useState<IPriceCheckbox>({priceTag: priceAttrs[0], isChecked: false });
  const [checkboxPrice2, setCheckboxPrice2] = useState<IPriceCheckbox>({priceTag: priceAttrs[1], isChecked: false });
  const [checkboxPrice3, setCheckboxPrice3] = useState<IPriceCheckbox>({priceTag: priceAttrs[2], isChecked: false });

  //fetch data
  //1st download
  useEffect(() => {
    getData();
  }, [])

  function setPriceCheckboxArray () {
    let array: Array<string> = [];
    if(checkboxPrice1.isChecked) array.push(checkboxPrice1.priceTag);
    if(!checkboxPrice1.isChecked) array.filter(e=> e !== checkboxPrice1.priceTag);
    if(checkboxPrice2.isChecked) array.push(checkboxPrice2.priceTag);
    if(!checkboxPrice2.isChecked) array.filter(e=> e !== checkboxPrice2.priceTag);
    if(checkboxPrice3.isChecked) array.push(checkboxPrice3.priceTag);
    if(!checkboxPrice3.isChecked) array.filter(e=> e !== checkboxPrice3.priceTag);

    return array;
  }

  //update price filters
  useEffect(() => {
    console.log('some checkbox changed');

    //push to array
    let tempArray = setPriceCheckboxArray();
    console.log(tempArray);

    //now update filters
    setFilterPrices(tempArray);
    console.log(filterPrices);

  }, [checkboxPrice1, checkboxPrice2, checkboxPrice3])

  function setTagCheckboxArray () {
    let array: Array<string> = [];

    if(checkboxTag1.isChecked) array.push(checkboxTag1.priceTag);
    if(!checkboxTag1.isChecked) array.filter(e=> e !== checkboxTag1.priceTag);
    if(checkboxTag2.isChecked) array.push(checkboxTag2.priceTag);
    if(!checkboxTag2.isChecked) array.filter(e=> e !== checkboxTag2.priceTag);
    if(checkboxTag3.isChecked) array.push(checkboxTag3.priceTag);
    if(!checkboxTag3.isChecked) array.filter(e=> e !== checkboxTag3.priceTag);
    if(checkboxTag4.isChecked) array.push(checkboxTag4.priceTag);
    if(!checkboxTag4.isChecked) array.filter(e=> e !== checkboxTag4.priceTag);
    if(checkboxTag5.isChecked) array.push(checkboxTag5.priceTag);
    if(!checkboxTag5.isChecked) array.filter(e=> e !== checkboxTag5.priceTag);
    if(checkboxTag6.isChecked) array.push(checkboxTag6.priceTag);
    if(!checkboxTag6.isChecked) array.filter(e=> e !== checkboxTag6.priceTag);
    if(checkboxTag7.isChecked) array.push(checkboxTag7.priceTag);
    if(!checkboxTag7.isChecked) array.filter(e=> e !== checkboxTag7.priceTag);

    return array;
  }

//update tag filters
useEffect(() => {
  console.log('some checkbox changed');

  //push to array
  let tempArray = setTagCheckboxArray();
  console.log(tempArray);

  //now update filters
  setFilterTags(tempArray);
  console.log(filterTags);

}, [checkboxTag1, checkboxTag2, checkboxTag3, checkboxTag4,
  checkboxTag5, checkboxTag6, checkboxTag7])
  
  //price and tag filters are updated, now change post state
  useEffect(() => {
    console.log(filterTags);
    console.log(filterPrices);

    console.log('price and tag filters');
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
    
  }, [filterPrices, filterTags])

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
    temp = temp.filter( (book: Book) => {
      if(book.tags.some(r => filters.includes(r))) return book;
      return;
    })

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

      break;
      case PriceVariants['<10$']:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) < 10 ))

      break;
      case PriceVariants['>20$']:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) > 20 ))

      break;
      case PriceVariants.All:
        temp = temp;

      break;     
      case PriceVariants.Biggerthan10:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) >= 10 ))

      break;
      case PriceVariants.Empty:
        temp = [];

      break;      
      case PriceVariants.Lowerthan20:
      temp = temp.filter((item => parseFloat(item.price.substring(1)) <= 20 ))

      break;
      case PriceVariants.MoreOrLess:
        temp = temp.filter((item => parseFloat(item.price.substring(1)) < 10 
        || parseFloat(item.price.substring(1)) > 20 ))

      break;
  default:
    }

    return temp;
  }


  return (
    <div className="App">
      <StickyHeader 
      checkboxPrice1={checkboxPrice1}
      setCheckboxPrice1={setCheckboxPrice1}
      checkboxPrice2={checkboxPrice2}
      setCheckboxPrice2={setCheckboxPrice2}
      checkboxPrice3={checkboxPrice3}
      setCheckboxPrice3={setCheckboxPrice3}

      checkboxTag1={checkboxTag1}
      setCheckboxTag1={setCheckboxTag1}
      checkboxTag2={checkboxTag2}
      setCheckboxTag2={setCheckboxTag2}
      checkboxTag3={checkboxTag3}
      setCheckboxTag3={setCheckboxTag3}
      checkboxTag4={checkboxTag4}
      setCheckboxTag4={setCheckboxTag4}
      checkboxTag5={checkboxTag5}
      setCheckboxTag5={setCheckboxTag5}
      checkboxTag6={checkboxTag6}
      setCheckboxTag6={setCheckboxTag6}
      checkboxTag7={checkboxTag7}
      setCheckboxTag7={setCheckboxTag7}

      tags={tags}
      setTags={setFilterTags}
      prices={filterPrices}
      setPrices={setFilterPrices} />
      <PostsArea  {...currentPosts} />
    </div>
  );
}

export default App;

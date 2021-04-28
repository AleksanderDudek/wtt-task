import React, { useEffect, useState } from 'react';
import { Book } from '../../models/Books';
import { getBooks } from '../../service/httpClient';

import PostCard from './PostCard';


function PostList() {

  const [currentPosts, setCurrentPosts] = useState<Array<any>>([]);

  const fetchData = React.useCallback(() => {
    getBooks()
    .then(response => response.json())
    .then(data => {
      console.log(data.books);
      return setCurrentPosts(data.books);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])
//runs at the begining and each time data is loaded, doesn't reload api call

  return (
    <>
      post list
      { currentPosts.length > 0 ? currentPosts.map((book: Book) => <PostCard {...book} />) : ' \n not yet' }
    </>
  );
}

export default PostList;

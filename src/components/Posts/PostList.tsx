import React, { useEffect, useState } from 'react';
import { Book } from '../../models/Books';
import { getBooks } from '../../service/httpClient';

import PostCard from './PostCard';
import './PostList.css';

function PostList(currentPosts: Array<Book>) {

//runs at the begining and each time data is loaded, doesn't reload api call
 var newArrayDataOfOjbect = Object.values(currentPosts)


  return (
  <div className='cards'>
      { newArrayDataOfOjbect.length > 0 
      ? newArrayDataOfOjbect.map((book: Book) => 
        <PostCard {...book} />
      )
      : ' \n not yet (imagine spinners... or dragons :)' }
  </div>
  );
    
};

export default PostList;

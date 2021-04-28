
import { Book } from '../../models/Books';
import React from 'react';
import Chip from '@material-ui/core/Chip';
import './PostCard.css';

function PostCard(data:Book) {

  return (
    <div className='card-container'>
      <div>
        fixed price tag: {data.price}
      </div>  
      <div className='card'>
        <div className='container'>
          <h3><b>{data.authorId}</b></h3> 
          <h3><b>{data.title}</b></h3> 
          <p className='text'>{data.description}</p>
          { data.tags.map(tag => <div className='chip'>
            {tag}
            </div> 
          )}
    </div>
    </div>    
    </div>

  );
}

export default PostCard;

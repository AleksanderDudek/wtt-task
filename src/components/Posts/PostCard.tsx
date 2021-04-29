
import { Book } from '../../models/Books';
import React from 'react';
import Chip from '@material-ui/core/Chip';
import './PostCard.css';

function PostCard(data:Book) {

  return (
    <div className='card-container'>
      <div className='price-chip'>
        {data.price}
      </div>  
      <div className='card'>
        <div className='container'>
          <h3 style={{textAlign: 'start'}}><b>{data.authorId}</b></h3> 
          <h3 style={{textAlign: 'start'}}><b>{data.title}</b></h3> 
          <p className='text'>{data.description}</p>
          <div className='chips'>
          { data.tags.map(tag => <div className='chip'>
            {tag}
            </div> 
          )}
          </div>
    </div>
    </div>    
    </div>

  );
}

export default PostCard;

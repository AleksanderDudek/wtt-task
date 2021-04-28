
import { Book } from '../../models/Books';
import React from 'react';


function PostCard(data:Book) {
  return (
    <div>
        area
      <div>
        fixed price tag: {data.price}
      </div>  
      <div>
          card 
          <p>{data.authorId}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <div>
            {data.tags.map(tag => <p>{tag}</p>)}
          </div>

      </div>
    </div>
  );
}

export default PostCard;

import React from 'react';
import './Dropdowns.css';

const  staticTags =  ['javascript','fundamentals', 'advanced', 'css',
'accessibility', 'svg', 'architecture'];
const myStorage = window.localStorage;
interface IProps {
  tags: Array<string>,
  setTags: React.Dispatch<React.SetStateAction<string[]>> 
}

function TagsDropdown(props: IProps) {

  const { setTags, tags } = props;

  return (
    <div>
      <p>by tags:</p>
      <div className='checkbox-container'>
      {
        staticTags.map( tag =>
          <>
            <input type="checkbox" id={tag} name={tag} onChange={  () => 
              console.log('hello there') }
             />
            <label htmlFor={tag}>{tag}</label>
          </>
          )
      }   
      </div>
    </div>
  );
}

export default TagsDropdown;

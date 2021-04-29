import React, { useState } from 'react';
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

  const [checkbox1, setScheckbox1] = useState(false);
  const [checkbox2, setScheckbox2] = useState(false);
  const [checkbox3, setScheckbox3] = useState(false);
  const [checkbox4, setScheckbox4] = useState(false);
  const [checkbox5, setScheckbox5] = useState(false);
  const [checkbox6, setScheckbox6] = useState(false);
  const [checkbox7, setScheckbox7] = useState(false);


 //add or remove defaultChecked string filters
 const updateTags = (currentValue: string, defaultChecked: boolean) => {
  let array = tags;

 //remove from array if it appeared before
 if(!defaultChecked) array = array.filter(e => e !== currentValue);

//add to array if it is selected
 if(defaultChecked) array.push(currentValue);

//  console.log(array);

 setTags(array);
}

  return (
    <div>
      <p>by tags:</p>
      <div className='checkbox-container'>
      
      <input type="checkbox" id={staticTags[0]} name={staticTags[0]} 
      defaultChecked={checkbox1}
      onClick={(event) => 
        {
          console.log('fire 1');
          updateTags(staticTags[0], !checkbox1);
          setScheckbox1(!checkbox1);
        }
      } />
      <label htmlFor={staticTags[0]}>{staticTags[0]}</label>
           
      <input type="checkbox" id={staticTags[1]} name={staticTags[1]} 
      defaultChecked={checkbox2}
      onClick={(event) => 
        {
          console.log('fire 12');
          updateTags(staticTags[1], !checkbox2);
          setScheckbox2(!checkbox2);
        }
      } />
      <label htmlFor={staticTags[1]}>{staticTags[1]}</label>
      
      <input type="checkbox" id={staticTags[2]} name={staticTags[2]}
      defaultChecked={checkbox3}
      onClick={(event) => 
      {
        console.log('fire 123');
        updateTags(staticTags[2], !checkbox3);
        setScheckbox3(!checkbox3);
      }
    } />
      <label htmlFor={staticTags[2]}>{staticTags[2]}</label>

      <input type="checkbox" id={staticTags[3]} name={staticTags[3]}
      defaultChecked={checkbox4}
      onClick={(event) => 
      {
        console.log('fire 1234');
        updateTags(staticTags[3], !checkbox4);
        setScheckbox4(!checkbox4);
      }
    } />
      <label htmlFor={staticTags[3]}>{staticTags[3]}</label>

      <input type="checkbox" id={staticTags[4]} name={staticTags[4]}
      defaultChecked={checkbox5}
      onClick={(event) => 
      {
        updateTags(staticTags[4], !checkbox5);
        setScheckbox5(!checkbox5);
      }
    } />
      <label htmlFor={staticTags[4]}>{staticTags[4]}</label>

      <input type="checkbox" id={staticTags[5]} name={staticTags[5]}
      defaultChecked={checkbox6}
      onClick={(event) => 
      {
        updateTags(staticTags[5], !checkbox6);
        setScheckbox6(!checkbox6);
      }
    } />
      <label htmlFor={staticTags[5]}>{staticTags[5]}</label>

      <input type="checkbox" id={staticTags[6]} name={staticTags[6]}
      defaultChecked={checkbox7}
      onClick={(event) => 
      {
        updateTags(staticTags[6], !checkbox7);
        setScheckbox7(!checkbox7);
      }
    } />
      <label htmlFor={staticTags[6]}>{staticTags[6]}</label>
      </div>
      </div>
  );
}

export default TagsDropdown;

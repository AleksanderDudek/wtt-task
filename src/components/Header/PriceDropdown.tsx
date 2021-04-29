
import { useEffect, useState } from 'react';
import './Dropdowns.css';
const  priceAttrs =  ['<10$','10$-20$', '>20$'];

interface IProps {
  prices: Array<string>,
  setPrices: React.Dispatch<React.SetStateAction<string[]>>
}

function PriceDropdown(props: IProps) {

  const { prices, setPrices } = props;

  const [checkbox1, setScheckbox1] = useState(false);
  const [checkbox2, setScheckbox2] = useState(false);
  const [checkbox3, setScheckbox3] = useState(false);

  useEffect(() => {}, [setScheckbox1, setScheckbox2, setScheckbox3]);

  //add or remove checked string filters
  const updateFilters = (currentValue: string, checked: boolean) => {
    let array = prices;
   if(!checked) array = array.filter(e => e !== currentValue);
   if(checked) array.push(currentValue);
  
  //  console.log(array);

   setPrices(array);
  }
  
  return (
    <div>
      <p>by price:</p>
      <div className='checkbox-container'>
      

            <input type="checkbox" id={priceAttrs[0]} name={priceAttrs[0]} 
            checked={checkbox1}
            onClick={(event) => 
              {
                setScheckbox1(!checkbox1);
                updateFilters(priceAttrs[0], !checkbox1);
              }
            } />
            <label htmlFor={priceAttrs[0]}>{priceAttrs[0]}</label>
                 
            <input type="checkbox" id={priceAttrs[1]} name={priceAttrs[1]} 
            checked={checkbox2}
            onClick={(event) => 
              {
                setScheckbox2(!checkbox2);
                updateFilters(priceAttrs[1], !checkbox2);
              }
            } />
            <label htmlFor={priceAttrs[1]}>{priceAttrs[1]}</label>
            
            <input type="checkbox" id={priceAttrs[2]} name={priceAttrs[2]}
            checked={checkbox3}
            onClick={(event) => 
            {
              setScheckbox3(!checkbox3);
              updateFilters(priceAttrs[2], !checkbox3);
            }
          } />
            <label htmlFor={priceAttrs[2]}>{priceAttrs[2]}</label>
      </div>
    </div>
    
  );
}

export default PriceDropdown;


import { useEffect, useState } from 'react';
import './Dropdowns.css';
const  priceAttrs =  ['<10$','10$-20$', '>20$'];

interface IPriceCheckbox {
  priceTag: string,
  isChecked: boolean
}
interface IProps {
  checkboxPrice1: IPriceCheckbox,
  setCheckboxPrice1: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
  checkboxPrice2: IPriceCheckbox,
  setCheckboxPrice2: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
  checkboxPrice3: IPriceCheckbox,
  setCheckboxPrice3: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
  prices: Array<string>,
  setPrices: React.Dispatch<React.SetStateAction<Array<string>>>,
  tags: Array<string>,
  setTags: React.Dispatch<React.SetStateAction<Array<string>>>,
}

function PriceDropdown(props: IProps) {

  const { checkboxPrice1, checkboxPrice2, checkboxPrice3, 
    setCheckboxPrice1, setCheckboxPrice2, setCheckboxPrice3, prices  } = props;
  
  return (
    <div>
      <p>by price:</p>
      <div className='checkbox-container'>
      

            <input type="checkbox" id={priceAttrs[0]} name={priceAttrs[0]} 
            checked={checkboxPrice1.isChecked} onClick={() => setCheckboxPrice1({priceTag: priceAttrs[0], isChecked: !checkboxPrice1.isChecked})}
            />
            <label htmlFor={priceAttrs[0]}>{priceAttrs[0]}</label>
                 
            <input type="checkbox" id={priceAttrs[1]} name={priceAttrs[1]} 
            checked={checkboxPrice2.isChecked} onClick={() => setCheckboxPrice2({priceTag: priceAttrs[1], isChecked: !checkboxPrice2.isChecked})}

            />
            <label htmlFor={priceAttrs[1]}>{priceAttrs[1]}</label>
            
            <input type="checkbox" id={priceAttrs[2]} name={priceAttrs[2]}
            checked={checkboxPrice3.isChecked} onClick={() => setCheckboxPrice3({priceTag: priceAttrs[2], isChecked: !checkboxPrice3.isChecked})}

            />
            <label htmlFor={priceAttrs[2]}>{priceAttrs[2]}</label>
      </div>
    </div>
    
  );
}

export default PriceDropdown;

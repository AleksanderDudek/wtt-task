import React, { useState } from 'react';
import './Dropdowns.css';

const  staticTags =  ['javascript','fundamentals', 'advanced', 'css',
'accessibility', 'svg', 'architecture'];
const myStorage = window.localStorage;

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
  checkboxTag1: IPriceCheckbox,
      setCheckboxTag1: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
      checkboxTag2: IPriceCheckbox,
      setCheckboxTag2: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
      checkboxTag3: IPriceCheckbox,
      setCheckboxTag3: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
      checkboxTag4: IPriceCheckbox,
      setCheckboxTag4: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
      checkboxTag5: IPriceCheckbox,
      setCheckboxTag5: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
      checkboxTag6: IPriceCheckbox,
      setCheckboxTag6: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
      checkboxTag7: IPriceCheckbox,
      setCheckboxTag7: React.Dispatch<React.SetStateAction<IPriceCheckbox>>,
  tags: Array<string>,
  setTags: React.Dispatch<React.SetStateAction<Array<string>>>,
  prices: Array<string>,
  setPrices: React.Dispatch<React.SetStateAction<Array<string>>>,
}

function TagsDropdown(props: IProps) {

  const { setTags, tags, checkboxTag1, checkboxTag2, checkboxTag3, checkboxTag4,
    checkboxTag5, checkboxTag6, checkboxTag7, setCheckboxTag1, setCheckboxTag2,
    setCheckboxTag3, setCheckboxTag4, setCheckboxTag5, setCheckboxTag6,
    setCheckboxTag7  } = props;

  return (
    <div>
      <p>by tags:</p>
      <div className='checkbox-container'>
      
      <input type="checkbox" id={staticTags[0]} name={staticTags[0]} 
            checked={checkboxTag1.isChecked} onClick={() => setCheckboxTag1({
              priceTag: staticTags[0], isChecked: !checkboxTag1.isChecked})}
            />
      <label htmlFor={staticTags[0]}>{staticTags[0]}</label>

      <input type="checkbox" id={staticTags[1]} name={staticTags[1]} 
            checked={checkboxTag2.isChecked} onClick={() => setCheckboxTag2({
              priceTag: staticTags[1], isChecked: !checkboxTag2.isChecked})}
            />
      <label htmlFor={staticTags[1]}>{staticTags[1]}</label>

      <input type="checkbox" id={staticTags[2]} name={staticTags[2]} 
            checked={checkboxTag3.isChecked} onClick={() => setCheckboxTag3({
              priceTag: staticTags[2], isChecked: !checkboxTag3.isChecked})}
            />
      <label htmlFor={staticTags[2]}>{staticTags[2]}</label>

      <input type="checkbox" id={staticTags[3]} name={staticTags[3]} 
            checked={checkboxTag4.isChecked} onClick={() => setCheckboxTag4({
              priceTag: staticTags[3], isChecked: !checkboxTag4.isChecked})}
            />
      <label htmlFor={staticTags[3]}>{staticTags[3]}</label>

      <input type="checkbox" id={staticTags[4]} name={staticTags[4]} 
            checked={checkboxTag5.isChecked} onClick={() => setCheckboxTag5({
              priceTag: staticTags[4], isChecked: !checkboxTag5.isChecked})}
            />
      <label htmlFor={staticTags[4]}>{staticTags[4]}</label>

      <input type="checkbox" id={staticTags[5]} name={staticTags[5]} 
            checked={checkboxTag6.isChecked} onClick={() => setCheckboxTag6({
              priceTag: staticTags[5], isChecked: !checkboxTag6.isChecked})}
            />
      <label htmlFor={staticTags[5]}>{staticTags[5]}</label>

      <input type="checkbox" id={staticTags[6]} name={staticTags[6]} 
            checked={checkboxTag7.isChecked} onClick={() => setCheckboxTag7({
              priceTag: staticTags[6], isChecked: !checkboxTag7.isChecked})}
            />
      <label htmlFor={staticTags[6]}>{staticTags[6]}</label>
     

      </div>
      </div>
  );
}

export default TagsDropdown;

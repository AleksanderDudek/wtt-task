
import TagsDropdown from './TagsDropdown';
import PriceDropdown from './PriceDropdown';
import { useState } from 'react';
import './StickyHeader.css';
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

function StickyHeader(props: IProps) {

  const {setTags, setPrices, tags, prices } = props;

  return (
    <div style={{padding: 10}}>
      <p className='caption'>
        WTT Recruitment Task
      </p>
      {/* this is collapsable */}
      <div className='header-parent'>
        <div className='header-container'>
        <TagsDropdown {...props} />
        <PriceDropdown {...props} />
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;


import TagsDropdown from './TagsDropdown';
import PriceDropdown from './PriceDropdown';
import { useState } from 'react';
import './StickyHeader.css';

interface IProps {
  tags: Array<string>,
  setTags: React.Dispatch<React.SetStateAction<string[]>> ,
  prices: Array<string>,
  setPrices: React.Dispatch<React.SetStateAction<string[]>>
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
        <TagsDropdown setTags={setTags} tags={tags} />
        <PriceDropdown setPrices={setPrices} prices={prices} />
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;

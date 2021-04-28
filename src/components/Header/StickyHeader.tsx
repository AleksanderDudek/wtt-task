
import TagsDropdown from './TagsDropdown';
import PriceDropdown from './PriceDropdown';

function StickyHeader() {


  return (
    <div>
      <div style={{alignContent: 'center'}}>
        WTT Recruitment Task
      </div>
      {/* this is collapsable */}
      <div>
        <div>

        </div>
        <div>
        <TagsDropdown />
        <PriceDropdown />
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;

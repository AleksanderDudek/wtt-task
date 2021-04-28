
import './Dropdowns.css';
const  priceAttrs =  ['<10$','10$-20$', '>20$'];

interface IProps {
  prices: Array<string>,
  setPrices: React.Dispatch<React.SetStateAction<string[]>>
}

function PriceDropdown(props: IProps) {

  const { prices, setPrices } = props;

  return (
    <div>
      <p>by price:</p>
      <div className='checkbox-container'>
      {
        priceAttrs.map( priceAttr =>
          <>
            <input type="checkbox" id={priceAttr} name={priceAttr} />
            <label htmlFor={priceAttr}>{priceAttr}</label>
          </>
          )
      }   
      </div>
    </div>
    
  );
}

export default PriceDropdown;

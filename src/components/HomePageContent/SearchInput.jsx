import { Input } from "react-daisyui";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SearchInput({ products = [] }) {

  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));

  return  <div className="relative w-80 p-4 font-sans">
            <Input placeholder="Search" className="w-full" value={searchValue} onChange={(event) => setSearchValue(event.target.value.trim())} />
            {filteredProducts.length > 0 && searchValue.length > 0 && (
            <ul className="absolute z-30 bg-teal-100 left-5 right-5">
              {filteredProducts.map((product) => {
                return (
                  <li key={product.id}>
                    <Link to={`/product/${product.id}`} className="block p-4 hover:bg-teal-200 hover:font-semibold">{product.title}</Link>
                  </li>
                );
              })}
              </ul>
              )}
          </div>;
}

export default SearchInput;

SearchInput.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
    })
  ),
};

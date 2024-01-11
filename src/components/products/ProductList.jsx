import PropTypes from 'prop-types';
import ProductItem from "./ProductItem";

function ProductList({ products = [] }) {
  return  (
    <div className="home__product-cards grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
          );
}

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

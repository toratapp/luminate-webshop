import PropTypes from 'prop-types';

function CartItem({ product }) {
  const { imageUrl, title, discountedPrice } = product;

  return (  
    <div className="flex gap-7 mb-10">
      <figure className="w-28">
        <img src={imageUrl} alt={title} />
      </figure>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p>${discountedPrice}</p>
      </div>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
  }).isRequired,
};

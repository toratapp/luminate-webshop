import { Button } from "react-daisyui";
import FirstHeading from "../common/FirstHeading";
import Review from "./Review";
import PropTypes from 'prop-types';
import SecondHeading from "../common/SecondHeading";
import { useCartActions } from '../cart/useCartStore';

function ProductInfo({ product }) {
  const { imageUrl, title, discountedPrice, price, description, reviews } = product;
  let priceInfo;
  const discount = ((price - discountedPrice) / price) * 100;
  const roundedDiscount = discount.toFixed(0);
  const { addToCart } = useCartActions();

  if (discountedPrice !== price) {
    priceInfo = (
      <>
        <p className="text-xl text-secondary">${discountedPrice}</p>
        <p className="text-sm">-{roundedDiscount}%</p>
        <p className="text-sm line-through text-gray-600">${price}</p>
      </>
    );
  } else {
    priceInfo = <p className="text-xl">${price}</p>;
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <img src={imageUrl} alt={title} />
        <div>
          <FirstHeading>{title}</FirstHeading>
          <div>
            {priceInfo}
            <p className="mt-10">{description}</p>
            <Button color="primary" className="mt-6" onClick={() => addToCart(product)}>Add to cart</Button>
          </div>
        </div>
      </div>
      <div className="product__reviews mt-24 md:mt-10">
        <SecondHeading>Reviews</SecondHeading>
        {reviews.length > 0 && (
          <div>
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        )}
        {reviews.length === 0 && (
          <p className="mt-6">This product does not have any reviews yet.</p>
        )}
      </div>
    </>
  );
}

export default ProductInfo;

ProductInfo.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

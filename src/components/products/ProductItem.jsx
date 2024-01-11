import PropTypes from 'prop-types';
import { Button, Card } from 'react-daisyui';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const { imageUrl, title, description, id, discountedPrice, price, } = product;
  const discount = ((price - discountedPrice) / price) * 100;
  const roundedDiscount = discount.toFixed(0);
  let priceInfo;

  if (discountedPrice !== price) {
    priceInfo = (
      <span className="flex items-center">
        <span className="flex-initial text-lg text-secondary">${discountedPrice}</span>
        <span className="flex-auto text-sm ml-3">-{roundedDiscount}%</span>
      </span>
    );
  } else {
    priceInfo = <span className="text-lg">${price}</span>;
  }

  return (
    <Card>
      <Link to={`product/${id}`}><Card.Image src={imageUrl} alt={title} /></Link>
      <Card.Body>
        <Link to={`product/${id}`}><Card.Title tag="h2">{title}</Card.Title></Link>
        <p>{description}</p>
        <p>{priceInfo}</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Buy</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

import PropTypes from 'prop-types';
import { Button, Card } from 'react-daisyui';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const { imageUrl, title, description, id } = product;

  return (
    <Card>
      <Link to={`product/${id}`}><Card.Image src={imageUrl} alt={title} /></Link>
      <Card.Body>
        <Link to={`product/${id}`}><Card.Title tag="h2">{title}</Card.Title></Link>
        <p>{description}</p>
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
  }).isRequired,
};

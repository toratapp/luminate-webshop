import PropTypes from 'prop-types';
import { Button, Card } from 'react-daisyui';
import missingImage from '/missing-img.jpg';

function ProductItem({ product }) {
  const { imageUrl, title, description } = product;

  return (
    <Card>
      <Card.Image src={imageUrl ? imageUrl : missingImage} alt={imageUrl ? title : "Placeholder image"} />
      <Card.Body>
        <Card.Title tag="h2">{title}</Card.Title>
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
  }).isRequired,
};

import PropTypes from 'prop-types';

function Review({ review }) {
  const { username, description, rating } = review;

  return (
    <div>
      <h3>{username}</h3>
      <p>Rating: {rating}/5</p>
      <p>{description}</p>
    </div>
  );
}

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    username: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

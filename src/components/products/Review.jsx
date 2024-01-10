import PropTypes from 'prop-types';

function Review({ review }) {
  const { username, description, rating } = review;

  return (
    <div>
      <h3 className="text-lg mt-6 font-semibold">{username}</h3>
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

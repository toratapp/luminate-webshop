import PropTypes from 'prop-types';

function SecondHeading(props) {
  return <h2 className="font-serif text-2xl">{props.children}</h2>;
}

export default SecondHeading;

SecondHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

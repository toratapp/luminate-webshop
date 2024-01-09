import PropTypes from 'prop-types';

function FirstHeading(props) {
  return <h1>{props.children}</h1>;
}

export default FirstHeading;

FirstHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

export const Description = ({ desc }) => (
  <p className='experience__description'>{desc}</p>
);

Description.propTypes = {
  desc: PropTypes.string.isRequired,
};

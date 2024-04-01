import PropTypes from 'prop-types';

export const AboutMe = ({ label, description }) => (
  <section className='profile section' id='profile'>
    <h2 className='section-title'>{label}</h2>
    <p className='profile__description'>{description}</p>
  </section>
);

AboutMe.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

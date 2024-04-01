import { Options } from './Options';
import PropTypes from 'prop-types';

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
}) => {
  // Component code here

  return (
    <section className='home' id='home'>
      <div className='home__container section bd-grid'>
        <div className='home__data bd-grid'>
          <img src={image} alt='profile_image' className='home__img' />
          <h1 className='home__title'>
            <strong>{name}</strong>
          </h1>
          <h3 className='home__profession'>{ocupation}</h3>
        </div>

        <div className='home__address bd-grid'>
          <span className='home__information'>
            <i className='bx bx-map home__icon' /> {location}
          </span>
          <span className='home__information'>
            <i className='bx bx-envelope home__icon' /> {email}
          </span>
          <span className='home__information'>
            <i className='bx bx-phone home__icon' /> {telephone}
          </span>
        </div>
      </div>
      <Options />
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  ocupation: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

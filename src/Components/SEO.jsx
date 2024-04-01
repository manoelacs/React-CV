import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const SEO = ({ name, ocupation, description }) => {
  return (
    <Helmet>
      <title>
        {name} - {ocupation}
      </title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  name: PropTypes.string.isRequired,
  ocupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

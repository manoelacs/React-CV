import PropTypes from 'prop-types';

export const SectionTopic = ({ children, key }) => {
  return (
    <div className='section-topic' key={key}>
      <div className='section-topic__time'>
        <span className='section-topic__rounder'></span>
        <span className='section-topic__line'></span>
      </div>
      {children}
    </div>
  );
};

SectionTopic.propTypes = {
  children: PropTypes.node.isRequired,
  key: PropTypes.string.isRequired,
};

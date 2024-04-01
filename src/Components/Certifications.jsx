import { Description } from './Description';

import PropTypes from 'prop-types';
import { SectionTopic } from './Layout/SectionTopic';

export const Certifications = ({ certifications }) => {
  return (
    <section className='certifications-experience section' id='certifications'>
      <h2 className='section-title'>Certifications</h2>
      <div className='experience__container bd-grid'>
        {certifications.map((certification) => (
          <Certification key={certification.company} {...certification} />
        ))}
      </div>
    </section>
  );
};

Certifications.propTypes = {
  certifications: PropTypes.array.isRequired,
};

const Certification = ({ title, courses }) => {
  return (
    <SectionTopic key='title'>
      <div className='experience__data bd-grid'>
        <h3 className='experience__title'>{title}</h3>

        {courses.map((course, i) => (
          <Description key={i} desc={course} />
        ))}
      </div>
    </SectionTopic>
  );
};

Certification.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
};

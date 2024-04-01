import { Description } from './Description';
import { SectionTopic } from './Layout/SectionTopic';

import PropTypes from 'prop-types';

export const Works = ({ works }) => {
  return (
    <section className='work-experience section' id='experience'>
      <h2 className='section-title'>Experience</h2>
      <div className='experience__container bd-grid'>
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      </div>
    </section>
  );
};

Works.propTypes = {
  works: PropTypes.array.isRequired,
};

const Work = ({ title, period, company, description }) => {
  return (
    <SectionTopic key={title}>
      <div className='experience__data bd-grid'>
        <h3 className='experience__title'>{title}</h3>
        <span className='experience__company'>
          {period} | {company}
        </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </SectionTopic>
  );
};

Work.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

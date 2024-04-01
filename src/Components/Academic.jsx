import { SectionTopic } from './Layout/SectionTopic';
import PropTypes from 'prop-types';

export const Academic = ({ academic }) => {
  return (
    <section className='academic-experience section' id='education'>
      <h2 className='section-title'>Education</h2>
      <div className='education__container bd-grid'>
        {academic.map((academy) => (
          <Academy key={academy.institution} {...academy} />
        ))}
      </div>
    </section>
  );
};

Academic.propTypes = {
  academic: PropTypes.array.isRequired,
};

const Academy = ({ career, date, institution, keys }) => {
  return (
    <div className='education__content'>
      <SectionTopic key={institution}>
        <div className='education__data bd-grid'>
          <h3 className='education__title'>{career}</h3>
          <span className='education__year'>{date}</span>
          <span className='education__studies'>{institution}</span>
          <div className='education__keys skills__content'>
            <span className='education__keys__title'>{keys.title}</span>
            <ul className='skills__data education__keys__content'>
              {keys.items.map((item, index) => (
                <Keys {...item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </SectionTopic>
    </div>
  );
};

Academy.propTypes = {
  career: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  keys: PropTypes.array.isRequired,
};

const Keys = ({ title, topics }) => {
  return (
    <div className='skills__content'>
      <span className='education__key__title'>{title}</span>
      <ul className='education__key__content'>
        {topics.map((topic) => (
          <li className='education__key__name' key={topic}>
            <span className='education__key__circle' /> {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

Keys.propTypes = {
  title: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};

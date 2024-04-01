import React from 'react';
import { Description } from './Description';

import PropTypes from 'prop-types';

export const Projects = ({ projects }) => {
  return (
    <section className='proyects-experience section' id='proyects'>
      <h2 className='section-title'>Projects</h2>
      <div className='experience__container bd-grid'>
        {projects.map((project) => (
          <Project key={project.company} {...project} />
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

const Project = ({ name, company, period, description }) => {
  return (
    <div className='experience__content'>
      <div className='experience__time'>
        <span className='experience__rounder'></span>
        <span className='experience__line'></span>
      </div>
      <div className='experience__data bd-grid'>
        <h3 className='experience__title'>
          {name} - {company}
        </h3>
        <span className='experience__proyect'>{period}</span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};

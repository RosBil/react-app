import React from 'react';
import PropTypes from 'prop-types';

import './CourseCard.css';

import { Button } from '../../../../common/Button/Button';

const CourseCard = ({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
}) => (
  <li key={id} className='course'>
    <div className='course-card'>
      <div className='description'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <p>
          <strong>Authors:</strong> {authors}
        </p>
        <p>
          <strong>Duration:</strong>{' '}
          {` ${Math.floor(duration / 60)}: 
                ${
                  duration % 60 <= 10 ? '0' + (duration % 60) : duration % 60
                } `}
          hours
        </p>
        <p>
          <strong>Created:</strong> {creationDate}
        </p>
        {Button({ text: 'Show course' })}
      </div>
    </div>
  </li>
);

CourseCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  creationDate: PropTypes.string,
  duration: PropTypes.number,
  authors: PropTypes.array,
};

CourseCard.defaultProps = {
  id: '',
  title: 'Here should be a title',
  description: '',
  creationDate: '',
  duration: 0,
  authors: [],
};

export default CourseCard;

import React, { Component, Fragment } from 'react';

import './Courses.css';
import CourseCard from './components/CourseCard/CourseCard';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { CreateCourse } from '../CreateCourse/CreateCourse';

export class Courses extends Component {
  state = {
    courses: [],
    searchQuery: '',
    showCreatePage: false,
  };

  componentDidMount() {
    // const coursesList = mockedCoursesList;
    this.setState({
      courses: mockedCoursesList,
    });
    // console.log('State', this.state);
  }

  handleClickAddCourse = (e) => {
    e.preventDefault();
    this.setState({
      showCreatePage: true,
    });
  };

  render() {
    const authorsById = mockedAuthorsList.reduce((acc, current) => {
      acc[current.id] = current.name;
      return acc;
    }, {});

    const { courses } = this.state;
    console.log('courses==', this.state);

    return this.state.showCreatePage ? (
      <Fragment>
        <CreateCourse />
      </Fragment>
    ) : (
      <Fragment>
        <section className='bar'>
          <SearchBar />
          <Button onClick={this.handleClickAddCourse} text='Add new course' />
        </section>

        <ul className='coursesList'>
          {courses.map(
            ({ id, title, description, creationDate, duration, authors }) => (
              <CourseCard
                key={id}
                title={title}
                authors={authors.map((id) => {
                  let author = authorsById[id] || '';
                  let authorList = [];
                  authorList.push(author, ', ');

                  return authorList;
                })}
                creationDate={creationDate}
                description={description}
                duration={duration}
              />
            )
          )}
        </ul>
      </Fragment>
    );
  }
}

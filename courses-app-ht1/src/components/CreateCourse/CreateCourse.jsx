import React, { Component } from 'react';
import uuid from 'react-uuid';

import './CreateCourse.css';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';

export class CreateCourse extends Component {
  state = {
    inputTitle: '',
    textareaDescription: '',
    inputAuthor: '',
    inputDuration: '',
    showCreatePage: '',
    course: {
      id: '',
      title: '',
      description: '',
      author: '',
      duration: '',
      creationDate: '',
    },
    authorList: {
      id: '',
      name: '',
    },
  };

  handleAddInputChange = (event) => {
    switch (event.target.name) {
      case 'title':
        this.setState({
          inputTitle: event.target.value,
        });
        break;
      case 'description':
        this.setState({
          textareaDescription: event.target.value,
        });
        break;
      case 'author':
        this.setState({
          inputAuthor: event.target.value,
        });
        break;
      case 'duration':
        this.setState({
          inputDuration: event.target.value,
        });
        break;
      default:
        console.log('this.state');
    }
  };

  handleClickCreateCourse = (e) => {
    e.preventDefault();
    const { inputTitle, textareaDescription, inputAuthor, inputDuration } =
      this.state;
    this.setState({
      inputTitle: '',
      textareaDescription: '',
      inputAuthor: '',
      inputDuration: '',
      showCreatePage: false,
      course: {
        id: uuid(),
        title: inputTitle,
        description: textareaDescription,
        author: inputAuthor,
        duration: inputDuration,
        creationDate: Date(),
      },
    });
    mockedCoursesList.push(this.state.course);
    console.log('this.state', this.state);
  };

  // handleAddAuthor = (e) => {
  //   const currentAuthorList = [];
  //
  // };

  render() {
    const { inputTitle, textareaDescription, inputAuthor, inputDuration } =
      this.state;
    // const { title, description, author, duration } = this.course;

    return (
      <form>
        <div className='title-area'>
          <div>
            <Input
              type='text'
              name='title'
              value={inputTitle}
              labelText='Title'
              placeholder='Enter title...'
              onChange={this.handleAddInputChange}
              required
            />
          </div>
          <Button
            type='submit'
            text='Create course'
            onClick={this.handleClickCreateCourse}
          />
        </div>
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          value={textareaDescription}
          placeholder='Enter description'
          onChange={this.handleAddInputChange}
          required
        ></textarea>
        <div className='author-area'>
          <div className='add-author'>
            <h3>Add author</h3>
            <Input
              type='text'
              name='author'
              value={inputAuthor}
              labelText='Author name'
              placeholder='Enter author name...'
              onChange={this.handleAddInputChange}
              required
            />
            <Button text='Create author' />
            <h3>Duration</h3>
            <Input
              type='text'
              labelText='Duration'
              name='duration'
              value={inputDuration}
              placeholder='Enter duration in minutes...'
              onChange={this.handleAddInputChange}
              required
            />
            <h2>
              Duration
              <span>
                {` ${Math.floor(inputDuration / 60)}: 
                ${
                  inputDuration % 60 <= 10
                    ? '0' + (inputDuration % 60)
                    : inputDuration % 60
                } `}
              </span>
              hours
            </h2>
          </div>
          <div className='author-list'>
            <h3>Authors</h3>
            <ul className='authors-list'>
              {mockedAuthorsList.map(({ name }) => (
                <li key={uuid()}>
                  {name}
                  <Button text='Add author' />
                </li>
              ))}
            </ul>
            <h3>Course authors</h3>
            <ul className='authors-list'>
              <li>
                Author list is empty
                <Button text='Delete author' />
              </li>
            </ul>
          </div>
        </div>
      </form>
    );
  }
}

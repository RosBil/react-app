import React, { Component } from 'react';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import { mockedCoursesList } from '../../../../constants';

export class SearchBar extends Component {
  searchTimeout;
  state = {
    courses: [],
    searchQuery: '',
    somenew: '',
  };

  handleInputChange = ({ target: { value } }) => {
    const { searchQuery } = this.state;
    if (value) {
      this.setState({
        courses: this.filterData(searchQuery),
        searchQuery: value,
      });
    } else {
      this.setState({
        courses: mockedCoursesList,
        searchQuery: value,
      });
    }
    console.log('State', this.state);
    if (!value.trim()) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => this.filterData(), 500);
    }
  };

  getSearch = (event) => {
    if (!event?.key || event.key.toLowerCase() === 'enter') {
      const { searchQuery } = this.state;
      this.filterData(searchQuery);
    }
  };

  filterData = (searchQuery = '') => {
    const lowerQuery = searchQuery.toLowerCase();

    const filteredList = mockedCoursesList.filter((item) => {
      return (
        item.id.toLocaleLowerCase().includes(lowerQuery) ||
        item.title.toLocaleLowerCase().includes(lowerQuery)
      );
    });
    return filteredList;
  };

  render() {
    return (
      <div className='search-form'>
        <Input
          placeholder={'Enter course name or id...'}
          onChange={this.handleInputChange}
          onKeyPress={this.getSearch}
        />
        <Button text='Search' onClick={this.getSearch} />
      </div>
    );
  }
}

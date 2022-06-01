import React, { Fragment } from 'react';

import './App.css';
import Header from './components/Header/Header';
import { Courses } from './components/Courses/Courses';

const App = () => (
  <Fragment>
    <Header />
    <div className='App'>
      <Courses />
    </div>
  </Fragment>
);

export default App;

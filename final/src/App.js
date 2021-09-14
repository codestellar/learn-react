import React, { Fragment } from 'react';
import './style.css';
import Header from './components/Header';

export default function App() {
  const name = 'Gaurav';
  const x = 0;

  return (
    <Fragment>
      <Header title="Task Tracker App" />
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* This is how you add comment and the following is the if else*/}
      <p>{x == 0 ? 'Yay!' : 'No'}</p>
    </Fragment>
  );
}

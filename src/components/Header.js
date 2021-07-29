import React from 'react';

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};


// This is how you can set the default properties
Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header;

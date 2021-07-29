import React from 'react';
// Just in case to want
import PropTypes from 'prop-types';

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

Header.propTypes = {
  title: PropTypes.number
};

export default Header;

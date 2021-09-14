import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React, { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

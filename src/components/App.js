import React, { Component } from 'react';
import {
  Container,
  Row,
} from 'reactstrap';
import Header from './Header';
import Menubar from './Menubar';
import Jumbotron from './Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menubar />
        <Jumbotron />
        </React.Fragment>
        
      
    );
  }
}

export default App;

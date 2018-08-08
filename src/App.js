import React, { Component } from 'react';
import Contacts from './Contacts';
import Header from './Header';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header branding="Contact Manager"/>
         <div className="container">
          <Contacts></Contacts>
         </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './pages/homepage/homepage.styles.scss';

import HomePage from './pages/homepage/homepage';

class App extends Component {
  render() {
   
    return <div className='App'>
            <HomePage/>
           </div>;
    
  }
}

export default App;

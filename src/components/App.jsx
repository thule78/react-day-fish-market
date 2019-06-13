import React, {Component} from 'react';

import StorePicker from './StorePicker';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component{
  render(){
    return(
      <div className="container">
        <h1>Day Fish Market</h1>
        <StorePicker />
        <Header tagline="Fresh Food Market"/>
        <Order />
        <Inventory />
      </div>

      )
  }
}

export default App

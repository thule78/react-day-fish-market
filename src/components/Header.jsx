import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
        <div>
          <header className="top">
          <h1>Catch Of The Day</h1>
          </header>
          <h3 className="tagline">
            <span>{this.props.tagline}</span>
          </h3>
        </div>

      )
  }
}

export default Header;

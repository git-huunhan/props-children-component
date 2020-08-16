import React, { Component } from 'react';
import '../css/Main.css';

class Header extends Component {
  render(){
    const {title, children} = this.props;

    return (
      <div className="Header">
        <p>{title}</p>
        <button>{children}</button>
      </div>
    
    );
  }
}

export default Header;

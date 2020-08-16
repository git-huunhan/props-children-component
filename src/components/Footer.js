import React, { Component } from 'react';
import '../css/Main.css';

class Footer extends Component {
  render(){
    const {children} = this.props;

    return (
      <div className="Footer">
        <button>{children}</button>
      </div>
    );
  }
}

export default Footer;

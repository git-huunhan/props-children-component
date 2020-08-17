import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
}

export default Header;

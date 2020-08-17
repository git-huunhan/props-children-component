import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Footer.propTypes = {
  children: PropTypes.string
};

export default Footer;

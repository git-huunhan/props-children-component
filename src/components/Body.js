import React, { Component } from 'react';
import '../css/Main.css';
import Logo from '../img/logo.svg';
import dropDownImg from '../img/drop-down.svg';

class Body extends Component {
  render(){
    const { title, children, drop } = this.props;

    return (
      <div className="Body">
        <div className="Logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="Content">
          <h5>{title}</h5>
          <p>{children}M</p>
          <div className="dropDown">
            <img src={dropDownImg} alt="dropImg"></img>
            <p>{drop}% less earnings</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;

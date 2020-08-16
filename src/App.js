import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      title: 'Cash Diposits', 
      number: 1.7, 
      drop: 54.1   
    }
  }
  
  render(){
    return (
      <div className="App">
        <Header title="Profolio Perfomance">
          View all    
        </Header>
        <div className="Main">
          <Body title={this.state.title} drop={this.state.drop}>
            {this.state.number}
          </Body>
          <Body title={this.state.title} drop={this.state.drop}>
            {this.state.number}
          </Body>
          <Body title={this.state.title} drop={this.state.drop}>
            {this.state.number}
          </Body>
        </div>
        <Footer>
          View complete report
        </Footer>
      </div>
    );
  }
}

export default App;

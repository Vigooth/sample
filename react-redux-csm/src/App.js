import React, { Component } from 'react';
import logo from './logo.svg';
import AddName from './containers/AddName'
import VisibleNameList from './containers/VisibleNameList'
import Counter from './containers/Counter'
import VisibleCounter from './containers/VisibleCounter'
import './App.css';

class App extends Component {

  submit = (e) =>{
    e.preventDefault();
    console.log(this.input.value)
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <AddName/>
        </header>
        <VisibleNameList/>
        <Counter/>
        <VisibleCounter/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

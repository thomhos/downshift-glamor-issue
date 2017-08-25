import React, { Component } from 'react';
import glamorous from 'glamorous';
import logo from './logo.svg';
import './App.css';
import { fontFace } from 'glamor';
import { Dropdown } from './dropdown';

fontFace({
  fontFamily: 'Lora',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url('${require('./fonts/Lora.woff')}')`,
});

const CenterDiv = glamorous.div({
  display: 'flex',
  height: '400px',
  width: '400px',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'center',
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Flashing dom on first click demo..
        </p>
        <CenterDiv>
          <Dropdown label="Select something" options={['one', 'two', 'three']} />
        </CenterDiv>
      </div>
    );
  }
}

export default App;

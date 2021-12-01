import { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default Calculator;

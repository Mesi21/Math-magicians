import { Component } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
  }

  handleClick = (btnName) => {
    const { total, next, operation } = calculate(this.state, btnName);
    this.setState({ total, next, operation });
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div id="app">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;

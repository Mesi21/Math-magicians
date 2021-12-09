import { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (btnName) => {
    const curRes = calculate({ total, next, operation }, btnName);
    setTotal(curRes.total);
    setNext(curRes.next);
    setOperation(curRes.operation);
  };

  return (
    <div id="app">
      <div id="left">
        <h1>Let&lsquo;s do some math!</h1>
      </div>
      <div id="right">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;

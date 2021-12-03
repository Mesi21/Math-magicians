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
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';

function Calculator() {
  return (
    <div id="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default Calculator;

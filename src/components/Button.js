import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button({
  btnName, color, wide, clickHandler,
}) {
  const color2 = 'lightGray';
  const handleClick = () => clickHandler(btnName);

  const buttonStyle = {
    width: wide ? '50%' : '25%',
    backgroundColor: (btnName === 'x'
      || btnName === '÷' || btnName === '-' || btnName === '+'
      || btnName === '=') ? color : color2,
    border: '1px solid #A0A0A0',
  };
  return <button type="button" onClick={handleClick} style={buttonStyle}>{btnName}</button>;
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: '#FF7F50',
};

export default Button;

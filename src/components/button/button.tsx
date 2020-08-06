import * as React from 'react';
import cn from 'classnames';
import { ButtonProps } from '../../../dist/meta/react';
import './button.scss';

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'md',
  disabled = false,
  outlined = false,
  children,
  handleClick,
  icon,
}: ButtonProps) => {
  const classes = cn(
    'ex-button',
    `ex-button-${size}`,
    disabled && `disabled`,
    outlined ? `btn-outline-${type}` : `btn-${type}`,
    {},
  );
  return (
    <button
      type="button"
      className={classes}
      onClick={(event) => handleClick()}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;

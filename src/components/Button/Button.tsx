import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss'

type ButtonProps = {
  /** The text to display in your button */
  text: string,
  /** An optional classname can be provided to style the button to your liking */
  className?: string
  /** An optional callback function for the button click event */
  handleBtnClick?: () => void,
}

const Button = ({ handleBtnClick, text, className }: ButtonProps) => {
  const [toggled, setToggled] = useState(false);
  const cn = classnames.bind(styles);
  
  const handleClick = () => {
    !!handleBtnClick && handleBtnClick();
    setToggled(!toggled);
  }

  const buttonClasses = cn(styles['morpheus-button'], {
    [styles['morpheus-button--toggled']]: toggled,
  }, className)

  return (
      <button className={buttonClasses} onClick={handleClick}>
        {text}
      </button>
  )
}

export default Button;

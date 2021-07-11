import React from 'react';
import classes from './Button.module.css';
import ButtonCard from './ButtonCard';

const Button = (props) => {
    return (
       <ButtonCard>
         <button 
            className={classes.button} 
            type={props.type || 'button'} 
            onClick={props.onClick} 
            disabled={props.disabled}>
            {props.children}
         </button>
       </ButtonCard>
    )
};

export default Button;
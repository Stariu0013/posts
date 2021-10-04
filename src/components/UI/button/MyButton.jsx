import React from 'react';
import buttonStyle from './MyButton.module.css';

function MyButton({children, ...props}) {
    return <button {...props} className={buttonStyle.myButton}>
        {children}
    </button>
}
export default MyButton;
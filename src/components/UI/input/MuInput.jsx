import React from 'react';
import inputStyle from './MyInput.module.css';

function MyInput(props) {
    return <input {...props} className={inputStyle.myInput}/>
}

export default MyInput;
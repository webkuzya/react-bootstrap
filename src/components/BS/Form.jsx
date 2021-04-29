import React from 'react';
import cn from './Form.module.css'

export default function Form(props) {
    return (
        <form className={cn.form} style={props.style}>
            {props.children}
        </form>
    );
};
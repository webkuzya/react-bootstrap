import React from 'react';

export default function Checkbox(props) {
    const id = `checkbox-${Date.now()}-id`

    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id={id}/>

            {props.label &&
            <label className="form-check-label" htmlFor={id}>{props.label}</label>}
        </div>
    );
};
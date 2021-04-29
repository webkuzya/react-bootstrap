import React from 'react';
import {genID} from 'utils/utils'

export default function ColorPicker(props) {
    const id = genID('input', 'color')

    return (
        <div>
            <label htmlFor={id} className="form-label">{props.label}</label>
            <input
                type="color"
                className="form-control form-control-color"
                id={id}
                value={props.value || '#000000'}
                title="Choose your color"
                onChange={props.onChange}
            />
        </div>
    );
};
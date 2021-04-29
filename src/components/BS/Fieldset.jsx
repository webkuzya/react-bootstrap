import React from 'react';
import PropTypes from 'prop-types'

function Fieldset(props) {
    return (
        <fieldset disabled={props.disabled}>
            {props.legend && <legend>{props.legend}</legend>}
            {props.children}
        </fieldset>
    );
}

Fieldset.propTypes = {
    legend: PropTypes.string,
    disabled: PropTypes.bool
}

export default Fieldset;

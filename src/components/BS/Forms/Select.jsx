import React from 'react';
import PropTypes from 'prop-types'
import cn, {genID} from "../../../utils/utils";

const Select = props => {
    const id = genID()

    return (
        <div>
            {props.label &&
            <label htmlFor={id}>{props.label}</label>}
            <select
                className={cn({
                    "form-select": true,
                    ["form-select-" + props.sizeVariant]: props.sizeVariant,
                })}
                id={id}
                multiple={props.multiple}
                size={props.size}
                disabled={props.disabled}
            >
                {Array.isArray(props.options) && props.options.map((item, index) =>
                    <option key={index} value={item.value}>{item.label}</option>
                )}
            </select>
        </div>
    );
}

Select.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    sizeVariant: PropTypes.oneOf(['sm', 'lg']),
    multiple: PropTypes.bool,
    size: PropTypes.number,
    disabled: PropTypes.bool,
}

export default Select

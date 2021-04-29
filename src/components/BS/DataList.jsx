import React from 'react';
import {genID} from "utils/utils";
import PropTypes from 'prop-types'

function DataList(props) {
    const id = genID()

    return (
        <div>
            <label htmlFor={id} className="form-label">{props.label}</label>
            <input className="form-control" list={"datalistOptions"+id} id={id} placeholder={props.placeholder}/>
                <datalist id={"datalistOptions"+id}>
                    {Array.isArray(props.datalist) && props.datalist.map((val, index) =>
                        <option key={index} value={val}/>
                    )}
                </datalist>
        </div>
    );
}

DataList.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    datalist: PropTypes.array
}

export default DataList
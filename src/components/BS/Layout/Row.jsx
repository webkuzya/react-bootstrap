import React from 'react';
import PropTypes from 'prop-types'
import {cn} from 'utils/utils'

function Row(props) {
    return (
        <div className={cn({
            row: true,
            ['gy-'+props.gapY]: props.gapY,
        })}>
            {props.children}
        </div>
    );
}

Row.propTypes = {
    gapX: PropTypes.number,
    gapY: PropTypes.number,
}

export default Row
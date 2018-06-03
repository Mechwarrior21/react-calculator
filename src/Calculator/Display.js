import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => (
    <div className="mt-md-2">
        <div className="h4">{props.expression}</div>
        <div className="display text-right pr-2 h3 d-md-none d-sm-block pt-5">{props.value}</div>
        <div className="display text-right pr-2 h1 d-none d-lg-none d-md-block pt-4">{props.value}</div>
        <div className="display text-right pr-2 display-4 d-none d-lg-block pt-4">{props.value}</div>
    </div>
);

Display.defaultProps = {
    expression: '',
    value: '0'
};

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

export default Display;

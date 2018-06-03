import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = (props) => (
    <div className="control-panel">
        <button className="btn btn-block text-secondary" disabled={!props.anyHistory} onClick={props.onToggleHistory}></button>
    </div>
);

ControlPanel.defaultProps = {
    anyHistory: false,
    onToggleHistory: () => alert('toggle history')
};

ControlPanel.propTypes = {
    anyHistory: PropTypes.bool,
    onToggleHistory: PropTypes.func
};

export default ControlPanel;

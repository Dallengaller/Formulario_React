// Alert.jsx
import React from 'react';

const Alert = ({ children, color = "info" }) => {
    return (
        <div className={`alert alert-${color} my-2`}>{children}</div>
    );
};

export default Alert;

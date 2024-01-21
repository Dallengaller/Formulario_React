// SocialButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ icon, link }) => {
    return (
        <a href={link} target="_blank">
            <div className="icon-container rounded-circle border border-black d-flex align-items-center justify-content-center mx-2" style={{ width: '50px', height: '50px', margin: '0', padding: '0' }}>
                <FontAwesomeIcon icon={icon} />
            </div>
        </a>
    );
};

export default SocialButton;

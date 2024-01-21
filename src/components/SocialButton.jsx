// SocialButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ icon, link }) => {
    return (
        <a href={link} target="_blank">
            <div className="icon-container border border-black rounded-circle py-2 px-3">
                <FontAwesomeIcon icon={icon} />
            </div>
        </a>
    );
};

export default SocialButton;

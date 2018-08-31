import React from 'react';
import { SocialIcon } from 'react-social-icons';


const SocialLink = ({ url, display }) => {
    const linkProperties = {
        target: '_blank',
        rel: 'noopener noreferrer',
    };
    return (
        <div>
            <SocialIcon {...linkProperties} url={url}/> { display !== undefined ? <a {...linkProperties} href={url}>{display}</a> : null }
        </div>
    );
};

export default SocialLink;
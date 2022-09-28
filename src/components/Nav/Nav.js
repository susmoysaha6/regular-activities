import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <div className='nav'>
            <h4 className='nav-title'><FontAwesomeIcon icon={faPersonRunning} /> Regular Acitivities</h4>
        </div>
    );
};

export default Nav;
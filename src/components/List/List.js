import React from 'react';
import './List.css';
import my from '../../images/my.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



const List = () => {
    return (
        <div className='list-container'>

            <div className='personal-info'>
                <img src={my} alt="" />
                <div>
                    <p className='user-name' >Susmoy</p>
                    <p className='user-address'> <small><FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon>  272, Bazar Road, Barishal </small></p>
                </div>
            </div>
            <div className="info-container">
                <div>
                    <h2>75<small>kg Weight</small></h2>

                </div>
                <div>
                    <h2>5.7<small>" Height</small></h2>
                </div>
                <div>
                    <h2>27<small>yrs Age</small></h2>
                </div>
            </div>
        </div>

    );
};

export default List;
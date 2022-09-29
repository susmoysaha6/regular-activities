import React from 'react';
import './List.css';
import my from '../../images/my.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';



const List = () => {
    const handleCompleted = () => {
        toast("Activity Completed For Today");
    }
    return (
        <div className='list-container'>
            <div className='personal-info'>
                <img src={my} alt="" />
                <div>
                    <h4 className='user-name' >Susmoy Saha</h4>
                    <p className='user-address'> <small><FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon>  272, Bazar Road, Barishal </small></p>
                </div>
            </div>
            <div className="info-container">
                <div className='info'>
                    <h4 >75<small>kg Weight</small></h4>

                </div>
                <div className='info'>
                    <h4>5.7<small>" Height</small></h4>
                </div>
                <div className='info'>
                    <h4>27<small>yrs Age</small></h4>
                </div>
            </div>
            <div>
                <h3>Add A Break</h3>
                <div className='break-container'>
                    <button className='break-btn'>15m</button>
                    <button className='break-btn'>20m</button>
                    <button className='break-btn'>30m</button>
                    <button className='break-btn'>45m</button>
                    <button className='break-btn'>60m</button>
                </div>
            </div>
            <div>
                <h3>Activity Details</h3>
                <div className='time-container'>
                    <h3>Activity Time</h3>
                    <p>0</p>
                </div>
                <div className='time-container'>
                    <h3>Break Time</h3>
                    <p>0</p>
                </div>
            </div>
            <button onClick={handleCompleted} className='completed-btn'>Activity Completed</button>
        </div>

    );
};

export default List;
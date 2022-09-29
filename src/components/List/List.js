import React, { useEffect, useState } from 'react';
import './List.css';
import my from '../../images/my.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';



const List = ({ time }) => {
    const [addBreak, setAddBreak] = useState(0);
    useEffect(() => {
        const breakTime = localStorage.getItem('break-time');
        setAddBreak(breakTime ? breakTime : 0);
    }, []);
    const handleAddBreak = (breakTime) => {
        setAddBreak(breakTime);
        localStorage.setItem('break-time', breakTime);
    };

    const handleCompleted = () => {
        toast("Activity Completed For Today");
    };
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
                    <button onClick={() => handleAddBreak(15)} className='break-btn'>15m</button>
                    <button onClick={() => handleAddBreak(20)} className='break-btn'>20m</button>
                    <button onClick={() => handleAddBreak(30)} className='break-btn'>30m</button>
                    <button onClick={() => handleAddBreak(45)} className='break-btn'>45m</button>
                    <button onClick={() => handleAddBreak(60)} className='break-btn'>60m</button>
                </div>
            </div>
            <div>
                <h3>Activity Details</h3>
                <div className='time-container'>
                    <h3>Activity Time</h3>
                    <h4>{time} hrs</h4>
                </div>
                <div className='time-container'>
                    <h3>Break Time</h3>
                    <h5>{addBreak} min</h5>
                </div>
            </div>
            <button onClick={handleCompleted} className='completed-btn'>Activity Completed</button>
        </div>

    );
};

export default List;
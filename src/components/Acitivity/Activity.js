import React from 'react';
import './Activity.css';

const Activity = ({ activity, time, setTime }) => {
    const { activityImg, acitivityDes, acitivityName, acitivityDuration } = activity;
    const handleAddToList = (acitivityDuration) => {
        let times = parseFloat(time) + acitivityDuration;
        setTime(times);
        console.log(times);
    };
    return (
        <div className='card'>
            <img className="card-img" src={activityImg} alt="" />
            <h4 className='card-details'>{acitivityName}</h4>
            <p className='card-details'> <small >{acitivityDes}</small></p>
            <p className='card-details'>Duration: {acitivityDuration} hrs</p>
            <button onClick={() => handleAddToList(acitivityDuration)} className='list-btn'>Add to List</button>
        </div>
    );
};

export default Activity;
import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
    const { activityImg, acitivityDes, acitivityName, acitivityDuration } = activity;
    return (
        <div className='card'>
            <img className="card-img" src={activityImg} alt="" />
            <h4 className='card-details'>{acitivityName}</h4>
            <p className='card-details'> <small >{acitivityDes}</small></p>
            <p className='card-details'>Duration: {acitivityDuration} hrs</p>
            <button className='list-btn'>Add to List</button>
        </div>
    );
};

export default Activity;
import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
    const { activityImg, acitivityDes, acitivityName, acitivityDuration } = activity;
    console.log(activity);

    // console.log(props.activity);
    return (
        <div className='card'>
            <img width={200} src={activityImg} alt="" />
            <h4>{acitivityName}</h4>
            <p><small>{acitivityDes}</small></p>
            <p>{acitivityDuration}hrs</p>
            <button>Add to List</button>
        </div>
    );
};

export default Activity;
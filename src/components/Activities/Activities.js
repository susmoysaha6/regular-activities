import React from 'react';
import './Activities.css';
import Activity from '../Acitivity/Activity';

const Activities = ({ activities, time, setTime }) => {
    return (
        <div className='activities-container'>
            <h3 className='activities-heading'>Select Regular Activities</h3>
            <div className='card-continer'>
                {
                    activities.map(activity => <Activity key={activity.id} activity={activity} time={time} setTime={setTime} ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;
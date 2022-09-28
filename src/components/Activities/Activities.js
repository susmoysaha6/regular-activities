import React from 'react';
import './Activities.css'
import Activity from '../Acitivity/Activity';

const Activities = ({ activities }) => {
    // console.log(activities);
    return (
        <div>
            <h1>Select your Regular</h1>
            {
                activities.map(activity => <Activity key={activity.id} activity={activity} ></Activity>)
            }
        </div>
    );
};

export default Activities;
import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import List from '../List/List';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);
    return (
        <div className='home'>
            <div className="main-container">
                <Nav></Nav>
                <Activities activities={activities} time={time} setTime={setTime}></Activities>
            </div>
            <div className="list-container">
                <List time={time}></List>
            </div>
        </div>
    );
};

export default Home;
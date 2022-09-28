import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import List from '../List/List';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);
    return (
        <div className='home'>
            <div className="main-container">
                <Nav></Nav>
                <div>
                    <Activities activities={activities}></Activities>
                </div>
            </div>
            <div className="list-container">
                <List></List>
            </div>
        </div>
    );
};

export default Home;
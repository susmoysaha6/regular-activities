import React from 'react';
import Activities from '../Activities/Activities';
import List from '../List/List';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="main-container">
                <Nav></Nav>
                <Activities></Activities>
            </div>
            <div className="list-container">
                <List></List>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Activities from '../Activities/Activities';
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
                <h1>This is from list</h1>
            </div>
        </div>
    );
};

export default Home;
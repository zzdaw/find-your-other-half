import React from 'react';
import photo from '../images/transparent.png';

const HomePage = () => {
    return (
        <div className='homePage'>
            <h1>Welcome to website where you can find your other half</h1>
            <img src={photo} alt="" className='startImg' />
        </div>
    );
}

export default HomePage;
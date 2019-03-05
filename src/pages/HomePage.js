import React from 'react';
import photo from '../images/transparent.png';

const HomePage = () => {
    return (
        <>
            <h1>Welcome to website where you can find your other half</h1>
            <img src={photo} alt="photo" className='startImg' />
        </>
    );
}

export default HomePage;
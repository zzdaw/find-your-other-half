import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';
import header1 from '../images/img1.jpg';
import header2 from '../images/img2.jpg';
import header3 from '../images/img3.jpg';
import header4 from '../images/img4.jpg';
import header5 from '../images/img5.jpg';

const Header = () => {
    return (
        <Switch>
            <Route path='/' exact render={() => (
                <img src={header1} alt='img' />
            )} />
            <Route path='/male' render={() => (
                <img src={header2} alt='img' />
            )} />
            <Route path='/female' render={() => (
                <img src={header3} alt='img' />
            )} />
            <Route path='/contact' render={() => (
                <img src={header4} alt='img' />
            )} />
            <Route path='/sign' render={() => (
                <img src={header5} alt='img' />
            )} />
            <Route render={() => (
                <img src={header1} alt='img' />
            )} />
        </Switch>
    );
}

export default Header;
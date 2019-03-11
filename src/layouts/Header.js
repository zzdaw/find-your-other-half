import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import '../styles/_Header.scss';
import header1 from '../images/img1.jpg';
import header2 from '../images/img2.jpg';
import header3 from '../images/img3.jpg';
import header4 from '../images/img4.jpg';
import header5 from '../images/img5.jpg';

// class Header extends React.Component {
//     state = {
//         index: 0,
//     }
//     componentDidMount() {
//         setInterval(() => {
//             this.setState({
//                 index: Math.floor(Math.random() * 5),
//             })
//         }, 10000)
//     }
//     render() {
//         const images = [header1, header2, header3, header4, header5];
//         return (
//             <img src={images[this.state.index]} alt="img" />
//         )
//     }
// }

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
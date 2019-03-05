import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import MalePage from '../pages/MalePage'
import FemalePage from '../pages/FemalePage'
import ContactPage from '../pages/ContactPage'
import SignPage from '../pages/SignPage'
import ErrorPage from '../pages/ErrorPage'

// const Page = () => {
//     return (
//         <Switch>
//             <Route path='/' exact component={HomePage} />
//             <Route path='/male' component={MalePage} />
//             <Route path='/female' component={FemalePage} />
//             <Route path='/contact' component={ContactPage} />
//             <Route path='/sign' component={SignPage} />
//             <Route component={ErrorPage} />
//         </Switch>
//     );
// }

const API = 'https://randomuser.me/api/?results=20'

class Page extends React.Component {
    state = {
        users: [],
    }
    componentDidMount() {
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    users: data.results,
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/male' component={(props) => <MalePage {...props} users={this.state.users} />} />
                <Route path='/female' component={(props) => <FemalePage {...props} users={this.state.users} />} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/sign' component={SignPage} />
                <Route component={ErrorPage} />
            </Switch>
        )
    }
}

export default Page;
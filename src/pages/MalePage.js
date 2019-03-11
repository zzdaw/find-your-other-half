import React from 'react';
import { Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const API = 'https://randomuser.me/api/?results=10&gender=male';

class MalePage extends React.Component {
    state = {
        maleUsers: [],
        //permission: false,
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
                    maleUsers: data.results,
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        AOS.init({ duration: 1200 });
        let users = this.state.maleUsers.map(user => {
            return < div key={user.login.uuid} className='male' data-aos="fade-right" >
                <div className='photo'>
                    <img src={user.picture.large} alt="img" />
                </div>
                <div className='info'>
                    <h4>{`name: ${user.name.first} ${user.name.last}`}</h4>
                    <h4>{`city: ${user.location.city}`}</h4>
                    <h4>{`email: ${user.email}`}</h4>
                    <h4>{`age: ${user.dob.age}`}</h4>
                    <h4>{`phone: ${user.phone}`}</h4>
                </div>
            </div >
            //return users;
        })
        return (
            <div>{users}</div>
            // <div>{this.state.permission ? (users) : (<Redirect to='/sign' />)}</div>
        )
    }
}

// const MalePage = (props) => {
//     AOS.init({ duration: 1200 });
//     let users = props.users.map(user => {
//         if (user.gender === 'male') {
//             return < div key={user.login.uuid} className='male' data-aos="fade-right" >
//                 <div className='photo'>
//                     <img src={user.picture.large} alt="img" />
//                 </div>
//                 <div className='info'>
//                     <h4>{`name: ${user.name.first} ${user.name.last}`}</h4>
//                     <h4>{`city: ${user.location.city}`}</h4>
//                     <h4>{`email: ${user.email}`}</h4>
//                     <h4>{`age: ${user.dob.age}`}</h4>
//                     <h4>{`phone: ${user.phone}`}</h4>
//                 </div>
//             </div >
//         }
//         return users;
//     })
//     return (
//         <div>{users}</div>
//     );
// }

export default MalePage;
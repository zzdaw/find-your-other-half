import React from 'react';
import '../styles/Page.css';

const FemalePage = (props) => {
    const users = props.users.map(user => {
        if (user.gender === 'female') {
            return <div key={user.login.uuid} className='male'>
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
            </div>
        }
    })
    //console.log(props.users);
    return (
        <div>{users}</div>
    );
}

export default FemalePage;
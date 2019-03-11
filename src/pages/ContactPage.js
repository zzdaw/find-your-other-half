import React from 'react';
//import '../styles/_ContactPage.scss';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        value: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    render() {
        return (
            <div className='contact'>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder='Write a message...'></textarea>
                    <button>Send</button>
                </form>
                <Prompt when={this.state.value ? true : false} message='the form is not filled out, do you want exit?' />
            </div>
        )
    }
}


export default ContactPage;
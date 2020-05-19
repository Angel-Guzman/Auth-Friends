import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        friend: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    newFriend = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => {
            console.log(res)
            // localStorage.setItem('token', res.data)
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.newFriend}>
                    <label>New Name:<br />
                        <input
                        type='text'
                        name='name'
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                    /></label><br />
                    <label>New Age:<br />
                        <input 
                        type='text'
                        name='age'
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                    /></label><br />
                    <label>New Email:<br />
                        <input 
                        type='text'
                        name='email'
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                    /></label><br />
                    <button>Add New Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;
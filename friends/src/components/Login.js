import React from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        isLoading: false,
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();

        axiosWithAuth()
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            // console.log(res)
            // res.data.payload
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friends');
        })
        .catch(err => console.log(err));
    };

    render () {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label> Username: <br />
                        <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />
                    </label><br />
                    <label> Password: <br />
                        <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                    </label><br />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
            // res.data
            this.setState({
                friends: res.data
            })
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h2>FRIENDSLIST</h2>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        )
    }
}

export default FriendsList;
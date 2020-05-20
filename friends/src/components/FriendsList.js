import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    updateFriends = newState => {
        this.setState({ 
            friends: newState
        })
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            // console.log(res)
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
                <AddFriend updateFriends={this.updateFriends} />
                <h2>FRIENDSLIST</h2>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        )
    }
}

export default FriendsList;
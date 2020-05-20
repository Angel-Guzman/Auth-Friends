import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Link to='/login'>Login</Link><br />
      <Link to='/friends'>Friends</Link>
      <Switch>
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;

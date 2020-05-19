import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Link to ='/login'>Login</Link>

      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;

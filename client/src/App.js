import React, { Component } from 'react';
import { Route, withRouter, NavLink } from "react-router-dom";

import Signin from './Auth/Signin';
import Jokes from './jokes/Jokes';
import Register from './register/Register';
import Home from './home/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>
            <NavLink className='welcome' to='/'>
              Welcome
            </NavLink>
          </h1>

          {localStorage.getItem('token') && (
            <button className='logout'
              onClick={this.signout}>
              Sign out
            </button>
          )}
        </header>

        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Register} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/')
  };
}

export default withRouter(App);
import React, { Component } from 'react';
import '../App.css';
import Player from './Player';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Nav extends Component {
  resetAuthedUser = () => {
    const name = null;
    this.props.dispatch(setAuthedUser(name));
  };

  render() {
    return (
      <nav className="nav">
        <div className="navbar">
          <div>
            <NavLink to="/">
              <Player />
            </NavLink>
          </div>
          <ul className="navbar-items">
            <li>
              <NavLink to="/add">Ask..</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">leaderboard</NavLink>
            </li>
            <li>
              <NavLink to="/" exact onClick={this.resetAuthedUser}>
                logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect()(Nav);

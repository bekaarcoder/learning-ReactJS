import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

const Header = ({startLogout}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Expensify</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
              <NavLink className="nav-link" to="/dashboard" activeClassName="active">Home</NavLink>
          </li>
          <li class="nav-item">
              <NavLink className="nav-link" to="/create" activeClassName="active">Create</NavLink>
          </li>
          <li class="nav-item">
              <NavLink className="nav-link" to="/help" activeClassName="active">About</NavLink>
          </li>
          <li class="nav-item">
              <a className="nav-link" onClick={startLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
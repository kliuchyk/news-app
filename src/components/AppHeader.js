import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/">
          NewsApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex ml-3"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link mr-2"
              exact
              activeClassName="active"
              to="/"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-item nav-link mr-2" to="/news">
              News
            </NavLink>
            <NavLink className="nav-item nav-link mr-2" to="/profile">
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

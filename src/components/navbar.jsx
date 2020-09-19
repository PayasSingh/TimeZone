import React, { Component } from 'react';
// Since NavBar is a Stateless Functional Component
// we need to pass props unlike class where we can 
// use this.props (here destrutured to use totalCounters)
const NavBar = ({ totalCounters }) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
        TimeZone{" "}
            <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>
        </a>
      </nav>
    );
};
 
export default NavBar;
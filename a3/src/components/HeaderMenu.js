import React from 'react';

const HeaderMenu = function (props) {
    return (
        <nav className="navbar has-shadow">
            <div className="navbar-tabs">
                <a className="navbar-item is-tab " href="">Home</a>
                <a className="navbar-item is-tab " href="">Users</a>
                <a className="navbar-item is-tab " href="">Companies</a>
                <a className="navbar-item is-tab " href="">Portfolio</a>
            </div>
        </nav>
    )
};

export default HeaderMenu;
import React from 'react';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-primary">
        <div className="container">
            <div className="row">
                <div><h3>{props.title}</h3></div>
            </div>
        </div>
    </nav>
);

export default Header;

import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className="container">
            <div className="col d-flex items-center justify-between">
                <Link className="brand" to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="navbar">
                    <Link to="/search" className="navbar-link">Search</Link>
                </div>
            </div>
        </header>
    )
}

export default Header

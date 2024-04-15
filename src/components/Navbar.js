import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import lightSwitch from '../sun.png'; // Import light mode switch PNG
import darkSwitch from '../moon.png'; // Import dark mode switch PNG

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* Use PNG image for the switch */}
                    <div className={`custom-switch-container text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleMode}>
                        <img src={props.mode === 'light' ? darkSwitch : lightSwitch} alt="Switch" className="custom-switch" style={{width: '30px', height: '30px'}} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};

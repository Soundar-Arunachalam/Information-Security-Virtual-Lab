import React from 'react'

function Navbar() {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-icon">
                    <i className="fas fa-user-secret"></i>
                </div>
                <h1>CryptoLab Pro</h1>
            </div>
            <div className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#">Experiments</a>
                <a href="#">About</a>
            </div>
        </div>
    )
}

export default Navbar;

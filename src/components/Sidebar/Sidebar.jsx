import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="lab-icon">
                    <i className="fas fa-shield-alt"></i>
                </div>
                <h1>Security Lab</h1>
                <p>Information Security Experiments</p>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <i className="fas fa-home"></i> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/caesar"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <i className="fas fa-exchange-alt"></i> Caesar Cipher
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/hill"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <i className="fas fa-mountain"></i> Hill Cipher
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sha"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <i className="fas fa-hashtag"></i> SHA Algorithm
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/rsa"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <i className="fas fa-key"></i> RSA Algorithm
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dss"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <i className="fas fa-signature"></i> Digital Signature
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

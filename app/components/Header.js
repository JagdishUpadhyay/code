import React, { Component } from 'react';
import RightDropdown from './RightDropdown';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-dark" style={{ backgroundColor: '#fc0' }}>
                <a className="navbar-brand" rel="home" href="#">
                    <img style={{ maxWidth: "100px", marginLeft: "30px" }}
                        src="https://www.dhl.com/img/meta/dhl_logo.gif" />
                </a>
                <span className="navbar-text">
                    <span style={{ color: 'red', fontWeight: 'bold'}}>Smart</span>
                    <span style={{ color: 'black', fontWeight: 'bold'}}>Web</span>
                </span>
                <div >
                    <RightDropdown />
                </div>
            </nav>
        )
    }
}
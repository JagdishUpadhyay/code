import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export default class RightDropDown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    User1
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

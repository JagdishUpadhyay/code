import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default class LeftMenu extends React.Component {
  
    render () {
      return (
        <Menu>
          <a id="home" className="menu-item" href="/">Receive</a>
          <a id="about" className="menu-item" href="/about">Inventory</a>
          <a id="contact" className="menu-item" href="/contact">Outbound</a>
        </Menu>
      );
    }
  }


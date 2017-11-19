import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Menu = () => {

    return (
        <ul>
            <li><NavLink activeClassName = "selected" exact to = "/">Home</NavLink></li>
            <li><NavLink activeClassName = "selected" to = "/profile">Profile</NavLink></li>
            <li><NavLink activeClassName = "selected" to ="/dashboard">Dashboard</NavLink></li>
        </ul>
        /* <Nav bsStyle="pills" activeKey={0} stacked = {true}>
            <NavItem eventKey={0}>Home</NavItem>
            <NavItem eventKey={1}>Profile</NavItem>
            <NavItem eventKey={2}>Dashboard</NavItem>
        </Nav>*/
        )

};

export default Menu;

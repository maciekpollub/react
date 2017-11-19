import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';/*po raz pierwszy importujemy coś z biblioteki react rouoter bootstrap*/

const Menu = () => {

    return (
        <div>
            <ul>
                <li><NavLink activeClassName = "selected" exact to = "/">Home</NavLink></li>
                <li><NavLink activeClassName = "selected" to = "/profile">Profile</NavLink></li>
                <li><NavLink activeClassName = "selected" to ="/dashboard">Dashboard</NavLink></li>
            </ul>


            /*<Nav bsStyle="pills" activeKey={0} stacked = {true}>
                <NavItem eventKey={0}>Home</NavItem>
                <NavItem eventKey={1}>Profile</NavItem>
                <NavItem eventKey={2}>Dashboard</NavItem>
            </Nav>*/

            <Nav bsStyle = 'pills'>/*teraz łączymy menu routerowe z menu bootstrapowym*/
                <LinkContainer exact to="/">
                    <NavItem>Home</NavItem>
                </LinkContainer>

                <LinkContainer to="/profile">
                    <NavItem>Profile</NavItem>
                </LinkContainer>

                <LinkContainer to="/dashboard">
                    <NavItem>Dashboard</NavItem>
                </LinkContainer>

            </Nav>/*i teraz mozna się juz pozbyć menu bootstrapowego bo LinkContainery połaczyły routerowe menu z bootstrapem...*/



        </div>


        )

};

export default Menu;

import React from 'react';
import classes from './Nav.module.scss'

function Nav() {
    return (
        <div className={classes.nav}>
            <a href="#homePage">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
}

export default Nav;
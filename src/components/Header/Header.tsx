import React from 'react';
import classes from './Header.module.scss'
import Nav from './nav/Nav';

function Header() {
    return (
        <div className={classes.header} id={'home'}>
            <Nav/>
        </div>
    );
}

export default Header;
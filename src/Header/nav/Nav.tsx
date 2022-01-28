import React from 'react';
import classes from './Nav.module.css'

function Nav() {
    return (
        <div className={classes.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
}

export default Nav;
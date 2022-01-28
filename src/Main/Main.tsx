import React from 'react';
import classes from './Main.module.css'
import classesContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={classes.main}>
            <div className={classesContainer.container}>
                <div className={classes.text}>
                    <span>I am</span>
                    <h1>Anton Anikev </h1>
                    <p> React Developer</p>
                </div>
                <div className={classes.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;
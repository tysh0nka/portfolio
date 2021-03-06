import React from 'react';
import classes from './Main.module.scss'
import classesContainer from '../../common/styles/Container.module.css'
import myPhoto from '../../assets/img/main/avatar.jpg'
import Fade from 'react-reveal/Fade';


function Main() {
    return (
        <div className={classes.main} id={'homePage'}>
            <div className={classesContainer.container}>
                <div className={classes.text}>
                    <Fade>
                        <span>I am</span>
                        <h1>Anton Anikev </h1>
                        <p> Frontend Developer</p>
                    </Fade>

                </div>
                <div className={classes.photo}>
                    <img src={myPhoto} alt={''}/>
                </div>
            </div>

        </div>
    );
}

export default Main;
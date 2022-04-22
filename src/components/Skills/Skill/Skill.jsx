import React from 'react';
import classes from "./Skill.module.scss";
import Fade from 'react-reveal/Fade';


function Skill(props) {
    return (
        <div className={classes.skillBlock}>
            <Fade left>
                <div className={classes.icon}>
                    <img src={props.img} alt={''}/>
                </div>
                <h3> {props.title}</h3>
            </Fade>
        </div>
    );
}

export default Skill;
import React from 'react';
import classes from "./Skill.module.css";

type PropsType = {
    title: string
    description: string
}

function Skill(props: PropsType) {
    return (
        <div className={classes.skillBlock}>
            <div className={classes.icon}>
            </div>
            <h3> {props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Skill;
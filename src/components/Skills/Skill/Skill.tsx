import React from 'react';
import classes from "./Skill.module.scss";

type PropsType = {
    title: string
    img: string
}

function Skill(props: PropsType) {
    return (
        <div className={classes.skillBlock}>
            <div className={classes.icon}>
                <img src={props.img} alt={''}/>
            </div>
            <h3> {props.title}</h3>
        </div>
    );
}

export default Skill;
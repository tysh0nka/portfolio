import React from 'react';
import classes from './Title.module.scss'
type PropsType = {
    title: string
}

function Title(props: PropsType) {
    return (
        <div className={classes.title}>
            <h2>{props.title}</h2>
            <div className={classes.line}> </div>
        </div>
    );
}

export default Title;
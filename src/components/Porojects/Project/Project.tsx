import React from 'react';
import classes from './Project.module.scss'

type ImageType = {
    backgroundImage: string
}

type PropsType = {
    title: string
    style: ImageType
}

function Project(props: PropsType) {
    return (
        <div className={classes.project}>
            <div className={classes.img} style={props.style}>
            </div>
            <div className={classes.description}>
                <h4>{props.title}</h4>
                <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos dolore doloribus, fugit, harum illo iure laborum nihil odio odit possimus praesentium quas ratione sequi similique tempore temporibus veritatis voluptatibus.'}</p>
            </div>
        </div>
    );

}

export default Project;
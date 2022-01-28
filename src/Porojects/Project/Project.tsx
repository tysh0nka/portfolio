import React from 'react';
import classes from './Project.module.css'
function Project() {
    return (
        <div className={classes.project}>
            <div className={classes.img}>
                <img src={''} alt={''}/>
            </div>
            <div className={classes.description}>
                <h4></h4>
                <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos dolore doloribus, fugit, harum illo iure laborum nihil odio odit possimus praesentium quas ratione sequi similique tempore temporibus veritatis voluptatibus.'}</p>
            </div>
        </div>
    );

}

export default Project;
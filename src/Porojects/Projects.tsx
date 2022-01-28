import React from 'react';
import classes from './Projects.module.css'
import Project from "./Project/Project";
function Projects() {
    return (
        <div className={classes.projectsBlock}>
            <div className={classes.container}>
                <div className={classes.title}>
                    TITLE
                </div>
                <div className={classes.projects}>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
}

export default Projects;
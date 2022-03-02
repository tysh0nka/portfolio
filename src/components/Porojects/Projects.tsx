import React from 'react';
import classes from './Projects.module.scss'
import Project from "./Project/Project";
import Title from "../../common/Title/Title";
import todoImage from '../../assets/img/projects/todo.png'
import socialImage from '../../assets/img/projects/social.jpg'
function Projects() {

    const styleTodo = {
        backgroundImage: `url(${todoImage})`
    }

    const styleSocial = {
        backgroundImage: `url(${socialImage})`
    }

    return (
        <div className={classes.projectsBlock} id={'projects'}>
            <div className={classes.container}>
                <Title title={'Projects'}/>
                <div className={classes.projects}>
                    <Project title={'Social Network'} style={styleSocial}/>
                    <Project title={'To-do list'} style={styleTodo}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
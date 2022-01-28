import React, {useState} from 'react';
import classes from './Skills.module.css'
import Skill from "./Skill/Skill";
import classesContainer from "../common/styles/Container.module.css";
function Skills() {

    // const [skills, setSkills] = useState(['Skill1','Skill2','Skill3','Skill4'])
    // const skillComponent = skills.map(m=> {
    //     return <Skill key={m.id}/>
    // })
    return (
        <div className={classes.skillsBlock}>
            <div className={classes.container}>
                <h2 className={classes.title}>Skills</h2>
                <div className={classes.skills}>
                    <Skill title={'dddd'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa debitis dicta doloremque'}/>
                    <Skill title={'dddd'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa debitis dicta doloremque'}/>
                    <Skill title={'dddd'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa debitis dicta doloremque'}/>
                    <Skill title={'dddd'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa debitis dicta doloremque'}/>
                    <Skill title={'dddd'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa debitis dicta doloremque'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
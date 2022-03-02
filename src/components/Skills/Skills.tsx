import React, {useState} from 'react';
import classes from './Skills.module.scss'
import Skill from "./Skill/Skill";
import classesContainer from "../../common/styles/Container.module.css";
import Title from "../../common/Title/Title";
import imgReact from '../../assets/img/skills/react.svg'
import imgRedux from '../../assets/img/skills/redux.svg'
import imgJS from '../../assets/img/skills/js.svg'
import imgTS from '../../assets/img/skills/ts.svg'
import imgHTML from '../../assets/img/skills/html.svg'
import imgCSS from '../../assets/img/skills/css.svg'
function Skills() {

    const [skills, setSkills] = useState([{id: 1, title: 'HTML', img: `${imgHTML}`},
        {id: 2, title: 'CSS', img: `${imgCSS}`},
        {id: 3, title: 'JS',img: `${imgJS}`},
        {id: 4, title: 'TS',img: `${imgTS}`},
        {id: 4, title: 'React',img: `${imgReact}`},
        {id: 4, title: 'Redux',img: `${imgRedux}`}
    ])
    const skillComponent = skills.map(m=> {
        return <Skill key={m.id} title={m.title} img={m.img}/>
    })
    return (
        <div className={classes.skillsBlock} id={'skills'}>
            <div className={classes.container}>
               <Title title={'Skills'}/>
                <div className={classes.skills}>
                    {skillComponent}
                </div>
            </div>
        </div>
    );
}

export default Skills;
import React from 'react';
import classes from './Contacts.module.scss'
import Title from "../../common/Title/Title";

function Contacts() {
    return (
        <div className={classes.contacts} id={'contacts'}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Contacts</h2>
                    <div className={classes.line}> </div>
                </div>
                <form className={classes.form}>
                    <input />
                    <input/>
                    <textarea className={classes.textarea} readOnly={true}/>
                    <button type={'submit'} className={classes.button}>Send</button>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
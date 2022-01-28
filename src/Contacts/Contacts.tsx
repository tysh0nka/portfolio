import React from 'react';
import classes from './Contacts.module.css'

function Contacts() {
    return (
        <div className={classes.contacts}>
            <div className={classes.container}>
                <h3 className={classes.title}>CONTACTS</h3>
                <form className={classes.form}>
                    <input/>
                    <input/>
                    <textarea className={classes.textarea}/>
                </form>
                <button className={classes.button}> BUTTON</button>
            </div>
        </div>
    );
}

export default Contacts;
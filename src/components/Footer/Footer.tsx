import React from 'react';
import classes from './Footer.module.scss'
function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <h3 className={classes.name}>Anton Anikev</h3>
                <div className={classes.contacts}>
                    <div className={classes.block1}> </div>
                    <div className={classes.block1}> </div>
                    <div className={classes.block1}> </div>
                    <div className={classes.block1}> </div>
                </div>
                <h3>{'© 2022'}</h3>
            </div>
        </div>
    );
}

export default Footer;
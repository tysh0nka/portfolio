import React from 'react';
import classes from './Footer.module.scss'
import iconTel from '../../assets/img/contacts/telegram.svg'
import iconVK from '../../assets/img/contacts/vk.svg'
import iconWhat from '../../assets/img/contacts/whatsApp.svg'
import iconMail from '../../assets/img/contacts/mail.svg'
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <h3 className={classes.name}>Anton Anikev</h3>
                <div className={classes.contacts}>
                    <Fade top>
                        <div className={classes.block1}>
                            <span>WhatsApp</span>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={classes.block1}>
                            <span>Telegram</span>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className={classes.block1}>
                            <span>ВКонтакте</span>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={classes.block1}>
                            <span>Mail</span>
                        </div>
                    </Fade>
                </div>
                <h3>{'© 2022'}</h3>
            </div>
        </div>
    );
}

export default Footer;
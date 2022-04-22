import React, {useState} from 'react';
import classes from './Contacts.module.scss'
import Fade from 'react-reveal/Fade';

function Contacts() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className={classes.contacts} id={'contacts'}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Contacts</h2>
                    <div className={classes.line}> </div>
                </div>
                <form className={classes.form} action="https://send.pageclip.co/QkUcohBd7rMzGYrvoqi5iAelaLn4mOJ3/f"  method="post">
                    <Fade left>
                        <input name={'name'} value={name} onChange={e => setName(e.currentTarget.value)} placeholder={'Name'}/>
                    </Fade >
                    <Fade right>
                        <input name={'email'} value={email} onChange={e => setEmail(e.currentTarget.value)} placeholder={'Email'}/>
                    </Fade>
                    <Fade left>
                        <textarea name={'description'} value={message} className={classes.textarea} onChange={e => setMessage(e.currentTarget.value)} placeholder={'Message'}/>
                    </Fade>
                    <Fade right>
                        <button type={'submit'} className={classes.button}>Send</button>
                    </Fade>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
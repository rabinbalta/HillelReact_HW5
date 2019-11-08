import React, { useState } from 'react';
import styles from './style.css';

const Form = ({addNewsFromProps}) => {
    const[text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);

    }
    const handleSubmit = (e)=> {        
        e.preventDefault();
        const textNews = {
            text,
            id: Date.now(),
        }       
        addNewsFromProps(textNews);
    }

    return (
        <form className={styles.Form} onSubmit={handleSubmit}>
            <label className={styles.Label}>
                Add news:
                <textarea className={styles.Text} value={text} onChange={handleChange} />
            </label>
            <input className={styles.Input} type="submit" value="Go!" />
        </form>
    );
};

export default Form;

import React, { useState } from 'react';
import styles from "../styles/Contact.module.css";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone, email, name, desc);
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'desc':
                setDesc(e.target.value);
                break;
            case 'name':
                setName(e.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.container}>
            <h1><pre>Contact Us</pre></h1>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.mb-3}`}>
                    <label htmlFor="name" className={`${styles.formlabel}`}>Enter your name</label>
                    <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name="name" aria-describedby="emailHelp" />
                    
                </div>
                <div className={`${styles.mb-3}`}>
                    <label htmlFor="email" className={`${styles.formlabel}`}>Email address</label>
                    <input type="email" value={email} onChange={handleChange} className="form-control" id="email" />
                </div>
                <div className={`${styles.mb-3}`}>
                    <label htmlFor="phone" className={`${styles.formlabel}`}>Password</label>
                    <input type="phone" value={phone} onChange={handleChange} className="form-control" name="phone" id="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Message</label>
                    <textarea value={desc} onChange={handleChange} className="form-control" placeholder="Leave a message here" name="desc" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

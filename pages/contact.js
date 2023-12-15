import React, { useState } from "react";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email, name, desc);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "desc":
        setDesc(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`${styles.container}`}
    >
      <h1>
        <pre className="mt-8 text-3xl ">CONTACT US</pre>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.mb - 3}`}>
          <label htmlFor="name" className={`${styles.formlabel} mt-4 mb-4`}>
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="py-2 mb-4 text-white form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={`${styles.mb - 3}`}>
          <label htmlFor="email" className={`${styles.formlabel} mb-4`}>
            Email address
          </label>
          <input
            type="email"
            onChange={handleChange}
            className="py-2 text-white"
          />
        </div>
        <div className={`${styles.mb - 3}`}>
          <label htmlFor="phone" className={`${styles.formlabel}`}>
            Password
          </label>
          <input
            type="phone"
            value={phone}
            onChange={handleChange}
            className="py-2 mt-4 mb-4 text-white form-control"
            name="phone"
            id="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="mb-4 form-label">
            Message
          </label>
          <textarea
            value={desc}
            onChange={handleChange}
            className="form-control"
            placeholder="Leave a message here"
            name="desc"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

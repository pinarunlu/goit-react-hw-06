import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={styles.contactBox}>
      <div className={styles.contactInfo}>
        
        <ul>
          <li>{contact.name}</li>
          <li>{contact.number}</li>
        </ul>
      </div>
      <button
        className={styles.contactBtn}
        onClick={() => deleteContact(contact.id)} // Silme işlemi tetikleniyor
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // Redux eylemi
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact} // İletişimi geçiyoruz
          deleteContact={handleDelete} // Silme fonksiyonunu geçiyoruz
        />
      ))}
    </ul>
  );
};

export default ContactList;

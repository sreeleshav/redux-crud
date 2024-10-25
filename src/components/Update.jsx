import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/slices/contactSlice';
import ContactFormModal from './Add';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  const handleShow = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSubmit = (contact) => {
    const actionType = contact.id ? 'updateContact' : 'addContact';
    dispatch({
      type: `contacts/${actionType}`,
      payload: contact.id ? contact : { ...contact, id: Date.now() },
    });
  };

  return (
    <>
      <Button className="my-3" onClick={() => setShowModal(true)}>
        Add Contact
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <Button className="me-2 btn"onClick={() => handleShow(contact)} > <i className="fa-solid fa-pen-to-square fa-xl" style={{color: "#63E6BE",}} /> </Button>
                <Button className='btn' onClick={() => handleDelete(contact.id)}><i className="fa-solid fa-trash" size="xl" style={{color: "#de2e02",}} /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ContactFormModal
        show={showModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        contact={selectedContact}
      />
    </>
  );
};

export default ContactList;
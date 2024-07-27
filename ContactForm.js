// src/components/ContactForm.js
import React, { useState } from 'react';
import { db } from '../firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('contacts').add({
      name,
      issue,
      timestamp: new Date()
    });
    setName('');
    setIssue('');
    alert('Your issue has been submitted.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Issue</label>
        <textarea value={issue} onChange={(e) => setIssue(e.target.value)} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

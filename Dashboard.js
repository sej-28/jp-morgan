// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import ContactForm from './ContactForm';
import RoleSelection from './RoleSelection';

const Dashboard = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const snapshot = await db.collection('resources').get();
      const resourcesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResources(resourcesData);
    };
    fetchResources();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <h2>Resources</h2>
        <ul>
          {resources.map(resource => (
            <li key={resource.id}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
      <section>
        <h2>Select Role</h2>
        <RoleSelection />
      </section>
    </div>
  );
};

export default Dashboard;

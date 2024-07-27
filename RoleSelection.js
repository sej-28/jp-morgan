// src/components/RoleSelection.js
import React, { useState } from 'react';
import { db } from '../firebase';

const RoleSelection = () => {
  const [role, setRole] = useState('trainee');
  const [selected, setSelected] = useState(false);

  const handleSelection = async () => {
    await db.collection('roles').add({
      role,
      timestamp: new Date()
    });
    setSelected(true);
    alert(`You have selected the role: ${role}`);
  };

  return (
    <div>
      <label>Select your role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="trainer">Trainer</option>
        <option value="trainee">Trainee</option>
      </select>
      <button onClick={handleSelection}>Submit</button>
      {selected && <p>Role selected: {role}</p>}
    </div>
  );
};

export default RoleSelection;

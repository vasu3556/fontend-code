import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'X-Time': new Date().toISOString(),
      'X-Browser': navigator.userAgent,
      
    };

    try {
      await addStudent({ firstname, lastname }, headers);
      setFirstname('');
      setLastname('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;

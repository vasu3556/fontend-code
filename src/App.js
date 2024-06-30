import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const baseUrl = "http://localhost:8080/api/student";
  
  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const response = await axios.get(baseUrl);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const addStudent = async (student) => {
    const headers = {
      'X-Time': new Date().toISOString(),
      'X-Browser': navigator.userAgent,
      
    };

    try {
      await axios.post(baseUrl, student, { headers });
      getStudents(); 
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="App">
      <h1>Student Management</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;

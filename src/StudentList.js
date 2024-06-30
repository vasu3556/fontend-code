// src/StudentList.js
import React from 'react';

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstname ? student.firstname : 'N/A'}</td>
              <td>{student.lastname ? student.lastname : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;

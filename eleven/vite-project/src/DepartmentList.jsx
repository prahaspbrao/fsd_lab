import React from 'react';

function DepartmentList() {
  // 1. Create a list (array) of departments
  const departments = ["Computer Science (CSE)", "Information Science (ISE)", "Electronics (ECE)", "Mechanical (ME)", "Civil (CV)"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Program 11: Department List</h2>
      
      {/* 2. Return an unordered list */}
      <ul>
        {/* 3. Iterate through elements using map() */}
        {departments.map((dept, index) => (
          // key prop is required for lists in React
          <li key={index} style={{ padding: "5px", fontSize: "18px" }}>
            {dept}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-07</title>
</head>
<body>
import React from "react";

/*
====================================================
React Concepts Covered
====================================================
1. React
2. Functional Components
3. Components
4. Props
5. Props Destructuring
6. Reusability
7. Array Mapping
8. Inline Styling
9. Event Handling
10. Conditional Rendering
====================================================
*/


// ----------------------
// Reusable Component
// ----------------------
function StudentCard({
  name,
  course,
  age,
  isPlaced,
  skills,
  color,
}) {

  const cardStyle = {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    borderLeft: `8px solid ${color}`,
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
  };

  function showDetails() {
    alert(`${name} is learning ${course}`);
  }

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>

      <p>
        <strong>Course :</strong> {course}
      </p>

      <p>
        <strong>Age :</strong> {age}
      </p>

      <p>
        <strong>Status :</strong>{" "}
        {isPlaced ? "Placed ✅" : "Learning 🚀"}
      </p>

      <h4>Skills</h4>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={showDetails}>
        View Details
      </button>
    </div>
  );
}



// ----------------------
// Parent Component
// ----------------------

function App() {

  const students = [
    {
      id: 1,
      name: "Akilan",
      course: "React JS",
      age: 23,
      isPlaced: false,
      color: "#2196F3",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ],
    },

    {
      id: 2,
      name: "Rahul",
      course: "Node JS",
      age: 24,
      isPlaced: true,
      color: "#4CAF50",
      skills: [
        "Node",
        "Express",
        "MongoDB"
      ],
    },

    {
      id: 3,
      name: "Priya",
      course: "Full Stack",
      age: 22,
      isPlaced: false,
      color: "#FF9800",
      skills: [
        "React",
        "Node",
        "SQL"
      ],
    },
  ];



  return (

    <div
      style={{
        width: "70%",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "blue",
        }}
      >
        React Components Demo
      </h1>

      <hr />

      {

        students.map((student) => (

          <StudentCard

            key={student.id}

            name={student.name}

            course={student.course}

            age={student.age}

            isPlaced={student.isPlaced}

            skills={student.skills}

            color={student.color}

          />

        ))

      }

    </div>

  );
}

export default App;
</body>
</html>

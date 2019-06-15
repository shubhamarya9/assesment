import React from "react";

function Student({ student }) {
  const grades = student.grades;

  return (
    <div>
      <div className="container">
        <div className="avatar-div">
          <img src={student.pic} alt="avatar" className="avatar-img" />
        </div>
        <div className="info">
          <h1>
            {student.firstName.toUpperCase()}&nbsp;
            {student.lastName.toUpperCase()}
          </h1>
          <p>Email:{student.email}</p>
          <p>Company:{student.company}</p>
          <p>Skill:{student.skill}</p>
          <p>
            Average:
            {grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) /
              grades.length}
            %
          </p>
        </div>
      </div>
    </div>
  );
}
export default Student;

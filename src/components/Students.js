import React from "react";
import Student from "./Student";

function Students({ students, index }) {
  const list = students.map(student => {
    return <Student key={index} index={index} student={student} />;
  });
  return <div className="student-card">{list}</div>;
}
export default Students;

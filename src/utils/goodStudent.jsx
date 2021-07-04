import React from "react";

const GoodStudent = ({ student }) => {
  return (
    <div className="goodstudent ">
      {student.map((stu) => (
        <div className="d-flex ">
          <div className="grade">
            <p className="text-black-50">{stu.grade}</p>
          </div>

          <p className="text-white mt-3">{`${stu.name} | ${stu.class}`}</p>
        </div>
      ))}
    </div>
  );
};

export default GoodStudent;

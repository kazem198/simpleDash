import React from "react";

const Grade = ({ grade }) => {
  const onClickLi = (e) => {
    var classList = document.getElementsByClassName("myli");

    if (classList.length > 0) {
      for (const key of classList) {
        key.classList.remove("myli");
      }
    }

    e.target.classList.add("myli");
  };

  return (
    <ul className="list-group w-100 p-4" style={{ cursor: "pointer" }}>
      {grade.map((gr) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center border-0 bg-dark text-black p-1 "
          onClick={(e) => {
            onClickLi(e);
          }}
        >
          {gr.name}
          <span className="badge badge-secondary  p-1">{gr.grade}</span>
        </li>
      ))}
    </ul>
  );
};

export default Grade;

import React, { useState, useMemo } from "react";

import { Calendar } from "react-persian-datepicker";
import moment from "moment-jalaali";

const Calender = () => {
  const [bookName, setBookName] = useState("ریاضی");

  const dateExam = useMemo(() => {
    if (bookName === "ریاضی") return moment("1400/04/10", "jYYYY/jMM/jDD");
    if (bookName === "علوم") return moment("1400/04/12", "jYYYY/jMM/jDD");
    if (bookName === "دینی") return moment("1400/04/14", "jYYYY/jMM/jDD");
    if (bookName === "فارسی") return moment("1400/04/16", "jYYYY/jMM/jDD");
    if (bookName === "املا") return moment("1400/04/18", "jYYYY/jMM/jDD");
  }, [bookName]);

  const onClickBook = (e) => {
    const nav = document.querySelectorAll(".nav-link");

    nav.forEach((e) => {
      e.classList.remove("select");
    });

    setBookName(e.target.innerText);
    e.target.classList.add("select");
  };

  return (
    <div className="row no-gutters">
      <div className="col-2  d-flex align-items-center mt-5 p-0 justify-content-center ">
        <nav class="nav flex-column mt-3">
          <a
            class="nav-link  p-0  d-inline text-black-50 select"
            href="#!"
            onClick={(e) => {
              onClickBook(e);
            }}
          >
            ریاضی
          </a>
          <a
            class="nav-link  p-0 d-inline text-black-50"
            href="#!"
            onClick={(e) => {
              onClickBook(e);
            }}
          >
            علوم
          </a>
          <a
            class="nav-link  p-0 d-inline text-black-50"
            href="#!"
            onClick={(e) => {
              onClickBook(e);
            }}
          >
            دینی
          </a>
          <a
            class="nav-link  p-0  d-inline text-black-50"
            href="#!"
            onClick={(e) => {
              onClickBook(e);
            }}
          >
            فارسی
          </a>
          <a
            class="nav-link p-0 d-inline text-black-50"
            href="#!"
            onClick={(e) => {
              onClickBook(e);
            }}
          >
            املا
          </a>
        </nav>
      </div>
      <div className="col-10">
        <Calendar
          inputFormat="jYYYY/jM/jD hh:mm A"
          styles={styles}
          selectedDay={dateExam}

          // selectedDay={moment("1400/04/18", "jYYYY/jMM/jDD")}
        />
      </div>
    </div>
  );
};

export default Calender;
let styles = {
  calendarContainer: "calendarContainer",
  dayPickerContainer: "dayPickerContainer",
  monthsList: "monthsList",
  daysOfWeek: "daysOfWeek",
  dayWrapper: "dayWrapper",
  selected: "selected",
  heading: "heading",
  next: "next",
  prev: "prev",
  title: "title",
  currentMonth: "currentMonth",
  width: "100px",
  height: "100px",
};

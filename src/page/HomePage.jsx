import React from "react";
import RangeInput from "../utils/RangeInput";
import Calendar from "../utils/calender";
import GoodStudent from "../utils/goodStudent";
import BirthDay from "../utils/birthDay";
import Grade from "../utils/grade";
import GoodStudentPlus from "../utils/goodStudentPlus";

const HomePage = () => {
  const student = [
    { name: "ادوین کتلمیان", class: "چهارم", grade: "رتبه 1" },
    { name: " فریبرز دیهیمی", class: "دوم", grade: "رتبه 2" },
    { name: " فرنود ذبیحی", class: "اول", grade: "رتبه 3" },
  ];
  const birthDay = [
    { name: "علی رضا آرام پور مشهدی", class: "اول/ ب" },
    { name: "کیوان کوشانی نژاد", class: "سوم / ج" },
    { name: "آرش کیانی تامرادی", class: "اول /ب" },
  ];
  const grade = [
    { name: "فارسی سوم ", grade: "18.5" },
    { name: "ریاضی ششم", grade: "11" },
    { name: "علوم تجربی اول", grade: "14.25" },
    { name: "دینی اول", grade: "17.75" },
    { name: "انشا", grade: "14.25" },
    { name: "فارسی", grade: "15.5" },
  ];
  return (
    <React.Fragment>
      <div className="col-12 col-md-6 col-xl-4 p-0">
        <div className="m-1 bg-dark p-2 element">
          <p className="text-white text-center  mb-1">میانگین آخرین نمرات</p>
          <div className="row justify-content-center">
            <RangeInput number={15} name="ریاضی" />
            <RangeInput number={16} name="فارسی" />
            <RangeInput number={18} name="دینی" />
            <RangeInput number={8} name="علوم" />
            <RangeInput number={10} name="انشا" />
            <RangeInput number={11} name="املا" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-4 p-0">
        <div className="m-1 bg-dark element">
          <p className="text-white text-center mb-0">برنامه امتحانی</p>
          <div className="row justify-content-center">
            <Calendar />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-4 p-0">
        <div className="m-1 bg-dark element">
          <p className="text-white text-center  mb-0">برنامه امتحانی</p>
          <div className="row justify-content-center">
            <GoodStudent student={student} />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-4 p-0">
        <div className="m-1 bg-dark element">
          <p className="text-white text-center  mb-0">تولدهای امروز مدرسه</p>
          <div className="row justify-content-center">
            <BirthDay birth={birthDay} />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-4 p-0">
        <div className="m-1 bg-dark element">
          <p className="text-white text-center  mb-0">آخرین نمرات</p>
          <div className="row justify-content-center">
            <Grade grade={grade} />
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-4 p-0">
        <div className="m-1 bg-dark element">
          <p className="text-white text-center  mb-0">
            <i class="fas fa-plus-circle mr-2"></i>
            دانش آموزان برتر
          </p>
          <div className="row justify-content-center">
            <GoodStudentPlus />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;

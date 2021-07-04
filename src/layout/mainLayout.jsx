import React, { useEffect } from "react";
import Nav from "../nav/nav";
import { navigator } from "../utils/navigator/navigator";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  useEffect(() => {
    navigator();
  }, [window.innerWidth.toString()]);

  const onclickNavigation = (e) => {
    console.log(e);
    e.target.classList.toggle("movebtn");

    const element = document.querySelector(".navigation");

    element.classList.toggle("displayNavigation");
  };

  return (
    <div className="container-small">
      <div className="row " style={{ height: "100vh" }}>
        <button
          type="button"
          className="btn btn-secondary btn-navigation"
          onClick={(e) => {
            onclickNavigation(e);
          }}
        >
          <i
            className="far fa-bars"
            aria-hidden="true"
            style={{ pointerEvents: "none" }}
          ></i>
        </button>
        {/* <i
          className="far fa-bars btn-secondary  btn-navigation"
          onClick={(e) => {
            onclickNavigation(e);
          }}
        ></i> */}

        <div
          id="navigation"
          className="d-md-block col-md-2  bg-dark p-0 navigation"
        >
          <div className="d-flex justify-content-center p-3">
            <img
              style={{ width: "60px", height: "60px" }}
              className="d-flex align-self-center mr-3 w-25 "
              src="/logo192.png"
              alt="Generic placeholder "
            />
          </div>

          <ul className="list-group p-0 ">
            <li className="my-2 list-group-item active text-white d-flex justify-content-start align-items-center">
              <i className="fal fa-chart-line mr-3"></i>{" "}
              <Link to="/" className="text-white">
                داشبورد
              </Link>
            </li>
            <li className="my-2 list-group-item bg-dark text-white d-flex justify-content-start align-items-center">
              <i className="fas fa-align-right  mr-3"></i>{" "}
              <Link to="/class" className="text-white">
                {" "}
                کلاس درس{" "}
              </Link>
            </li>
            <li className="my-2 list-group-item bg-dark text-white d-flex justify-content-start align-items-center">
              <i className="far fa-window-alt  mr-3"></i>{" "}
              <Link to="/exam" className="text-white">
                برنامه امتحان
              </Link>
            </li>
            <li className="my-2 list-group-item bg-dark text-white d-flex justify-content-start align-items-center">
              <i className="fal fa-book  mr-3"></i>{" "}
              <Link to="/daneshSara" className="text-white">
                دانش سرا{" "}
              </Link>
            </li>
            <li className="my-2 list-group-item bg-dark text-white d-flex justify-content-start align-items-center">
              <i className="fal fa-play-circle  mr-3"></i>{" "}
              <Link to="/zang" className="text-white">
                زنگ تفریح{" "}
              </Link>
            </li>
          </ul>
          <div
            className="d-flex justify-content-end "
            style={{ position: "absolute", bottom: "100px" }}
          >
            <input
              className="form-control  text-center w-75"
              type="text"
              placeholder="جستجو ..."
              style={{ borderRadius: "1.3rem" }}
            />
          </div>
        </div>

        <div className="col-10 content">
          <Nav />
          <div className="row m-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

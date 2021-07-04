import React from "react";

const Nav = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg  bg-dark w-100 navbar-light text-secondary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <div className="mr-4 p-1">
              <i className="far fa-calendar-week m-1"></i>
              <span>سه شنبه</span>
              <span className="mx-1">01/06/1400</span>
            </div>

            <div className="mr-4 p-1">
              <i className="fas fa-sun mr-2"></i>
              <i
                className="fas fa-sort-up mr-1"
                style={{ transform: " translateY(5px) " }}
              ></i>
              <span className="mr-1">23+</span>

              <i className="fas fa-sort-down mr-1"></i>
              <span className="mr-1">14+</span>
            </div>
            <div className="mr-4 p-1">
              <i className="fal fa-clock mr-1"></i>

              <span className="mr-1">12:04:12</span>
            </div>
            <div className="mr-4 p-1">
              <i className="fal fa-th-large mr-2"></i>
              <i className="fal fa-envelope-open mr-2"></i>
              <i className="fal fa-bell mr-2"></i>
              <span
                className="badge badge-primary badge-pill"
                style={{
                  fontSize: "11px",
                  transform: " translate(15px,-10px) ",
                }}
              >
                1
              </span>
            </div>
          </ul>

          <div className="ml-2 p-1">
            <i className="fal fa-user mr-1"></i>
            <span className="mr-1">تیرداد شاهرودی</span>
            <i className="far fa-bars ml-2"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

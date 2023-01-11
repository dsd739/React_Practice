import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary py-0`}>
      <div
        className="container-fluid"
        style={
          props.mode === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "black" }
        }
      >
        <a style={
          props.mode === "light"
          ? { color: "black" }
          : { color: "white" }
        } className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a style={
          props.mode === "light"
          ? { color: "black" }
          : { color: "white" }
        } className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a style={
          props.mode === "light"
          ? { color: "black" }
          : { color: "white" }
        } className="nav-link" href="/">
                09
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
              style={
                props.mode === "light"
                ? { color: "black" }
                : { color: "white" }
              }
                className="nav-link dropdown-toggle"
                href="/"
                role="button" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                  style={
                    props.mode === "light"
                    ? { color: "black" }
                    : { color: "white" }
                  } className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a
                  style={
                    props.mode === "light"
                    ? { color: "black" }
                    : { color: "white" }
                  } className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                  style={
                    props.mode === "light"
                    ? { color: "black" }
                    : { color: "white" }
                  }
                   className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li  className="nav-item">
              <a
              style={
                props.mode === "light"
                ? { color: "black" }
                : { color: "white" }
              } href="/" className="nav-link disabled">
                Disabled
              </a>
            </li>
          </ul>
          <div class="form-check form-switch">
            <input
              onClick={props.Togglemode}
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              class="form-check-label"
              style={
                props.mode === "light" ? { color: "black" } : { color: "white" }
              }
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  link: PropTypes.string.isRequired,
  web_name: PropTypes.string,
};
Navbar.defaultProps = {
  //link:'.com',
  web_name: "Enter website name",
};

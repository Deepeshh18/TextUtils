import React from "react";

//import {Link} from 'react-router-dom';

export default function Nav(props) {
  const Darkblue = () => {
    document.body.style.backgroundColor = "Darkblue";
  };
  const Green = () => {
    document.body.style.backgroundColor = "green";
  };

  const Yellow = () => {
    document.body.style.backgroundColor = "yellow";
  };

  const Gray = () => {
    document.body.style.backgroundColor = "gray";
  };

  const lg = () => {
    document.body.style.backgroundColor = "white";
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
      >
        <div className="container-fluid">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Dlmode">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={Darkblue}
            ></button>
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={Green}
            ></button>
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={Yellow}
            ></button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={Gray}
            ></button>
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={lg}
            ></button>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label"
            for="flexSwitchCheckDefault"
          ></label>
        </div>
      </nav>
    </div>
  );
}

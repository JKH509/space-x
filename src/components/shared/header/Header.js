import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/spacex-logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">

      <Link className="navbar-brand col pb-3" to="/">
        <img
          src={logo}
          style={{ width: "250px", height: "50px" }}
          type="link"
          alt=""
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      
      <div className="collapse navbar-collapse  " id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rockets">
              Rockets
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/launches">
              Launches
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crew-members">
              Crew
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/starlink">
              Starlink
            </Link>
          </li>
          <li className="nav-item dropdown ">
            <Link
              className="nav-link dropdown-toggle "
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Everything else
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/launch-pads">
                Launch pads
              </Link>
              <Link className="dropdown-item" to="/landing-pads">
                Landing pads
              </Link>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

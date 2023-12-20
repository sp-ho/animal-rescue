import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import hungarian from "../images/hungary.png";
import english from "../images/canada.png";

const Navbar: React.FC = () => {
  const { i18n } = useTranslation(); // Access the i18n object

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Mi Hárman a Németjuhászokért Alapítvány
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="navbarLink nav-link active"
                aria-current="page"
                style={{ color: "#0047AB", fontWeight: "bold" }}
                to={"/"}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item  dropdown">
              <span
                className="navbarLink nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ABOUT
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fostering">
                    About Fostering
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/breed">
                    About The Breed
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/microchips">
                    About Microchips
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/spayneuter">
                    About Spaying & Neutering
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ADOPT
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/adoption">
                    The Adoption process
                  </Link>
                </li>
              </ul>
            </li>
            {/* Success Stories dropdown */}
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SUCCESS STORIES
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/adoptedphotos">
                    Already Adopted - Photos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoptedvideos">
                    Already Adopted - Videos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/feedback">
                    Feedback from Adopters
                  </Link>
                </li>
              </ul>
            </li>
            {/* Get Involved dropdown */}
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                GET INVOLVED
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/sponsors">
                    Our Sponsors, Foster & Volunteers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sponsors">
                    Become a Sponsor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/volunteer">
                    Become a Volunteer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fostering">
                    Become a Foster Home
                  </Link>
                </li>
              </ul>
            </li>
            {/* Important dropdown */}
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                IMPORTANT
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/videos">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/donate-items">
                    Items You May Donate
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/contact"}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/donate"}
              >
                DONATE
              </Link>
            </li>
            {/* Language selection */}
            <li className="nav-item">
              <button
                title="Hungarian"
                className="nav-link"
                onClick={() => changeLanguage("hu")}
              >
                <img src={hungarian} alt="Hungarian" className="flag-icon" />{" "}
                {/* Hungarian flag icon */}
              </button>
            </li>
            <li className="nav-item">
              <button
                title="English"
                className="nav-link"
                onClick={() => changeLanguage("en")}
              >
                <img src={english} alt="English" className="flag-icon" />{" "}
                {/* English flag icon */}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

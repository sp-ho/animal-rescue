import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import hungarian from "../images/hungary.png";
import english from "../images/canada.png";
import huLogo from "../images/logos/M3N-website logo-hungarian.png";
import enLogo from "../images/logos/M3N-website logo-english.png";

const Navbar: React.FC = () => {
  const { i18n } = useTranslation(); // Access the i18n object
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language
  };

  // Determine the current language
  const currentLanguage = i18n.language;

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img
            src={currentLanguage === "en" ? enLogo : huLogo} // Change logo language
            alt="Logo"
            width="180"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="navbarLink nav-link active"
                aria-current="page"
                style={{ color: "#0047AB", fontWeight: "bold" }}
                to={"/"}
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li className="nav-item  dropdown">
              <span
                className="navbarLink nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("navbar.about")}
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/about">
                    {t("navbar.abUs")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sponsors">
                    {t("navbar.sponsorsFostersVolunteers")}
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
                {t("navbar.adopt")}
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/adoption">
                    {t("navbar.adoptProcess")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoptable">
                    {t("navbar.adoptable")}
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
                {t("navbar.success")}
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/adopted-photos">
                    {t("navbar.adoptedPhotos")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adopted-videos">
                    {t("navbar.adoptedVideos")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/feedback">
                    {t("navbar.feedback")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/send-photos">
                    {t("navbar.sendPhotos")}
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
                {t("navbar.involve")}
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    smooth
                    className="dropdown-item"
                    to="/sponsors#beSponsor"
                  >
                    {t("navbar.sponsor")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/volunteer">
                    {t("navbar.volunteer")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fostering">
                    {t("navbar.foster")}
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
                {t("navbar.important")}
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/breed">
                    {t("navbar.abBreed")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/microchips">
                    {t("navbar.abMicrochips")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/spay-neuter">
                    {t("navbar.abSpayNeuter")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/videos">
                    {t("navbar.videos")}
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
                {t("navbar.contact")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/donate"}
              >
                {t("navbar.donate")}
              </Link>
            </li>
            {/* Language selection */}
            <li className="nav-item">
              <button
                title={t("navbar.hungarian")}
                className="nav-link"
                onClick={() => changeLanguage("hu")}
              >
                <img
                  src={hungarian}
                  alt={t("navbar.hungarian")}
                  className="flag-icon"
                />{" "}
                {/* Hungarian flag icon */}
              </button>
            </li>
            <li className="nav-item">
              <button
                title={t("navbar.english")}
                className="nav-link"
                onClick={() => changeLanguage("en")}
              >
                <img
                  src={english}
                  alt={t("navbar.english")}
                  className="flag-icon"
                />{" "}
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

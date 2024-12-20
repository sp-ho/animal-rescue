import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import hungarian from "../images/hungary.png";
import english from "../images/canada.png";
import huLogo from "../images/logos/M3N-website logo-hungarian.png";
import enLogo from "../images/logos/M3N-website logo-english.png";

const Navbar: React.FC = () => {
  const { i18n } = useTranslation(); // Access the i18n object
  const { t } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language
    window.history.pushState({}, "", `?lang=${lng}`);
  };

  // Determine the current language
  const currentLanguage = i18n.language;

  // Handle language change and navigation manually
  const handleLanguageChange = (path: string) => {
    const langPath = `/${currentLanguage}${path}`;
    navigate(langPath);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {/* Logo */}
        <Link
          className="navbar-brand"
          to={`/?lang=${currentLanguage}`}
          onContextMenu={(e) => e.preventDefault()}
        >
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
            {/* Home */}
            <li className="nav-item">
              <Link
                className="navbarLink nav-link active"
                aria-current="page"
                style={{ color: "#0047AB", fontWeight: "bold" }}
                to={`/?lang=${currentLanguage}`}
              >
                {t("navbar.home")}
              </Link>
            </li>

            {/* About */}
            <li className="nav-item  dropdown">
              <span
                className="navbarLink nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("navbar.about")}
              </span>
              {/* About dropdown menu */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* About Us */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/about?lang=${currentLanguage}`}
                  >
                    {t("navbar.abUs")}
                  </Link>
                </li>
                {/* Our Sponsors, Fosters & Volunteers */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/sponsors?lang=${currentLanguage}`}
                  >
                    {t("navbar.sponsorsFostersVolunteers")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Adopt */}
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("navbar.adopt")}
              </span>
              {/* Adopt dropdown menu */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* The Adoption Process */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/adoption?lang=${currentLanguage}`}
                  >
                    {t("navbar.adoptProcess")}
                  </Link>
                </li>
                {/* Adoptable Dogs */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/adoptable?lang=${currentLanguage}`}
                  >
                    {t("navbar.adoptable")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Success Stories */}
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("navbar.success")}
              </span>
              {/* Success Stories dropdown menu*/}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Already Adopted - Photos */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/adopted-photos?lang=${currentLanguage}`}
                  >
                    {t("navbar.adoptedPhotos")}
                  </Link>
                </li>
                {/* Already Adopted - Videos */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/adopted-videos?lang=${currentLanguage}`}
                  >
                    {t("navbar.adoptedVideos")}
                  </Link>
                </li>
                {/* Feedback from Adopters */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/feedback?lang=${currentLanguage}`}
                  >
                    {t("navbar.feedback")}
                  </Link>
                </li>
                {/* Send Us Your Photos */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/send-photos?lang=${currentLanguage}`}
                  >
                    {t("navbar.sendPhotos")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Get Involved */}
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("navbar.involve")}
              </span>
              {/* Get Involved dropdown menu */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Become a Sponsor */}
                <li
                  style={{
                    paddingBottom: "5px",
                  }}
                >
                  <Link
                    smooth
                    to={`/sponsors?lang=${currentLanguage}#beSponsor`}
                    onClick={() => {
                      handleLanguageChange("/sponsors#beSponsor");
                    }}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      paddingLeft: "16px",
                      paddingTop: "10px",
                      fontWeight: "normal",
                      display: "block",
                    }}
                    // Add hover styles
                    onMouseEnter={(e) => {
                      // Explicitly cast EventTarget to HTMLElement
                      const target = e.target as HTMLElement;
                      target.style.backgroundColor = "#f8f9fa";
                    }}
                    onMouseLeave={(e) => {
                      // Explicitly cast EventTarget to HTMLElement
                      const target = e.target as HTMLElement;
                      target.style.backgroundColor = "transparent";
                    }}
                  >
                    {t("navbar.sponsor")}
                  </Link>
                </li>
                {/* Become a Volunteer */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/volunteer?lang=${currentLanguage}`}
                  >
                    {t("navbar.volunteer")}
                  </Link>
                </li>
                {/* Become a Foster */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/fostering?lang=${currentLanguage}`}
                  >
                    {t("navbar.foster")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Important */}
            <li className="nav-item  dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("navbar.important")}
              </span>
              {/* Important dropdown menu */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* About the Breed */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/breed?lang=${currentLanguage}`}
                  >
                    {t("navbar.abBreed")}
                  </Link>
                </li>
                {/* About Microchips */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/microchips?lang=${currentLanguage}`}
                  >
                    {t("navbar.abMicrochips")}
                  </Link>
                </li>
                {/* About Spaying & Neutering */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/spay-neuter?lang=${currentLanguage}`}
                  >
                    {t("navbar.abSpayNeuter")}
                  </Link>
                </li>
                {/* Videos */}
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/videos?lang=${currentLanguage}`}
                  >
                    {t("navbar.videos")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`/contact?lang=${currentLanguage}`}
              >
                {t("navbar.contact")}
              </Link>
            </li>

            {/* Donate */}
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`/donate?lang=${currentLanguage}`}
              >
                {t("navbar.donate")}
              </Link>
            </li>

            {/* Language selection */}
            <li className="nav-item">
              {/* Hungarian button */}
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
              {/* English button */}
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

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFlickr,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Use i18n to persist language
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") ?? "hu"; // default to Hungarian

    // Change language and update URL
    i18n.changeLanguage(lang, (err, translatedText) => {
      if (err) {
        console.log("Something went wrong loading language", err);
      } else {
        // Log the translated text to ensure 't' is used
        console.log(translatedText);
      }
    });
    // Update URL with the current language
    navigate(`/contact?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container py-5">
          {/* Header */}
          <h1>
            <strong>{t("contact.contact")}</strong>
          </h1>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-div">
          <div className="columns">
            {/* Left Section : Email */}
            <div className="left-section">
              <div className="contact-section">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  style={{
                    backgroundColor: "orange", // Set the background color to orange
                    borderRadius: "50%", // Make it a circle by setting border-radius
                    padding: "20px", // Adjust padding for better appearance
                  }}
                />
              </div>
              <p className="contact-p">Email</p>
              <p>judit.valent@gmail.com</p>
            </div>

            {/* Right Section : Social Media */}
            <div className="right-section">
              <div className="contact-section">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2x"
                  style={{
                    width: "35px",
                    backgroundColor: "orange", // Set the background color to orange
                    borderRadius: "50%", // Make it a circle by setting border-radius
                    padding: "20px", // Adjust padding for better appearance
                  }}
                />
              </div>
              <div>
                <p className="contact-p">{t("contact.p1")}</p>
                <div className="social-icons">
                  <a href="https://bit.ly/3ua4R7s">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faFacebook}
                      size="2x"
                    />
                  </a>
                  <a href="https://bit.ly/3m89uKF">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faInstagram}
                      size="2x"
                      style={{ color: "#d62976" }}
                    />
                  </a>
                  <a href="http://bit.ly/3trNey7">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faYoutube}
                      size="2x"
                      style={{ color: "red" }}
                    />
                  </a>
                  <a href="http://bit.ly/3vyEfxz">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faFlickr}
                      size="2x"
                      style={{ color: "blue" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <form
            className="compact-form"
            name="contact"
            method="POST"
            data-netlify="true" // submission success message
          >
            <h2>
              <strong>{t("contact.p2")}</strong>
            </h2>
            <br />
            <div className="row mb-3">
              {/* First Name */}
              <div className="col-md-6">
                <label htmlFor="firstName">{t("contact.p3")}</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="form-control"
                />
              </div>
              {/* Last Name */}
              <div className="col-md-6">
                <label htmlFor="lastName">{t("contact.p4")}</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              {/* Email */}
              <div className="col-md-6">
                <label htmlFor="email">{t("contact.p5")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  required
                  className="form-control"
                />
              </div>
              {/* Telephone */}
              <div className="col-md-6">
                <label htmlFor="telephone">{t("contact.p7")}</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="form-control"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label htmlFor="subject">{t("contact.p6")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="form-control"
              />
            </div>

            {/* Comments/Questions */}
            <div className="mb-3">
              <label htmlFor="comments">{t("contact.p8")}</label>
              <textarea
                id="comments"
                name="comments"
                required
                className="form-control"
              />
            </div>

            {/* Upload Image */}
            <div className="mb-3">
              <label htmlFor="image">{t("contact.p9")}</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="form-control"
              />
            </div>

            <div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary">
                {t("contact.submitButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

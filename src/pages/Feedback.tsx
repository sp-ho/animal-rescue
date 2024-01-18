import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import astorImage from "../images/adopted/astor/astor-1_modified.jpg";
import batorImage from "../images/adopted/bator/bator-1_modified.jpg";
import danteImage from "../images/adopted/dante/dante1.jpg";
import hubaImage from "../images/adopted/huba/huba2_modified.jpg";
import diegoImage from "../images/adopted/diego/diego2_modified.jpg";
import bodzaImage from "../images/adopted/bodza/bodza1_modified.jpg";
import mangoImage from "../images/adopted/mango/mango1_modified.jpg";
import szanaImage from "../images/adopted/szana/szana-6_modified.jpg";

const Feedback = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Use i18n to persist language
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") ?? "en"; // default to English

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
    navigate(`/feedback?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>
            <strong>{t("feedback.feedback")}</strong>
          </h1>
          <div>
            <p className="intro">{t("feedback.intro")}</p>
          </div>
        </div>
      </div>

      {/* Section with 3 x 3 grid and grey background */}
      <div
        className="container-fluid bg-light mt-5 mb-5 py-5"
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Row 1 */}
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-3 mb-4 mx-3 mt-5">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src={mangoImage}
                alt="feedback1"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p5")}</p>
              <p>{t("feedback.p6")}</p>
              <p>{t("feedback.p7")}</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 mb-4 mx-3 mt-5">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src={diegoImage}
                alt="feedback2"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p3")}</p>
              <p>{t("feedback.p4")}</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 mb-4 mx-3 mt-5">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src={danteImage}
                alt="feedback3"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p12")}</p>
              <p>{t("feedback.p13")}</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-3 mb-4 mt-5 mx-3">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src={bodzaImage}
                alt="feedback3"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p8")}</p>
              <p>{t("feedback.p9")}</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 mb-4 mt-5 mx-3">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src={hubaImage}
                alt="feedback4"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p1")}</p>
              <p>{t("feedback.p2")}</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 mb-4 mt-5 mx-3">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src={szanaImage}
                alt="feedback4"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p10")}</p>
              <p>{t("feedback.p11")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div
        className="container-fluid mt-5 mb-5"
        onContextMenu={(e) => e.preventDefault()}
      >
        <h2 className="mb-5" style={{ marginLeft: "calc(-40vw + 50%)" }}>
          <strong>{t("home.success")}</strong>
        </h2>
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image */}
            <Link to={"/adopted-photos?lang=" + i18n.language} target="_blank">
              <img
                src={astorImage}
                alt="Already Adopted Dog 1"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("feedback.photos")}</p>
              </div>
            </Link>
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image */}
            <Link to={"/adopted-videos?lang=" + i18n.language} target="_blank">
              <img
                src={batorImage}
                alt="Already Adopted Dog 2"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("feedback.videos")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-center py-5"
        style={{ color: "white" }}
      >
        <h3
          className="mt-5 mb-5"
          style={{ fontWeight: "bold", marginTop: "3rem" }}
        >
          {t("feedback.thinkAdopt")}
        </h3>
        <p className="mt-5 mb-5">{t("feedback.adoptionProcess")}</p>
        <Link to={"/adoption?lang=" + i18n.language} target="_blank">
          <button className="button-style mb-5">
            {t("feedback.learnMoreButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Feedback;

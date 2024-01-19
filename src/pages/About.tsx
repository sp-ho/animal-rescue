import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import aboutUsImage from "../images/german-shepherds-foundation.jpg";

const About = () => {
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
    navigate(`/about?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          {/* Header */}
          <h1>
            <strong>{t("aboutUs.aboutUs")}</strong>
          </h1>
          {/* Intro */}
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("aboutUs.p1")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with 2 columns */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row">
            {/* Image on the left */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={aboutUsImage}
                alt="About Us"
                className="img-fluid rounded"
                style={{ maxWidth: "90%", height: "auto", marginBottom: 10 }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6">
              <p>{t("aboutUs.p2")}</p>
              <p>{t("aboutUs.p3")}</p>
              <p>{t("aboutUs.p4")}</p>
              <p>{t("aboutUs.p5")}</p>
              <p>{t("aboutUs.p6")}</p>
              <p>{t("aboutUs.p7")}</p>
              <p>{t("aboutUs.p8")}</p>
              <p>
                {t("aboutUs.p9")} <br /> {t("aboutUs.p10")}
              </p>
              <p>{t("aboutUs.p11")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

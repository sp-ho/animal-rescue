import { useTranslation } from "react-i18next";
import fosterImage from "../images/adoption/foster-a-dog.jpg";
import fosterImageHu from "../images/spay_neuter/dog-german-shepherd.jpg";
import successImage1 from "../images/adoption/success-stories-kutya.jpg";
import successImage2 from "../images/adoption/success-stories-kutyaink.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Adoption = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = (destination: string) => () => {
    // Set the hash part of the URL to an empty string
    window.location.href = `${destination}?lang=${i18n.language}#`;
  };

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
    navigate(`/adoption?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          {/* Header */}
          <h1>
            <strong>{t("adoption.adoptionProcess")}</strong>
          </h1>
          {/* Intro */}
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("adoption.intro")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with 2 columns */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row py-5">
            {/* Image on the left */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={i18n.language === "hu" ? fosterImageHu : fosterImage}
                alt="About Us"
                className="img-fluid rounded"
                style={{ maxWidth: "90%", height: "auto", marginBottom: 10 }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6">
              <p>{t("adoption.p1")}</p>
              <p>{t("adoption.p2")}</p>
              <p>{t("adoption.p3")}</p>
              <p>{t("adoption.p4")}</p>
              <p>{t("adoption.p5")}</p>
              <Link to={`/contact`} onClick={handleButtonClick("/contact")}>
                <button className="button-style mb-5">
                  {t("adoption.contactButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* White background section - Our Success Stories */}
      <div className="container-fluid mt-5 mb-5">
        <h3 className="mb-5 text-center">
          <strong>{t("adoption.success")}</strong>
        </h3>
        <div
          className="row py-2 justify-content-center"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Placeholder for images */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image on the left */}
            <Link to={"/adopted-photos?lang=" + i18n.language} target="_blank">
              <img
                src={successImage1}
                alt="dog-german-shepherd"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              {/* Hover effect */}
              <div className="hover-overlay">
                <p>{t("adoption.photos")}</p>
              </div>
            </Link>
          </div>
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image on the right */}
            <Link to={"/adopted-videos?lang=" + i18n.language} target="_blank">
              <img
                src={successImage2}
                alt="microchips"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              {/* Hover effect */}
              <div className="hover-overlay">
                <p>{t("adoption.videos")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Dark background section at the bottom */}
      <div
        className="container-fluid bg-dark text-center py-5"
        style={{ color: "white" }}
      >
        <h3
          className="mt-5 mb-5"
          style={{ fontWeight: "bold", marginTop: "3rem" }}
        >
          {t("adoption.becomeFoster")}
        </h3>
        <p className="mt-5">{t("adoption.fosterProcess1")}</p>
        <p className="mb-5">{t("adoption.fosterProcess2")}</p>
        {/* Learn More button */}
        <Link to={`/fostering`} onClick={handleButtonClick("/fostering")}>
          <button className="button-style mb-5">
            {t("adoption.learnMoreButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Adoption;

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import breedImage from "../images/breed/about-the-breed.jpg";
import adoptImage1 from "../images/breed/adopting-dog.jpg";
import adoptImage2 from "../images/adoption/foster-a-dog.jpg";
import { Link, useNavigate } from "react-router-dom";

const Breed = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = (destination: string) => () => {
    // Set the hash part of the URL to an empty string
    window.location.href = `${destination}?lang=${i18n.language}#`;
  };

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
    navigate(`/breed?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>
            <strong>{t("breed.aboutBreed")}</strong>
          </h1>
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("breed.p1")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row py-5 justify-content-center">
            {/* Image on the left with reduced margin */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={breedImage}
                alt="About Fostering"
                className="img-fluid rounded"
                style={{ maxWidth: "90%", height: "auto", marginBottom: 10 }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6">
              <p>{t("breed.p2")}</p>
              <p>{t("breed.p3")}</p>
              <p>{t("breed.p4")}</p>
              <p>{t("breed.p5")}</p>
            </div>
          </div>

          {/* Section with 3 columns */}
          <div className="row text-center">
            <p className="mt-5 mb-5 text-center">{t("breed.p6")}</p>
            {/* Column 1 */}
            <div className="col-md-4 ">
              <p>{t("breed.p7")}</p>
              <p>{t("breed.p7a")}</p>
              <p>{t("breed.p7b")}</p>
            </div>
            {/* Column 2 */}
            <div className="col-md-4">
              <p>{t("breed.p8")}</p>
              <p>{t("breed.p8a")}</p>
              <p>{t("breed.p8b")}</p>
            </div>
            {/* Column 3 */}
            <div className="col-md-4 mb-5">
              <p>{t("breed.p9")}</p>
              <p>{t("breed.p9a")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section with black background and 2x2 grid for YouTube videos */}
      <div className="container-fluid bg-dark py-5 text-center">
        <h3
          className="text-center"
          style={{ fontWeight: "bold", color: "white" }}
        >
          {t("breed.p10")}
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              {/* Video 1 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/MxaJb-fYR4M"
                title="All about the German Shepherd - History, care & training"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-5">
              {/* Video 2 */}
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/W2pkvy5t3Bo `}
                title="Best German Shepherd Puppy Training Tips"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 3 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/W7eGaraQSqs"
                title="All you need to know about German Shepherd dogs - History, Transformation, breeding and types"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 4 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ddv0QaPay94"
                title="History Of The GERMAN SHEPHERD"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Link to={`/videos`} onClick={handleButtonClick("/videos")}>
            <button className="button-style mt-5">
              {t("breed.videosButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid mt-5 mb-5">
        <h3 className="mb-5 text-center">
          <strong>{t("breed.p11")}</strong>
        </h3>
        <div
          className="row justify-content-center"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image */}
            <Link to={"/adoption?lang=" + i18n.language} target="_blank">
              <img
                src={adoptImage1}
                alt="adopting-dog"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("adoption.adoptionProcess")}</p>
              </div>
            </Link>
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image */}
            <Link to={"/fostering?lang=" + i18n.language} target="_blank">
              <img
                src={adoptImage2}
                alt="foster-a-dog"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("fostering.aboutFostering")}</p>
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
          {t("breed.p12")}
        </h3>
        <p className="mt-5 mb-5">{t("breed.p13")}</p>
        <Link to={`/volunteer`} onClick={handleButtonClick("/volunteer")}>
          <button className="button-style mb-5">
            {t("breed.learnMoreButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Breed;

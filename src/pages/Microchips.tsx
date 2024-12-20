import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import dogImage from "../images/microchips/german-shepherd-dog.jpg";
import microchipsImage from "../images/microchips/microchips-for-dogs.jpg";
import spayNeuterImage from "../images/microchips/spay-neuter.jpg";

const Microchips = () => {
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
    navigate(`/microchips?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          {/* Header */}
          <h1>
            <strong>{t("microchips.aboutMicrochips")}</strong>
          </h1>
          {/* Intro */}
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("microchips.intro")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row py-5 justify-content-center">
            {/* Text on the left */}
            <div className="col-md-6">
              <p>
                <strong>{t("microchips.p1")}</strong>
              </p>
              <p>{t("microchips.p2")}</p>
              <p>
                <strong>{t("microchips.p3")}</strong>
              </p>
              <p>{t("microchips.p4")}</p>
              <p>
                <strong>{t("microchips.p5")}</strong>
              </p>
              <p>{t("microchips.p6")}</p>
              <p>
                <strong>{t("microchips.p7")}</strong>
              </p>
              <p>{t("microchips.p8")}</p>
              <p>
                <strong>{t("microchips.p9")}</strong>
              </p>
              <p>{t("microchips.p10")}</p>
              <p>
                <strong>{t("microchips.p11")}</strong>
              </p>
              <p>{t("microchips.p12")}</p>
            </div>

            {/* Text on the right */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              {/* Image  */}
              <img
                src={microchipsImage}
                alt="microchips-for-dogs"
                className="img-fluid rounded"
                style={{ maxWidth: "100%", height: "auto", marginBottom: 10 }}
              />
              <p>
                <strong>{t("microchips.p13")}</strong>
              </p>
              <p>{t("microchips.p14")}</p>
              <p>
                <strong>{t("microchips.p15")}</strong>
              </p>
              <p>{t("microchips.p16")}</p>
              <p>
                <strong>{t("microchips.p17")}</strong>
              </p>
              <p>{t("microchips.p18")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark background section with 2x2 grid of YouTube videos */}
      <div className="container-fluid bg-dark py-5 text-center">
        <h3
          className="text-center"
          style={{ fontWeight: "bold", color: "white" }}
        >
          {t("microchips.videos")}
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              {/* Video 1 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/J2IJe9mCszA"
                title="Why you should microchip your dog"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-5">
              {/* Video 2 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Qo-Ft84bf84"
                title="Watch a dog get microchipped"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 3 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/TiowQx0ieP8"
                title="Science behind your pet's microchip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 4 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/mGTGT4NV95Q"
                title="Microchip IDs help return lost pets"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Link to={`/videos`} onClick={handleButtonClick("/videos")}>
            <button className="button-style mt-5">
              {t("microchips.videosButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* White background section with 2 columns */}
      <div
        className="container-fluid mt-5 mb-5"
        onContextMenu={(e) => e.preventDefault()}
      >
        <h3 className="mb-5 text-center">
          <strong>{t("microchips.spayNeuter")}</strong>
        </h3>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image on the left */}
            <Link to={"/breed?lang=" + i18n.language}>
              <img
                src={dogImage}
                alt="german-shepherd-dog"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("breed.aboutBreed")}</p>
              </div>
            </Link>
          </div>
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image on the right */}
            <Link to={"/spay-neuter?lang=" + i18n.language} target="_blank">
              <img
                src={spayNeuterImage}
                alt="spay-neuter"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("spay-neuter.aboutSpayNeuter")}</p>
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
          {t("microchips.thinkAdopt")}
        </h3>
        <p className="mt-5 mb-5">{t("microchips.adoptionProcess")}</p>
        <Link to={`/adoption`} onClick={handleButtonClick("/adoption")}>
          <button className="button-style mb-5">
            {t("microchips.learnMoreButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Microchips;

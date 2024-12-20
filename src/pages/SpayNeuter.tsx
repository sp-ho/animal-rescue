import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import neuterSpayImage from "../images/spay_neuter/neuter-spay.jpg";
import microchipsImage from "../images/spay_neuter/microchips.jpg";
import dogImage from "../images/spay_neuter/dog-german-shepherd.jpg";

const SpayNeuter = () => {
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
    navigate(`/spay-neuter?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>
            <strong>{t("spay-neuter.aboutSpayNeuter")}</strong>
          </h1>
          <div>
            <div>
              <p className="intro d-flex">{t("spay-neuter.intro")}</p>
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
                <strong>{t("spay-neuter.p1")}</strong>
              </p>
              <p>{t("spay-neuter.p2")}</p>
              <p className="mt-5">
                <strong>{t("spay-neuter.p3")}</strong>
              </p>
              <p>{t("spay-neuter.p4")}</p>
              <p>{t("spay-neuter.p5")}</p>
              <p>{t("spay-neuter.p6")}</p>
              <p>{t("spay-neuter.p7")}</p>
              <p>{t("spay-neuter.p8")}</p>
              <p>{t("spay-neuter.p9")}</p>
              <p>{t("spay-neuter.p10")}</p>
              <p>{t("spay-neuter.p11")}</p>
            </div>

            {/* Image on the right */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={neuterSpayImage}
                alt="neuter-spay"
                className="img-fluid rounded"
                style={{ maxWidth: "100%", height: "auto", marginBottom: 10 }}
              />
              <p>
                <strong>{t("spay-neuter.p12")}</strong>
              </p>
              <p>{t("spay-neuter.p13")}</p>
              <p>
                <strong>{t("spay-neuter.p14")}</strong>
              </p>
              <p>{t("spay-neuter.p15")}</p>
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
          {t("spay-neuter.videos")}
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              {/* Video 1 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/CewaVQot58U"
                title="Neutering & spaying German Shepherds"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-5">
              {/* Video 2 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1B_i3TYByYs"
                title="How to care dogs after spay neuter"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 3 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/zoNL_jrbNKk"
                title="Post-Spay/Neuter surgery information"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 4 */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/GWON6u80vNQ"
                title="Post surgical pet care at home"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Link to={`/videos`} onClick={handleButtonClick("/videos")}>
            <button className="button-style mt-5">
              {t("spay-neuter.videosButton")}
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
          <strong>{t("spay-neuter.spayNeuter")}</strong>
        </h3>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image on the left */}
            <Link to={"/breed?lang=" + i18n.language} target="_blank">
              <img
                src={dogImage}
                alt="dog-german-shepherd"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("breed.aboutBreed")}</p>
              </div>
            </Link>
          </div>
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center image-container">
            {/* Image on the right */}
            <Link to={"/microchips?lang=" + i18n.language} target="_blank">
              <img
                src={microchipsImage}
                alt="microchips"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("microchips.aboutMicrochips")}</p>
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
          {t("spay-neuter.becomeFoster")}
        </h3>
        <p className="mt-5">{t("spay-neuter.fosterProcess1")}</p>
        <p className="mb-5">{t("spay-neuter.fosterProcess2")}</p>
        <Link to={`/fostering`} onClick={handleButtonClick("/fostering")}>
          <button className="button-style mb-5">
            {t("spay-neuter.learnMoreButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default SpayNeuter;

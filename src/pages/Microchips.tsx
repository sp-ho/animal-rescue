import { useTranslation } from "react-i18next";
import dogImage from "../images/microchips/german-shepherd-dog.jpg";
import microchipsImage from "../images/microchips/microchips-for-dogs.jpg";
import spayNeuterImage from "../images/microchips/spay-neuter.jpg";
import { Link } from "react-router-dom";

const Microchips = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("microchips.aboutMicrochips")}</h1>
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("microchips.intro")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Image on the right with reduced margin */}
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
            <div className="col-md-6">
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

      {/* Section with black background and 2x2 grid for YouTube videos */}
      <div className="container-fluid bg-dark py-5 text-center">
        <h3 className="text-center" style={{ color: "white" }}>
          {t("microchips.videos")}
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              {/* Video 1 */}
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/VIDEO_ID_1`}
                title="YouTube Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-5">
              {/* Video 2 */}
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/VIDEO_ID_2`}
                title="YouTube Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 3 */}
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/VIDEO_ID_3`}
                title="YouTube Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 mt-4">
              {/* Video 4 */}
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/VIDEO_ID_4`}
                title="YouTube Video 4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Link to="/" target="_blank">
            <button
              className="btn btn-secondary mt-5"
              style={{
                background: "linear-gradient(45deg, #cc66ff, #3399ff)",
                backgroundSize: "200% 200%",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                transition: "0.5s",
                cursor: "pointer",
              }}
            >
              {t("microchips.videosButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid mt-5 mb-5">
        <h3 className="mb-5 text-center">{t("microchips.spayNeuter")}</h3>
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={dogImage}
              alt="german-shepherd-dog"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={spayNeuterImage}
              alt="spay-neuter"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-center py-5"
        style={{ color: "white" }}
      >
        <h3 className="mt-5 mb-5" style={{ marginTop: "3rem" }}>
          {t("microchips.thinkAdopt")}
        </h3>
        <p className="mt-5 mb-5">{t("microchips.adoptionProcess")}</p>
        <Link to="/adoption" target="_blank">
          <button
            className="btn btn-secondary mb-5"
            style={{
              background: "linear-gradient(90deg,  #cc66ff, #3399ff)",
              backgroundSize: "200% 200%",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              transition: "0.5s",
              cursor: "pointer",
            }}
          >
            {t("microchips.learnMoreButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Microchips;
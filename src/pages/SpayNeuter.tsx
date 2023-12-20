import { useTranslation } from "react-i18next";
import neuterSpayImage from "../images/spay_neuter/neuter-spay.jpg";
import microchipsImage from "../images/spay_neuter/microchips.jpg";
import dogImage from "../images/spay_neuter/dog-german-shepherd.jpg";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 72de7b4c2763da49b56a044367718747dbb09d12

const SpayNeuter = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("spay-neuter.aboutSpayNeuter")}</h1>
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("spay-neuter.intro")}</p>
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

            {/* Text on the right */}
            <div className="col-md-6">
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

      {/* Section with black background and 2x2 grid for YouTube videos */}
      <div className="container-fluid bg-dark py-5 text-center">
        <h3 className="text-center" style={{ color: "white" }}>
          {t("spay-neuter.videos")}
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
            {t("spay-neuter.videosButton")}
          </button>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid mt-5 mb-5">
        <h3 className="mb-5 text-center">{t("spay-neuter.spayNeuter")}</h3>
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={dogImage}
              alt="dog-german-shepherd"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={microchipsImage}
              alt="microchips"
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
          {t("spay-neuter.becomeFoster")}
        </h3>
        <p className="mt-5">{t("spay-neuter.fosterProcess1")}</p>
        <p className="mb-5">{t("spay-neuter.fosterProcess2")}</p>
<<<<<<< HEAD
        <Link to="/fostering">
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
            {t("spay-neuter.learnMoreButton")}
          </button>
        </Link>
=======
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
          {t("spay-neuter.learnMoreButton")}
        </button>
>>>>>>> 72de7b4c2763da49b56a044367718747dbb09d12
      </div>
    </>
  );
};

export default SpayNeuter;

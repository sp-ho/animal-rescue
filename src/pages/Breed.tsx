import { useTranslation } from "react-i18next";
import breedImage from "../images/breed/about-the-breed.jpg";
import adoptImage1 from "../images/breed/adopting-dog.jpg";
import adoptImage2 from "../images/adoption/foster-a-dog.jpg";

const Breed = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("breed.aboutBreed")}</h1>
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
          <div className="row justify-content-center">
            {/* Image on the left with reduced margin */}
            <div className="col-md-6">
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
        <h3 className="text-center" style={{ color: "white" }}>
          {t("breed.p10")}
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
            {t("breed.videosButton")}
          </button>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid mt-5 mb-5">
        <h3 className="mb-5 text-center">{t("breed.p11")}</h3>
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={adoptImage1}
              alt="adopting-dog"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={adoptImage2}
              alt="foster-a-dog"
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
          {t("breed.p12")}
        </h3>
        <p className="mt-5 mb-5">{t("breed.p13")}</p>
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
          {t("breed.learnMoreButton")}
        </button>
      </div>
    </>
  );
};

export default Breed;
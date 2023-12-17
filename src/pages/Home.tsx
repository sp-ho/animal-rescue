import backgroundImage from "../images/german-shepherd-dog.jpg";
import breedImage from "../images/home/about-the-breed.jpg";
import adoptedImage1 from "../images/home/already-adopted-dogs1.jpg";
import adoptedImage2 from "../images/home/already-adopted-dogs2.jpg";
import fosterImage from "../images/home/become-a-foster-home.jpg";
import dogCircleImage1 from "../images/home/dog-circle1.jpg";
import dogCircleImage2 from "../images/home/dog-circle2.jpg";
import dogCircleImage3 from "../images/home/dog-circle3.jpg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* Big Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "750px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Text and Button */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "200px",
            transform: "translateY(-50%)",
            textAlign: "left",
            maxWidth: "60%",
            color: "#fff",
            wordWrap: "break-word",
          }}
        >
          <h1>{t("home.line1")}</h1>
          <h1>{t("home.line2")}</h1>
          <h1>{t("home.line3")}</h1>
          <button
            className="btn"
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
            {t("home.adoptButton")}
          </button>
        </div>
      </div>

      {/* Section with 3 columns */}
      <div className="container mt-5 mb-4">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-4">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div className="check-icon">
                <FontAwesomeIcon icon={faCheck} className="text-black" />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="text-center mb-3">{t("home.spay-neuter")}</h5>
            {/* Description */}
            <p>{t("home.spay-neuter2")}</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-4 mb-4">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div className="check-icon">
                <FontAwesomeIcon icon={faCheck} className="text-black" />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="text-center mb-3">{t("home.dogs-adopted")}</h5>
            {/* Description */}
            <p>{t("home.dogs-adopted2")}</p>
          </div>
          {/* Column 3 */}
          <div className="col-md-4 mb-4">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div className="check-icon">
                <FontAwesomeIcon icon={faCheck} className="text-black" />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="text-center mb-3">{t("home.together")}</h5>
            {/* Description */}
            <p>{t("home.together2")}</p>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and grey background */}
      <div className="container-fluid bg-light mt-5 mb-5">
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for YouTube video */}
          <div className="col-md-6 mt-5 mb-5">
            {/* YouTube video here */}
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/VIDEO_ID`}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Column 2 */}
          <div className="col-md-4 d-flex flex-column justify-content-center">
            {/* Subtitle 1 */}
            <h2 className="mb-4">{t("home.story")}</h2>
            {/* Subtitle 2 */}
            <p className="mb-4">{t("home.story2")}</p>
            {/* Description */}
            <button
              className="btn"
              style={{
                maxWidth: "150px",
                background: "linear-gradient(90deg, #cc66ff, #3399ff)",
                backgroundSize: "200% 200%",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                transition: "0.5s",
                cursor: "pointer",
              }}
            >
              {t("home.abUsButton")}
            </button>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for YouTube video */}
          <div className="col-md-5 mb-5 d-flex flex-column justify-content-center">
            {/* Subtitle 1 */}
            <h2 className="mb-4">{t("home.foster")}</h2>
            {/* Subtitle 2 */}
            <p className="mb-4">{t("home.foster2")}</p>
            {/* Description */}
            <button
              className="btn"
              style={{
                maxWidth: "200px",
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
              {t("home.fosterButton")}
            </button>
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4">
            {/* Image */}
            <img
              src={fosterImage}
              alt="Become a Foster Home"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Section with 2 columns and black background */}
      <div className="container-fluid bg-dark mt-5 mb-5">
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-5 mt-5">
            {/* Image */}
            <img
              src={breedImage}
              alt="About the Breed"
              style={{ width: "100%", marginLeft: "calc(-25vw + 50%)" }}
            />
          </div>
          {/* Column 2 */}
          <div className="col-md-4 mb-4 d-flex flex-column justify-content-center">
            {/* Subtitle 1 */}
            <h2 className="mb-4" style={{ color: "white" }}>
              {t("home.breed")}
            </h2>
            {/* Subtitle 2 */}
            <p className="mb-4" style={{ color: "white" }}>
              {t("home.breed2")}
            </p>
            {/* Description */}
            <button
              className="btn btn-secondary"
              style={{
                maxWidth: "200px",
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
              {t("home.breedButton")}
            </button>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid mt-5 mb-5">
        <h2 className="mb-5" style={{ marginLeft: "calc(-40vw + 50%)" }}>
          {t("home.success")}
        </h2>
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={adoptedImage1}
              alt="Already Adopted Dog 1"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src={adoptedImage2}
              alt="Already Adopted Dog 2"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
        </div>
      </div>

      {/* Section with 3 columns */}
      <div className="container-fluid bg-light mt-5">
        <div className="row justify-content-center">
          {/* Column 1 */}
          <div className="col-md-3 mb-5 mt-5">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div>
                <img
                  src={dogCircleImage1}
                  alt="Dog Circle 1"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Subtitle */}
            <p className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success1a")}
            </p>
            {/* Description */}
            <p style={{ fontStyle: "italic" }}>{t("home.success1b")}</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 mb-4 mt-5">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div>
                <img
                  src={dogCircleImage2}
                  alt="Dog Circle 2"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Subtitle */}
            <p className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success2a")}
            </p>
            {/* Description */}
            <p style={{ fontStyle: "italic" }}>{t("home.success2b")}</p>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 mb-4 mt-5">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div>
                <img
                  src={dogCircleImage3}
                  alt="Dog Circle 3"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Subtitle */}
            <p className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success3a")}
            </p>
            {/* Description */}
            <p style={{ fontStyle: "italic" }}>{t("home.success3b")}</p>
          </div>
        </div>
      </div>

      {/* end of page */}
    </div>
  );
};

export default Home;

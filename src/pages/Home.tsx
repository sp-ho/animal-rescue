import backgroundImage from "../images/german-shepherd-dog.jpg";
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
          backgroundImage: `url(${backgroundImage})`, // image
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
          <h1>{t("home.line2")}</h1>
          <button className="btn btn-secondary">{t("home.adoptButton")}</button>
        </div>
      </div>

      {/* Section with 3 columns */}
      <div className="container" style={{ margin: "100px auto 100px auto" }}>
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4">
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
          <div className="col-md-4">
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
          <div className="col-md-4">
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
      <div className="container-fluid bg-light">
        <div className="row">
          {/* Column 1 - Placeholder for YouTube video */}
          <div
            className="col-md-6"
            style={{
              marginLeft: "150px",
              marginRight: "20px",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
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
          <div
            className="col-md-3"
            style={{
              marginRight: "20px",
              marginTop: "180px",
            }}
          >
            {/* Subtitle 1 */}
            <h2 className="mb-4">{t("home.story")}</h2>
            {/* Subtitle 2 */}
            <p className="mb-4">{t("home.story2")}</p>
            {/* Description */}
            <button className="btn btn-secondary">
              {t("home.abUsButton")}
            </button>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid">
        <div className="row">
          {/* Column 1 - Placeholder for YouTube video */}
          <div
            className="col-md-5"
            style={{
              marginLeft: "150px",
              marginRight: "20px",
              marginTop: "300px",
            }}
          >
            {/* Subtitle 1 */}
            <h2 className="mb-4">{t("home.foster")}</h2>
            {/* Subtitle 2 */}
            <p className="mb-4">{t("home.foster2")}</p>
            {/* Description */}
            <button className="btn btn-secondary">
              {t("home.fosterButton")}
            </button>
          </div>
          {/* Column 2 */}
          <div
            className="col-md-5"
            style={{
              marginLeft: "20px",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
            {/* Image */}
            <img
              src="src\images\home\become-a-foster-home.jpg"
              alt="Image Placeholder"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>

      {/* Section with 2 columns and black background */}
      <div className="container-fluid bg-dark">
        <div className="row">
          {/* Column 1 - Placeholder for image */}
          <div
            className="col-md-5"
            style={{
              marginLeft: "150px",
              marginRight: "20px",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
            {/* Image */}
            <img
              src="src\images\home\about-the-breed.jpg"
              alt="Image Placeholder"
              style={{ width: "90%" }}
            />
          </div>
          {/* Column 2 */}
          <div
            className="col-md-4"
            style={{
              marginRight: "50px",
              marginTop: "250px",
            }}
          >
            {/* Subtitle 1 */}
            <h2 className="mb-4" style={{ color: "white" }}>
              {t("home.breed")}
            </h2>
            {/* Subtitle 2 */}
            <p className="mb-4" style={{ color: "white" }}>
              {t("home.breed2")}
            </p>
            {/* Description */}
            <button className="btn btn-secondary">
              {t("home.breedButton")}
            </button>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid">
        <h2 style={{ marginTop: "50px", marginLeft: "150px" }}>
          {t("home.success")}
        </h2>
        <div className="row">
          {/* Column 1 - Placeholder for image */}
          <div
            className="col-md-5 text-center"
            style={{
              marginTop: "50px",
              marginLeft: "auto",
              marginRight: 0,
              marginBottom: "50px",
            }}
          >
            {/* Image */}
            <img
              src="src\images\home\already-adopted-dogs1.jpg"
              alt="Image Placeholder"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
          {/* Column 2 */}
          <div
            className="col-md-5 text-center"
            style={{ marginTop: "50px", marginLeft: 0, marginRight: "auto" }}
          >
            {/* Image */}
            <img
              src="src\images\home\already-adopted-dogs2.jpg"
              alt="Image Placeholder"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
        </div>
      </div>

      {/* Section with 3 columns */}
      <div className="container-fluid bg-light">
        <div className="row">
          {/* Column 1 */}
          <div
            className="col-md-3"
            style={{
              marginTop: "100px",
              marginLeft: "150px",
              marginRight: "25px",
              marginBottom: "100px",
            }}
          >
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div>
                <img
                  src="src\images\home\dog-circle1.jpg"
                  alt="Image Placeholder"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success1a")}
            </h5>
            {/* Description */}
            <p style={{ fontStyle: "italic" }}>{t("home.success1b")}</p>
          </div>
          {/* Column 2 */}
          <div
            className="col-md-3"
            style={{
              marginTop: "100px",
              marginLeft: "25px",
              marginRight: "25px",
              marginBottom: "100px",
            }}
          >
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div>
                <img
                  src="src\images\home\dog-circle2.jpg"
                  alt="Image Placeholder"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success2a")}
            </h5>
            {/* Description */}
            <p style={{ fontStyle: "italic" }}>{t("home.success2b")}</p>
          </div>
          {/* Column 3 */}
          <div
            className="col-md-3"
            style={{
              marginTop: "100px",
              marginLeft: "25px",
              marginRight: "50px",
              marginBottom: "100px",
            }}
          >
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div>
                <img
                  src="src\images\home\dog-circle3.jpg"
                  alt="Image Placeholder"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success3a")}
            </h5>
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

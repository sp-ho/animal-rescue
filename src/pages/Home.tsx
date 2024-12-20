import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../images/german-shepherd-dog.jpg";
import breedImage from "../images/home/about-the-breed.jpg";
import adoptedImage1 from "../images/home/already-adopted-dogs1.jpg";
import adoptedImage2 from "../images/home/already-adopted-dogs2.jpg";
import fosterImage from "../images/home/become-a-foster-home.jpg";
import dogCircleImage1 from "../images/home/dog-circle1.jpg";
import dogCircleImage2 from "../images/home/dog-circle2.jpg";
import dogCircleImage3 from "../images/home/dog-circle3.jpg";

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = (destination: string) => () => {
    // Set the hash part of the URL to an empty string
    window.location.href = `${destination}?lang=${i18n.language}#`;
  };

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
    navigate(`/?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <div>
      {/* Big Image */}
      <div
        className="disable-right-click"
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
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Text and Button */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "100px",
            transform: "translateY(-50%)",
            textAlign: "left",
            maxWidth: "60%",
            color: "#fff",
            wordWrap: "break-word",
          }}
        >
          <h1>
            <strong>{t("home.line1")}</strong>
          </h1>
          <h1>
            <strong>{t("home.line2")}</strong>
          </h1>
          <h1>
            <strong>{t("home.line3")}</strong>
          </h1>
          <Link to={`/adoption`} onClick={handleButtonClick("/adoption")}>
            <button className="button-style mt-2">
              {t("home.adoptButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* WHite background section with 3 columns */}
      <div className="container mt-5 mb-4">
        <div className="row">
          {/* Spay/Neuter program */}
          <div className="col-md-4 mb-4">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div className="check-icon">
                <FontAwesomeIcon icon={faCheck} className="text-black" />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="text-center mb-3">
              <strong>{t("home.spay-neuter")}</strong>
            </h5>
            {/* Description */}
            <p>{t("home.spay-neuter2")}</p>
          </div>
          {/* Dogs Adopted */}
          <div className="col-md-4 mb-4">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div className="check-icon">
                <FontAwesomeIcon icon={faCheck} className="text-black" />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="text-center mb-3">
              <strong>{t("home.dogs-adopted")}</strong>
            </h5>
            {/* Description */}
            <p>{t("home.dogs-adopted2")}</p>
          </div>
          {/* Together we can do more */}
          <div className="col-md-4 mb-4">
            <div className="text-center mb-3">
              {/* Check icon in a circle */}
              <div className="check-icon">
                <FontAwesomeIcon icon={faCheck} className="text-black" />
              </div>
            </div>
            {/* Subtitle */}
            <h5 className="text-center mb-3">
              <strong>{t("home.together")}</strong>
            </h5>
            {/* Description */}
            <p>{t("home.together2")}</p>
          </div>
        </div>
      </div>

      {/* Grey background section - Our Story */}
      <div className="container-fluid bg-light mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5 mb-5">
            {/* YouTube video on the left */}
            <iframe
              width="90%"
              height="400"
              src="https://www.youtube.com/embed/vtNJoNGZTEw"
              title="Our Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Text on the right */}
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <h2 className="mb-4">
              <strong>{t("home.story")}</strong>
            </h2>
            <p className="mb-4">{t("home.story2")}</p>
            <Link to={`/about`} onClick={handleButtonClick("/about")}>
              <button className="button-style">{t("home.abUsButton")}</button>
            </Link>
          </div>
        </div>
      </div>

      {/* White background section - Become a foster home */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          {/* Text on the left */}
          <div className="col-md-5 mb-5 d-flex flex-column justify-content-center">
            <h2 className="mb-4">
              <strong>{t("home.foster")}</strong>
            </h2>
            <p className="mb-4">{t("home.foster2")}</p>
            <Link to={`/fostering`} onClick={handleButtonClick("/fostering")}>
              <button className="button-style">{t("home.fosterButton")}</button>
            </Link>
          </div>
          {/* Image on the right */}
          <div
            className="col-md-5 mb-4"
            onContextMenu={(e) => e.preventDefault()}
          >
            <img
              src={fosterImage}
              alt="Become a Foster Home"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Dark background section - About the Breed */}
      <div className="container-fluid bg-dark mt-5 mb-5">
        <div className="row justify-content-center">
          <div
            className="col-md-5 mb-5 mt-5"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Image on the left */}
            <img
              src={breedImage}
              alt="About the Breed"
              style={{ width: "100%", marginLeft: "calc(-25vw + 50%)" }}
            />
          </div>
          {/* Text on the right */}
          <div className="col-md-4 mb-4 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ color: "white" }}>
              <strong>{t("home.breed")}</strong>
            </h2>
            <p className="mb-4" style={{ color: "white" }}>
              {t("home.breed2")}
            </p>
            <Link to={`/breed`} onClick={handleButtonClick("/breed")}>
              <button className="button-style">{t("home.breedButton")}</button>
            </Link>
          </div>
        </div>
      </div>

      {/* White background section with 2 columns  */}
      <div className="container-fluid mt-5 mb-5">
        <h2 className="mb-5" style={{ marginLeft: "calc(-40vw + 50%)" }}>
          <strong>{t("home.success")}</strong>
        </h2>
        <div className="row justify-content-center">
          <div
            className="col-sm-6 col-md-5 mb-4 d-flex align-items-center justify-content-center image-container"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Image on the left */}
            <Link to={"/adopted-photos?lang=" + i18n.language} target="_blank">
              <img
                src={adoptedImage1}
                alt="Already Adopted Dog 1"
                style={{
                  width: "90%",
                  borderRadius: "15px",
                }}
              />
              <div className="hover-overlay">
                <p>{t("home.photos")}</p>
              </div>
            </Link>
          </div>
          <div
            className="col-sm-6 col-md-5 mb-4 d-flex align-items-center justify-content-center image-container"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Image on the right */}
            <Link to={"/adopted-videos?lang=" + i18n.language} target="_blank">
              <img
                src={adoptedImage2}
                alt="Already Adopted Dog 2"
                style={{ width: "90%", borderRadius: "15px" }}
              />
              <div className="hover-overlay">
                <p>{t("home.videos")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Grey background section with 3 columns */}
      <div className="container-fluid bg-light mt-5">
        <div className="row justify-content-center">
          {/* Column 1 */}
          <div className="col-md-3 mb-5 mt-5">
            <div className="text-center mb-3">
              {/* Dog icon in a circle */}
              <div onContextMenu={(e) => e.preventDefault()}>
                <img
                  src={dogCircleImage1}
                  alt="Dog Circle 1"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Text */}
            <p className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success1a")}
            </p>
            <p style={{ fontStyle: "italic" }}>{t("home.success1b")}</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 mb-4 mt-5">
            <div className="text-center mb-3">
              {/* Dog icon in a circle */}
              <div onContextMenu={(e) => e.preventDefault()}>
                <img
                  src={dogCircleImage2}
                  alt="Dog Circle 2"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Text */}
            <p className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success2a")}
            </p>
            <p style={{ fontStyle: "italic" }}>{t("home.success2b")}</p>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 mb-4 mt-5">
            <div className="text-center mb-3">
              {/* Dog icon in a circle */}
              <div onContextMenu={(e) => e.preventDefault()}>
                <img
                  src={dogCircleImage3}
                  alt="Dog Circle 3"
                  style={{ width: "30%", borderRadius: "50%" }}
                />
              </div>
            </div>
            {/* Text */}
            <p className="mb-3" style={{ fontStyle: "italic" }}>
              {t("home.success3a")}
            </p>
            <p style={{ fontStyle: "italic" }}>{t("home.success3b")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

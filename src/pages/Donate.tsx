import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import donateImage1 from "../images/donate/donate.jpg";
import donateImage2 from "../images/donate/donations.jpg";
import sponsorImage from "../images/sponsors/become-a-sponsor.jpg";

const Donate = () => {
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
    navigate(`/donate?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          {/* Header */}
          <h1>
            <strong>{t("donate.donate")}</strong>
          </h1>
          {/* Intro */}
          <p className="intro">{t("donate.intro")}</p>
        </div>
      </div>

      {/* Grey background section */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            {/* Image on the left  */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={donateImage1}
                alt="Donate"
                className="img-fluid rounded"
                style={{ maxWidth: "100%" }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6">
              <p>{t("donate.p1")}</p>
              <ol>
                <li>
                  <p>{t("donate.p2")}</p>
                  <p>{t("donate.p3")}</p>
                  <p>{t("donate.p4")}</p>
                  <p>{t("donate.p5")}</p>
                  <p>{t("donate.p6")}</p>
                  <p>{t("donate.p7")}</p>
                  <p>{t("donate.p8")}</p>
                </li>
                <li>
                  <p>{t("donate.p9")}</p>
                </li>
                <li>
                  {/* GoFundMe */}
                  <Link to="https://bit.ly/38Trm8x" target="_blank">
                    <p>{t("donate.p10")}</p>
                  </Link>
                </li>
                <li>
                  {/* Items you may donate */}
                  <p>
                    {t("donate.p11")}
                    <ScrollLink
                      to="donateItems"
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      <span
                        style={{
                          color: "#007bff",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        // Hover effect
                        onMouseEnter={(
                          e: React.MouseEvent<HTMLParagraphElement>
                        ) => {
                          e.currentTarget.style.color = "#0056b3";
                        }}
                        onMouseLeave={(
                          e: React.MouseEvent<HTMLParagraphElement>
                        ) => {
                          e.currentTarget.style.color = "#007bff";
                        }}
                      >
                        {t("donate.link")}
                      </span>
                    </ScrollLink>
                  </p>
                </li>
                <li>
                  <p>{t("donate.p12")}</p>
                </li>
              </ol>
              <p>{t("donate.p13")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* White background section - Items You May DOnate */}
      <div className="container-fluid mt-5 py-5">
        <div className="container">
          <div id="donateItems" className="row justify-content-center">
            <div className="col-md-6">
              <h3>
                <strong>{t("donate-items.donateItems")}</strong>
              </h3>
              <br />
              <p>{t("donate-items.intro")}</p>
              <br />
              {/* Food items you may donate to us */}
              <p>
                <strong>{t("donate-items.p1")}</strong>
              </p>
              <ul>
                <li>
                  <p>{t("donate-items.p2")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p3")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p4")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p5")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p6")}</p>
                </li>
                <br />
              </ul>
              {/* Dog accessories and toys */}
              <p>
                <strong>{t("donate-items.p7")}</strong>
              </p>
              <ul>
                <li>
                  <p>{t("donate-items.p8")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p9")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p10")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p11")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p12")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p13")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p14")}</p>
                </li>
                <li>
                  <p>{t("donate-items.p15")}</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={donateImage2}
                alt="Donate"
                className="img-fluid rounded"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dark background section */}
      <div className="container-fluid bg-dark mt-5 py-5">
        <div className="row justify-content-center">
          {/* Image on the left  */}
          <div
            className="col-md-5 mb-5 mt-5"
            onContextMenu={(e) => e.preventDefault()}
          >
            <img
              src={sponsorImage}
              alt="Become a Sponsor"
              className="img-fluid rounded"
              style={{ width: "100%" }}
            />
          </div>
          {/* Text on the right */}
          <div className="col-md-4 mb-4 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ color: "white" }}>
              <strong>{t("donate.becomeSponsor")}</strong>
            </h2>
            <p className="mb-4" style={{ color: "white" }}>
              {t("donate.sponsor")}
            </p>
            {/* More Information button */}
            <Link to={`/sponsors`} onClick={handleButtonClick("/sponsors")}>
              <button className="button-style">
                {t("donate.moreInfoButton")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;

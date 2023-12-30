import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Donate = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("donate.donate")}</h1>
          <p className="intro">{t("donate.intro")}</p>
        </div>
      </div>

      {/* Grey background section */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            {/* Image on the left  */}
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500"
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
                  <Link to="https://bit.ly/38Trm8x" target="_blank">
                    <p>{t("donate.p10")}</p>
                  </Link>
                </li>
                <li>
                  <p>
                    {t("donate.p11")}
                    <ScrollLink
                      to="donateItems"
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      <p
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
                      </p>
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

      {/* White background section */}
      <div className="container-fluid mt-5 py-5">
        <div className="container">
          <div id="donateItems" className="row justify-content-center">
            <div className="col-md-6">
              <h3>{t("donate-items.donateItems")}</h3>
              <br />
              <p>{t("donate-items.intro")}</p>
              <br />
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
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500"
                alt="Donate"
                className="img-fluid rounded"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Black background section */}
      <div className="container-fluid bg-dark mt-5 py-5">
        <div className="row justify-content-center">
          {/* Image on the left  */}
          <div className="col-md-5 mb-5 mt-5">
            <img
              src="https://via.placeholder.com/500"
              alt="Become a Sponsor"
              className="img-fluid rounded"
              style={{ width: "80%" }}
            />
          </div>
          {/* Text on the right */}
          <div className="col-md-4 mb-4 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ color: "white" }}>
              {t("donate.becomeSponsor")}
            </h2>
            <p className="mb-4" style={{ color: "white" }}>
              {t("donate.sponsor")}
            </p>
            <Link to="/sponsors" target="_blank">
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

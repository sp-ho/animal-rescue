import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1 className="mb-4">{t("aboutUs.aboutUs")}</h1>
          <div className="row">
            <div className="col-md-12">
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("aboutUs.p1")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="row">
          {/* Image on the left with reduced margin */}
          <div className="col-md-6">
            <img
              src="src\images\german-shepherds-foundation.jpg" // Replace with actual image URL
              alt="About Us Image"
              className="about-us img-fluid rounded"
            />
          </div>

          {/* Text on the right */}
          <div className="col-md-5">
            <p>{t("aboutUs.p2")}</p>
            <p>{t("aboutUs.p3")}</p>
            <p>{t("aboutUs.p4")}</p>
            <p>{t("aboutUs.p5")}</p>
            <p>{t("aboutUs.p6")}</p>
            <p>{t("aboutUs.p7")}</p>
            <p>{t("aboutUs.p8")}</p>
            <p>
              {t("aboutUs.p9")} <br /> {t("aboutUs.p10")}
            </p>
            <p>{t("aboutUs.p11")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

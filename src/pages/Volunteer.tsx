import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Volunteer = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("volunteer.volunteer")}</h1>
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("volunteer.intro")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row">
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

            {/* Text on the right */}
            <div className="col-md-6 mt-5">
              <p>{t("volunteer.p1")}</p>
              <p>{t("volunteer.p2")}</p>
              <ul>
                <li>
                  <p>{t("volunteer.p3")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p4")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p5")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p6")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p7")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p8")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p9")}</p>
                </li>
                <li>
                  <p>
                    {t("volunteer.p10")}{" "}
                    <Link to="/fostering">{t("volunteer.link")}</Link>
                  </p>
                </li>
                <li>
                  <p>{t("volunteer.p11")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p11")}</p>
                </li>
              </ul>
              <p>{t("volunteer.p13")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;

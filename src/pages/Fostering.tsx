import { useTranslation } from "react-i18next";
import fosterImage from "../images/fostering/volunteer.jpg";

const Fostering = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("fostering.aboutFostering")}</h1>
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("fostering.p1")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row">
            {/* Image on the left with reduced margin */}
            <div className="col-md-6">
              <img
                src={fosterImage}
                alt="About Fostering"
                className="img-fluid rounded"
                style={{ maxWidth: "90%", height: "auto", marginBottom: 10 }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6">
              <p>{t("fostering.p2")}</p>
              <p>{t("fostering.p3")}</p>
              <p>{t("fostering.p4")}</p>
              <p>{t("fostering.p5")}</p>
              <p>{t("fostering.p6")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fostering;

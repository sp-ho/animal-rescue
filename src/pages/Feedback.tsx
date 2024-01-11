import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>
            <strong>{t("feedback.feedback")}</strong>
          </h1>
          <div>
            <p className="intro">{t("feedback.intro")}</p>
          </div>
        </div>
      </div>

      {/* Section with 2 x 2 grid and grey background */}
      <div className="container-fluid bg-light mt-5 mb-5 py-5">
        {/* Row 1 */}
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-4 mb-4 mx-3 mt-5">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src="https://via.placeholder.com/150"
                alt="feedback1"
                style={{ width: "40%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p1")}</p>
              <p>{t("feedback.p2")}</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4 mb-4 mx-3 mt-5">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src="https://via.placeholder.com/150"
                alt="feedback2"
                style={{ width: "40%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p3")}</p>
              <p>{t("feedback.p4")}</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-4 mb-4 mt-4 mx-3">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src="https://via.placeholder.com/150"
                alt="feedback3"
                style={{ width: "40%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p5")}</p>
              <p>{t("feedback.p6")}</p>
              <p>{t("feedback.p7")}</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4 mb-4 mt-4 mx-3">
            <div className="text-center">
              {/* Image */}
              <img
                className="mb-3"
                src="https://via.placeholder.com/150"
                alt="feedback4"
                style={{ width: "40%", borderRadius: "50%" }}
              />
            </div>
            <div className="text-left" style={{ fontStyle: "italic" }}>
              <p>{t("feedback.p8")}</p>
              <p>{t("feedback.p9")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and white background */}
      <div className="container-fluid mt-5 mb-5">
        <h2 className="mb-5" style={{ marginLeft: "calc(-40vw + 50%)" }}>
          <strong>{t("home.success")}</strong>
        </h2>
        <div className="row justify-content-center">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src="https://via.placeholder.com/150"
              alt="Already Adopted Dog 1"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mb-4 d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src="https://via.placeholder.com/150"
              alt="Already Adopted Dog 2"
              style={{ width: "90%", borderRadius: "15px" }}
            />
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-center py-5"
        style={{ color: "white" }}
      >
        <h3
          className="mt-5 mb-5"
          style={{ fontWeight: "bold", marginTop: "3rem" }}
        >
          {t("feedback.thinkAdopt")}
        </h3>
        <p className="mt-5 mb-5">{t("feedback.adoptionProcess")}</p>
        <Link to="/adoption" target="_blank">
          <button className="button-style mb-5">
            {t("feedback.learnMoreButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Feedback;

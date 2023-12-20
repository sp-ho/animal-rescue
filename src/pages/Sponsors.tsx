import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import panzipetImage from "../images/sponsors/panzipet.png";

const Sponsors = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("sponsor.sponsor")}</h1>
        </div>
      </div>

      {/* Section with 3 columns and grey background */}
      <div className="container-fluid bg-light mt-5 mb-5 py-5">
        <div className="row justify-content-center py-5">
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-3 mb-4 text-center">
            <div className="mb-2">
              <Link to="https://panzipet.hu/">{t("sponsor.link1")}</Link>
            </div>
            {/* Image */}
            <div>
              <Link to="https://panzipet.hu/">
                <img
                  className="mx-auto mt-3"
                  src={panzipetImage}
                  alt="Panzi Pet"
                  style={{
                    width: "40%",
                    borderRadius: "50%",
                  }}
                />
              </Link>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 mb-4 text-center">
            <div className="mb-2">
              <Link to="">{t("sponsor.link2")}</Link>
            </div>
            {/* Image */}
            <div>
              <Link to="">
                <img
                  className="mx-auto mt-3"
                  src="https://via.placeholder.com/150"
                  alt="Net Vet Kit Veterinary Office"
                  style={{ width: "40%", borderRadius: "50%" }}
                />
              </Link>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 mb-4 text-center">
            <div className="mb-2">
              <Link to="https://www.consultationsos.com/">
                {t("sponsor.link3")}
              </Link>
            </div>
            {/* Image */}
            <div>
              <Link to="https://www.consultationsos.com/">
                <img
                  className="mx-auto mt-3"
                  src="https://via.placeholder.com/150"
                  alt="Consultation SOS"
                  style={{ width: "40%", borderRadius: "50%" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section with 5 columns and white background */}
      <div className="container-fluid mt-5 mb-5 py-5">
        <div className="row justify-content-center">
          <div className="container text-center">
            <h3>{t("sponsor.foster")}</h3>
          </div>
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <img
              className="mb-3"
              src="https://via.placeholder.com/150"
              alt="foster1"
              style={{ width: "60%", borderRadius: "50%" }}
            />
            <p>Foster 1</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <img
              className="mb-3"
              src="https://via.placeholder.com/150"
              alt="foster2"
              style={{ width: "60%", borderRadius: "50%" }}
            />
            <p>Foster 2</p>
          </div>
          {/* Column 3 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <img
              className="mb-3"
              src="https://via.placeholder.com/150"
              alt="foster3"
              style={{ width: "60%", borderRadius: "50%" }}
            />
            <p>Foster 3</p>
          </div>
          {/* Column 4 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <img
              className="mb-3"
              src="https://via.placeholder.com/150"
              alt="foster4"
              style={{ width: "60%", borderRadius: "50%" }}
            />
            <p>Foster 4</p>
          </div>
          {/* Column 5 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <img
              className="mb-3"
              src="https://via.placeholder.com/150"
              alt="foster5"
              style={{ width: "60%", borderRadius: "50%" }}
            />
            <p>Foster 5</p>
          </div>
        </div>
      </div>

      {/* Section with 2 columns and grey background */}
      <div className="container-fluid bg-light py-5">
        <div className="row justify-content-center py-5">
          <div className="container text-center">
            <h3>{t("sponsor.volunteer")}</h3>
          </div>
          {/* Column 1 - Placeholder for image */}
          <div className="col-md-5 mt-5 py-5 text-center">
            {/* Image */}
            <img
              className="mb-3"
              src="https://via.placeholder.com/150"
              alt="volunteer1"
              style={{ width: "25%", borderRadius: "50%" }}
            />
            <p>Volunteer 1</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-5 mt-5 py-5 text-center">
            {/* Image */}
            <img
              className="mb-3"
              src="https://via.placeholder.com/150"
              alt="volunteer2"
              style={{ width: "25%", borderRadius: "50%" }}
            />
            <p>Volunteer 2</p>
          </div>
        </div>
      </div>

      {/* Section with 2 columns with black background */}
      <div className="container-fluid bg-dark py-5">
        <div className="container mt-5">
          <div className="row">
            {/* Image on the left with reduced margin */}
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500"
                alt="Become a sponsor"
                className="img-fluid rounded"
                style={{ maxWidth: "100%", height: "auto", marginBottom: 10 }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6" style={{ color: "white" }}>
              <h3>{t("sponsor.p1")}</h3>
              <p>{t("sponsor.p2")}</p>
              <p>{t("sponsor.p3")}</p>
              <p>{t("sponsor.p4")}</p>
              <p>{t("sponsor.p5")}</p>
              <p>{t("sponsor.p6")}</p>
              <Link to="/contact">
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
                  {t("sponsor.contactButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;

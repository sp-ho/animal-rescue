import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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

      {/* Grey background section  */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
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
              <p>{t("donate.p10")}</p>
            </li>
            <li>
              <p>
                {t("donate.p11")}
                <Link to="/donate-items">{t("donate.link")}</Link>
              </p>
            </li>
            <li>
              <p>{t("donate.p12")}</p>
            </li>
          </ol>
          <p>{t("donate.p13")}</p>
        </div>
      </div>
    </>
  );
};

export default Donate;

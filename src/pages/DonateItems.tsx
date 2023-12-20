import { useTranslation } from "react-i18next";

const DonateItems = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("donate-items.donateItems")}</h1>
          <p className="intro">{t("donate-items.intro")}</p>
        </div>
      </div>

      {/* Grey background section  */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <p>{t("donate-items.p1")}</p>
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
          <p>{t("donate-items.p7")}</p>
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
      </div>
    </>
  );
};

export default DonateItems;

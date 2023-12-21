import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kelly1 from "../images/adoptable/kelly1-web-res.jpg";
import kelly2 from "../images/adoptable/kelly2-web-res.jpg";
import cezar1 from "../images/adoptable/cezar1.jpg";
import cezar2 from "../images/adoptable/cezar2.jpg";
import cezar3 from "../images/adoptable/cezar3.jpg";
import cezar4 from "../images/adoptable/cezar4.jpg";
import cezar5 from "../images/adoptable/cezar5.jpg";

const Adoptable = () => {
  const { t } = useTranslation();

  // Images for the carousel
  const kellyImages = [kelly1, kelly2];
  const cesarImages = [cezar1, cezar2, cezar3, cezar4, cezar5];

  // Settings of image carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("adoptable.adoptable")}</h1>
        </div>
      </div>

      {/* Grey background section with image carousel and text */}
      <div className="container-fluid bg-light mt-5 mb-5 py-5">
        <div className="container mt-5">
          <div className="row">
            {/* Column 1: Image carousel */}
            <div className="col-md-4">
              <div style={{ textAlign: "center" }}>
                <Slider {...settings}>
                  {kellyImages.map((imageUrl, index) => (
                    <div key={`kelly${index + 1}`}>
                      <img
                        src={imageUrl}
                        alt={`Kelly ${index + 1}`}
                        className="img-fluid rounded"
                        style={{
                          maxWidth: "100%",
                          height: "600px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Text on the right */}
            <div className="col-md-7 mt-5 py-5">
              <h3>{t("adoptable.kelly.p1")}</h3>
              <br />
              <p>{t("adoptable.kelly.p2")}</p>
              <p>{t("adoptable.kelly.p3")}</p>
              <p>{t("adoptable.kelly.p4")}</p>
              <p>{t("adoptable.kelly.p5")}</p>
              <p>{t("adoptable.kelly.p6")}</p>
              <p>{t("adoptable.kelly.p7")}</p>
              <p>{t("adoptable.kelly.p8")}</p>
              <p>{t("adoptable.kelly.p9")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* White background section with image carousel and text */}
      <div className="container-fluid mt-5 mb-5 py-5">
        <div className="container">
          <div className="row">
            {/* Column 1: Image carousel */}
            <div className="col-md-5">
              <div style={{ textAlign: "center" }}>
                <Slider {...settings}>
                  {cesarImages.map((imageUrl, index) => (
                    <div key={`cezar${index + 1}`}>
                      <img
                        src={imageUrl}
                        alt={`Cézár ${index + 1}`}
                        className="img-fluid rounded"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Text on the right */}
            <div className="col-md-7 py-4">
              <h3>{t("adoptable.cezar.p1")}</h3>
              <br />
              <p>{t("adoptable.cezar.p2")}</p>
              <p>{t("adoptable.cezar.p3")}</p>
              <p>{t("adoptable.cezar.p4")}</p>
              <p>{t("adoptable.cezar.p5")}</p>
              <p>{t("adoptable.cezar.p6")}</p>
              <p>{t("adoptable.cezar.p7")}</p>
              <p>{t("adoptable.cezar.p8")}</p>
              <p>{t("adoptable.cezar.p9")}</p>
              <p>{t("adoptable.cezar.p10")}</p>
              <p>{t("adoptable.cezar.p11")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adoptable;

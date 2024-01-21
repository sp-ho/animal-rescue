import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lena1 from "../images/adoptable/lena-1.jpg";
import lena2 from "../images/adoptable/lena-2.jpg";
import lena3 from "../images/adoptable/lena-3.jpg";
import lena4 from "../images/adoptable/lena-4.jpg";
import kelly1 from "../images/adoptable/kelly1-web-res.jpg";
import kelly2 from "../images/adoptable/kelly2-web-res.jpg";
import cezar1 from "../images/adoptable/cezar1.jpg";
import cezar2 from "../images/adoptable/cezar2.jpg";
import cezar3 from "../images/adoptable/cezar3.jpg";
import cezar4 from "../images/adoptable/cezar4.jpg";
import cezar5 from "../images/adoptable/cezar5.jpg";

const Adoptable = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Slider reference for each adoptable dog
  const lenaSliderRef = useRef<Slider | null>(null);
  const kellySliderRef = useRef<Slider | null>(null);
  const cezarSliderRef = useRef<Slider | null>(null);

  // Images for the carousel
  const lenaImages = [lena1, lena2, lena3, lena4];
  const kellyImages = [kelly1, kelly2];
  const cesarImages = [cezar1, cezar2, cezar3, cezar4, cezar5];

  // Settings of image carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Handlers on Prev and Next buttons for each adoptable dog
  const handleKellyNext = () => {
    kellySliderRef.current?.slickNext();
  };

  const handleKellyPrev = () => {
    kellySliderRef.current?.slickPrev();
  };

  const handleCezarNext = () => {
    cezarSliderRef.current?.slickNext();
  };

  const handleCezarPrev = () => {
    cezarSliderRef.current?.slickPrev();
  };

  const handleLenaNext = () => {
    lenaSliderRef.current?.slickNext();
  };

  const handleLenaPrev = () => {
    lenaSliderRef.current?.slickPrev();
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
    navigate(`/adoptable?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          {/* Header */}
          <h1>
            <strong>{t("adoptable.adoptable")}</strong>
          </h1>
        </div>
      </div>

      {/* Adoptable dog 1 */}
      {/* Grey background section with image carousel and text */}
      <div className="container-fluid bg-light mt-5 mb-5 py-5">
        <div className="container mt-5 mb-5">
          <div className="row">
            {/* Image carousel on the left */}
            <div className="col-md-4">
              <div
                style={{ textAlign: "center" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Slider ref={lenaSliderRef} {...settings}>
                  {lenaImages.map((imageUrl, index) => (
                    <div key={`lena${index + 1}`}>
                      <img
                        src={imageUrl}
                        alt={`Lena ${index + 1}`}
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
                <div style={{ marginTop: "10px" }}>
                  <button
                    onClick={handleLenaPrev}
                    className="button-style me-2"
                  >
                    &lt; {t("adoptable.prev")}
                  </button>
                  <button onClick={handleLenaNext} className="button-style">
                    {t("adoptable.next")} &gt;
                  </button>
                </div>
              </div>
            </div>

            {/* Text on the right */}
            <div className="col-md-7 mt-5 py-5">
              <h3>{t("adoptable.lena.p1")}</h3>
              <br />
              <p>{t("adoptable.lena.p2")}</p>
              <p>{t("adoptable.lena.p3")}</p>
              <p>{t("adoptable.lena.p4")}</p>
              <p>{t("adoptable.lena.p5")}</p>
              <p>{t("adoptable.lena.p6")}</p>
              <p>{t("adoptable.lena.p7")}</p>
              <p>{t("adoptable.lena.p8")}</p>
              <p>{t("adoptable.lena.p9")}</p>
              <p>{t("adoptable.lena.p10")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Adoptable dog 2 */}
      {/* White background section with image carousel and text */}
      <div className="container-fluid mt-5 mb-5 py-5">
        <div className="container">
          <div className="row">
            {/* Image carousel on the left */}
            <div className="col-md-4">
              <div
                style={{ textAlign: "center" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Slider ref={kellySliderRef} {...settings}>
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
                <div style={{ marginTop: "10px" }}>
                  <button
                    onClick={handleKellyPrev}
                    className="button-style me-2"
                  >
                    &lt; {t("adoptable.prev")}
                  </button>
                  <button onClick={handleKellyNext} className="button-style">
                    {t("adoptable.next")} &gt;
                  </button>
                </div>
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

      {/* Adoptable dog 3 */}
      {/* Grey background section with image carousel and text */}
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container py-5">
          <div className="row">
            {/* Image carousel on the left */}
            <div className="col-md-5">
              <div
                style={{ textAlign: "center" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Slider ref={cezarSliderRef} {...settings}>
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
                <div style={{ marginTop: "10px" }}>
                  <button
                    onClick={handleCezarPrev}
                    className="button-style me-2"
                  >
                    &lt; {t("adoptable.prev")}
                  </button>
                  <button onClick={handleCezarNext} className="button-style">
                    {t("adoptable.next")} &gt;
                  </button>
                </div>
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

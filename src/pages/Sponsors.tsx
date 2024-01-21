import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import consultsosImage from "../images/sponsors/consultation-sos.png";
import netvetImage from "../images/sponsors/net-vet-logo.png";
import panzipetImage from "../images/sponsors/panzi-pet-logo.png";
import taravetImage from "../images/sponsors/tara-vet.jpg";
import batizImage from "../images/fosters/andor-batiz.jpg";
import csabaSmallImage from "../images/fosters/gal-csaba-thumbnail.jpg";
import csabaImage from "../images/fosters/gal-csaba.jpg";
import erikaSmallImage from "../images/fosters/ivanyi-erika-thumbnail.jpg";
import erikaImage from "../images/fosters/ivanyi-erika.jpg";
import jozsefImage from "../images/fosters/nemeth-jozsef.jpg";
import ildikoImage from "../images/fosters/leopold-ildiko-thumbnail.jpg";
import timeaSmallImage from "../images/volunteers/ivan-timea-volunteer.jpg";
import timeaImage from "../images/volunteers/ivan-timea.jpg";
import eraSmallImage from "../images/volunteers/kozma-era-volunteer.jpg";
import eraImage from "../images/volunteers/kozma-era-modified.jpg";
import sponsorImage from "../images/sponsors/become-a-sponsor.jpg";

const Sponsors = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = (destination: string) => () => {
    // Set the hash part of the URL to an empty string
    window.location.href = `${destination}?lang=${i18n.language}#`;
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
    navigate(`/sponsors?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const sponsorImages = [
    {
      name: "Panzi Pet",
      link: "https://panzipet.hu/",
      src: panzipetImage,
    },
    {
      name: "Net Vet Kft Veterinary Office",
      link: "https://www.netvet.hu/",
      src: netvetImage,
    },
    {
      name: "Tara-Vet Állatorvosi Rendelő",
      link: "https://taracsoport.hu/",
      src: taravetImage,
    },
    {
      name: "Consultation SOS",
      link: "https://www.consultationsos.com/",
      src: consultsosImage,
    },
  ];

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>
            <strong>{t("sponsor.sponsor")}</strong>
          </h1>
        </div>
      </div>

      {/* Sponsors */}
      <div className="container-fluid bg-light mt-5 mb-5 py-5">
        <div className="row justify-content-center py-5">
          {sponsorImages.map((sponsor) => (
            <div key={sponsor.name} className="col-md-3 mb-4 text-center">
              <div className="mb-2">
                {/* Links to sponsors' websites */}
                <Link to={sponsor.link} target="_blank">
                  {sponsor.name}
                </Link>
              </div>
              <div onContextMenu={(e) => e.preventDefault()}>
                {/* Logos of sponsors */}
                <Link to={sponsor.link} target="_blank">
                  <img
                    className="mx-auto mt-3"
                    src={sponsor.src}
                    alt={sponsor.name}
                    style={{
                      width: "40%",
                    }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fosters */}
      <div className="container-fluid mt-5">
        <div
          className="row justify-content-center"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="container text-center">
            <h3>
              <strong>{t("sponsor.foster")}</strong>
            </h3>
          </div>
          {/* Foster 1 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <div
              onClick={() => openLightbox(batizImage)}
              style={{ cursor: "pointer" }}
              onKeyDown={(e) => {
                // Handle keyboard events
                if (e.key === "Enter") {
                  openLightbox(batizImage);
                }
              }}
            >
              <img
                className="mb-3"
                src={batizImage}
                alt="AndorBatiz"
                style={{ width: "60%", borderRadius: "50%" }}
              />
            </div>
            <p>Andor Batiz</p>
          </div>
          {/* Foster 2 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <div
              onClick={() => openLightbox(erikaImage)}
              style={{ cursor: "pointer" }}
              onKeyDown={(e) => {
                // Handle keyboard events
                if (e.key === "Enter") {
                  openLightbox(erikaImage);
                }
              }}
            >
              <img
                className="mb-3"
                src={erikaSmallImage}
                alt="IványiErika"
                style={{
                  width: "60%",
                  height: "30%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <p>Iványi Erika</p>
          </div>

          {/* Foster 3 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <div
              onClick={() => openLightbox(csabaImage)}
              style={{ cursor: "pointer" }}
              onKeyDown={(e) => {
                // Handle keyboard events
                if (e.key === "Enter") {
                  openLightbox(csabaImage);
                }
              }}
            >
              <img
                className="mb-3"
                src={csabaSmallImage}
                alt="GálCsaba"
                style={{ width: "60%", borderRadius: "50%" }}
              />
            </div>
            <p>Gál Csaba</p>
          </div>

          {/* Foster 4 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <div
              onClick={() => openLightbox(jozsefImage)}
              style={{ cursor: "pointer" }}
              onKeyDown={(e) => {
                // Handle keyboard events
                if (e.key === "Enter") {
                  openLightbox(jozsefImage);
                }
              }}
            >
              <img
                className="mb-3"
                src={jozsefImage}
                alt="Németh József"
                style={{ width: "60%", borderRadius: "50%" }}
              />
            </div>
            <p>Németh József</p>
          </div>

          {/* Foster 5 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <div
              onClick={() => openLightbox(ildikoImage)}
              style={{ cursor: "pointer" }}
              onKeyDown={(e) => {
                // Handle keyboard events
                if (e.key === "Enter") {
                  openLightbox(ildikoImage);
                }
              }}
            >
              <img
                className="mb-3"
                src={ildikoImage}
                alt="Leopold Ildikó"
                style={{ width: "60%", borderRadius: "50%" }}
              />
            </div>
            <p>Leopold Ildikó</p>
          </div>
        </div>
      </div>

      {/* Volunteers */}
      <div className="container-fluid bg-light py-5">
        <div
          className="row justify-content-center py-5"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="container text-center">
            <h3>
              <strong>{t("sponsor.volunteer")}</strong>
            </h3>
          </div>
          {/* Volunteer 1 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <div
              onClick={() => openLightbox(timeaImage)}
              style={{ cursor: "pointer" }}
              onKeyDown={(e) => {
                // Handle keyboard events
                if (e.key === "Enter") {
                  openLightbox(timeaImage);
                }
              }}
            >
              <img
                className="mb-3"
                src={timeaSmallImage}
                alt="Ivan Timea"
                style={{ width: "60%", borderRadius: "50%" }}
              />
            </div>
            <p>Ivan Timea</p>
          </div>

          {/* Volunteer 2 */}
          <div className="col-md-2 mb-4 text-center mt-5 py-5">
            {/* Image */}
            <div
              onClick={() => openLightbox(eraImage)}
              style={{ cursor: "pointer" }}
              onKeyDown={(e) => {
                // Handle keyboard events
                if (e.key === "Enter") {
                  openLightbox(eraImage);
                }
              }}
            >
              <img
                className="mb-3"
                src={eraSmallImage}
                alt="Kozma Era"
                style={{ width: "60%", borderRadius: "50%" }}
              />
            </div>
            <p>Kozma Era</p>
          </div>
        </div>
      </div>

      {/* Dark background section with 2 columns */}
      <div className="container-fluid bg-dark py-5">
        <div className="container mt-5">
          <div className="row">
            {/* Image on the left */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={sponsorImage}
                alt="Become a sponsor"
                className="img-fluid rounded"
                style={{ maxWidth: "100%", height: "auto", marginBottom: 10 }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6" style={{ color: "white" }}>
              <h3>
                <strong>{t("sponsor.p1")}</strong>
              </h3>
              <p>{t("sponsor.p2")}</p>
              <p>{t("sponsor.p3")}</p>
              <p>{t("sponsor.p4")}</p>
              <p>{t("sponsor.p5")}</p>
              <p>{t("sponsor.p6")}</p>
              <Link to={`/contact`} onClick={handleButtonClick("/contact")}>
                <button id="beSponsor" className="button-style mb-5">
                  {t("sponsor.contactButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for larger view of images */}
      {lightboxImage && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              closeLightbox();
            }
          }}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeLightbox();
              }
            }}
          >
            {/* Larger image */}
            <img src={lightboxImage} alt="Larger View" />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                color: "black",
                backgroundColor: "#F5B7B1",
                borderRadius: "5px",
              }}
            >
              {t("sponsor.close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sponsors;

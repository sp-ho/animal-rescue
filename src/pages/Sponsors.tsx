import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

const Sponsors = () => {
  const { t } = useTranslation();

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
                <Link to={sponsor.link} target="_blank">
                  {sponsor.name}
                </Link>
              </div>
              {/* Image */}
              <div>
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
        <div className="row justify-content-center">
          <div className="container text-center">
            <h3>
              <strong>{t("sponsor.foster")}</strong>
            </h3>
          </div>
          {/* Column 1 - Placeholder for image */}
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
          {/* Column 2 */}
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
          {/* Column 3 */}
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
          {/* Column 4 */}
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
          {/* Column 5 */}
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
        <div className="row justify-content-center py-5">
          <div className="container text-center">
            <h3>
              <strong>{t("sponsor.volunteer")}</strong>
            </h3>
          </div>
          {/* Column 1 - Volunteer 1 */}
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

          {/* Column 2 - Volunteer 2 */}
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
              <h3>
                <strong>{t("sponsor.p1")}</strong>
              </h3>
              <p>{t("sponsor.p2")}</p>
              <p>{t("sponsor.p3")}</p>
              <p>{t("sponsor.p4")}</p>
              <p>{t("sponsor.p5")}</p>
              <p>{t("sponsor.p6")}</p>
              <Link to="/contact" target="_blank">
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

      {/* Lightbox */}
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
            <button onClick={closeLightbox}>CLOSE</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sponsors;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import beniImage from "../images/breed/adopting-dog.jpg";
import kellyImage from "../images/adoptable/kelly2-web-res.jpg";
import cezarImage from "../images/adoptable/cezar1.jpg";

const AdoptedPhotos = () => {
  const { t } = useTranslation();

  // Array of images
  const images = [
    { id: "Beni", src: beniImage },
    { id: "Kelly", src: kellyImage },
    { id: "Cézár", src: cezarImage },
    { id: "Wilson", src: "https://via.placeholder.com/150" },
    { id: "Matyi", src: "https://via.placeholder.com/150" },
    { id: "Roxy", src: "https://via.placeholder.com/150" },
    { id: "Bátor", src: "https://via.placeholder.com/150" },
    { id: "Maya", src: "https://via.placeholder.com/150" },
    { id: "Szana", src: "https://via.placeholder.com/150" },
    { id: "Jázmin", src: "https://via.placeholder.com/150" },
    { id: "Trixi", src: "https://via.placeholder.com/150" },
    { id: "Athena", src: "https://via.placeholder.com/150" },
    { id: "Dolly", src: "https://via.placeholder.com/150" },
    { id: "Diego", src: "https://via.placeholder.com/150" },
    { id: "Tony", src: "https://via.placeholder.com/150" },
    { id: "Bodza", src: "https://via.placeholder.com/150" },
    { id: "Szocsi", src: "https://via.placeholder.com/150" },
    { id: "Lujza", src: "https://via.placeholder.com/150" },
    { id: "Mango", src: "https://via.placeholder.com/150" },
    { id: "Astor", src: "https://via.placeholder.com/150" },
    { id: "Dante", src: "https://via.placeholder.com/150" },
    { id: "Molly & Herceg", src: "https://via.placeholder.com/150" },
    { id: "Plútó", src: "https://via.placeholder.com/150" },
  ];

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("adopted-photos.adopted")}</h1>
          <div>
            <p className="intro">{t("adopted-photos.intro")}</p>
          </div>
          <Link to="/sendphotos" target="_blank">
            <button
              className="btn btn-secondary mt-4 mb-4"
              style={{
                background: "linear-gradient(45deg, #cc66ff, #3399ff)",
                backgroundSize: "200% 200%",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                transition: "0.5s",
                cursor: "pointer",
              }}
            >
              {t("adopted-photos.sendPhotoButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* Grid for images */}
      <div className="container mt-4 image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-cell">
            <img
              src={image.src}
              alt={image.id}
              className="img-fluid rounded"
              style={{ maxWidth: "100%" }}
            />
            <div className="image-id">{image.id}</div>
          </div>
        ))}
      </div>
      <div className="container py-5">
        <Link to="http://bit.ly/3vyEfxz" target="_blank">
          <button
            className="btn btn-secondary mt-4 mb-4"
            style={{
              background: "linear-gradient(45deg, #cc66ff, #3399ff)",
              backgroundSize: "200% 200%",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              transition: "0.5s",
              cursor: "pointer",
            }}
          >
            {t("adopted-photos.morePhotosButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default AdoptedPhotos;

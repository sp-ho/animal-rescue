import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import beni1 from "../images/breed/adopting-dog.jpg";
import kelly1 from "../images/adoptable/kelly1-web-res.jpg";
import kelly2 from "../images/adoptable/kelly2-web-res.jpg";
import cezar1 from "../images/adoptable/cezar1.jpg";
import cezar2 from "../images/adoptable/cezar2.jpg";
import cezar3 from "../images/adoptable/cezar3.jpg";
import cezar4 from "../images/adoptable/cezar4.jpg";
import cezar5 from "../images/adoptable/cezar5.jpg";

interface Dog {
  id: string;
  photos: { id: string; src: string }[];
}

const AdoptedPhotos = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  // Array of images
  const dogs: Dog[] = [
    {
      id: "Beni",
      photos: [
        { id: "beni1", src: beni1 },
        { id: "beni2", src: beni1 },
        { id: "beni3", src: beni1 },
      ],
    },
    {
      id: "Kelly",
      photos: [
        { id: "kelly1", src: kelly1 },
        { id: "kelly2", src: kelly2 },
      ],
    },
    {
      id: "Cézár",
      photos: [
        { id: "cezar1", src: cezar1 },
        { id: "cezar2", src: cezar2 },
        { id: "cezar3", src: cezar3 },
        { id: "cezar4", src: cezar4 },
        { id: "cezar5", src: cezar5 },
      ],
    },
    {
      id: "Wilson",
      photos: [
        { id: "wilson1", src: kelly1 },
        { id: "wilson2", src: kelly2 },
      ],
    },
    {
      id: "Matyi",
      photos: [
        { id: "matyi1", src: kelly1 },
        { id: "matyi2", src: kelly2 },
      ],
    },
    {
      id: "Roxy",
      photos: [
        { id: "roxy1", src: kelly1 },
        { id: "roxy2", src: kelly2 },
      ],
    },
    {
      id: "Bátor",
      photos: [
        { id: "bator1", src: kelly1 },
        { id: "bator2", src: kelly2 },
      ],
    },
    {
      id: "Maya",
      photos: [
        { id: "maya1", src: kelly1 },
        { id: "maya2", src: kelly2 },
      ],
    },
    {
      id: "Szana",
      photos: [
        { id: "szana1", src: kelly1 },
        { id: "szana2", src: kelly2 },
      ],
    },
    {
      id: "Jázmin",
      photos: [
        { id: "jasmin1", src: kelly1 },
        { id: "jasmin2", src: kelly2 },
      ],
    },
    {
      id: "Trixi",
      photos: [
        { id: "trixi1", src: kelly1 },
        { id: "trixi2", src: kelly2 },
      ],
    },
    {
      id: "Athena",
      photos: [
        { id: "athena1", src: kelly1 },
        { id: "athena2", src: kelly2 },
      ],
    },
    {
      id: "Dolly",
      photos: [
        { id: "dolly1", src: kelly1 },
        { id: "dolly2", src: kelly2 },
      ],
    },
    {
      id: "Diego",
      photos: [
        { id: "diego1", src: kelly1 },
        { id: "diego2", src: kelly2 },
      ],
    },
    {
      id: "Tony",
      photos: [
        { id: "tony1", src: kelly1 },
        { id: "tony2", src: kelly2 },
      ],
    },
    {
      id: "Bodza",
      photos: [
        { id: "bodza1", src: kelly1 },
        { id: "bodza2", src: kelly2 },
      ],
    },
    {
      id: "Szocsi",
      photos: [
        { id: "szocsi1", src: kelly1 },
        { id: "szocsi2", src: kelly2 },
      ],
    },
    {
      id: "Lujza",
      photos: [
        { id: "lujza1", src: kelly1 },
        { id: "lujza2", src: kelly2 },
      ],
    },
    {
      id: "Mango",
      photos: [
        { id: "mango1", src: kelly1 },
        { id: "mango2", src: kelly2 },
      ],
    },
    {
      id: "Astor",
      photos: [
        { id: "astor1", src: kelly1 },
        { id: "astor2", src: kelly2 },
      ],
    },
    {
      id: "Dante",
      photos: [
        { id: "dante1", src: kelly1 },
        { id: "dante2", src: kelly2 },
      ],
    },
    {
      id: "Molly & Herceg",
      photos: [
        { id: "mollyHerceg1", src: kelly1 },
        { id: "mollyHerceg2", src: kelly2 },
      ],
    },
    {
      id: "Plútó",
      photos: [
        { id: "pluto1", src: kelly1 },
        { id: "pluto2", src: kelly2 },
      ],
    },
  ];

  const openModal = (dog: Dog) => {
    setSelectedDog(dog);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedDog(null);
    setModalIsOpen(false);
  };

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>
            <strong>{t("adopted-photos.adopted")}</strong>
          </h1>
          <div>
            <p className="intro">{t("adopted-photos.intro")}</p>
          </div>
          <Link to="/sendphotos" target="_blank">
            <button className="button-style mt-4 mb-4">
              {t("adopted-photos.sendPhotoButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* Grid for images */}
      <div className="container mt-4 image-grid">
        {dogs.map((dog) => (
          <button
            key={dog.id}
            className="image-cell"
            onClick={() => openModal(dog)}
          >
            <img
              src={dog.photos[0].src}
              alt={dog.id}
              className="img-fluid rounded"
              style={{ maxWidth: "100%" }}
            />
            <div className="image-id">{dog.id}</div>
          </button>
        ))}
      </div>

      {/* Modal for additional photos */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Additional Photos Modal"
      >
        {selectedDog && (
          <div className="additional-photos-container">
            <h2>{selectedDog.id}</h2>
            {selectedDog.photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.id}
                className="additional-photo"
              />
            ))}
            <div>
              {/* Close modal button */}
              <button className="button-style mt-3" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      <div className="container py-5">
        <Link to="http://bit.ly/3vyEfxz" target="_blank">
          <button className="button-style mt-4 mb-4">
            {t("adopted-photos.morePhotosButton")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default AdoptedPhotos;

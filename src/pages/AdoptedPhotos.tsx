import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import astor1 from "../images/adopted/astor/astor-1.jpg";
import astor2 from "../images/adopted/astor/astor-2.jpg";
import astor3 from "../images/adopted/astor/astor-3.jpg";
import astor4 from "../images/adopted/astor/astor-4.jpg";
import athena1 from "../images/adopted/athena/athena-1.jpg";
import athena2 from "../images/adopted/athena/athena-2.jpg";
import athena3 from "../images/adopted/athena/athena-3.jpg";
import athena4 from "../images/adopted/athena/athena-4.jpg";
import athena5 from "../images/adopted/athena/athena-5.jpg";
import athena6 from "../images/adopted/athena/athena-6.jpg";
import athena7 from "../images/adopted/athena/athena-7.jpg";
import athena8 from "../images/adopted/athena/athena-8.jpg";
import athena9 from "../images/adopted/athena/athena-9.jpg";
import athena10 from "../images/adopted/athena/athena-10.jpg";
import athena11 from "../images/adopted/athena/athena-11.jpg";
import athena12 from "../images/adopted/athena/athena-12.jpg";
import athena13 from "../images/adopted/athena/athena-13.jpg";
import bator1 from "../images/adopted/bator/bator-1.jpg";
import bator2 from "../images/adopted/bator/bator-2.jpg";
import bator3 from "../images/adopted/bator/bator-3.jpg";
import bator4 from "../images/adopted/bator/bator-4.jpg";
import bator5 from "../images/adopted/bator/bator-5.jpg";
import bator6 from "../images/adopted/bator/bator-6.jpg";
import bator7 from "../images/adopted/bator/bator-7.jpg";
import bator8 from "../images/adopted/bator/bator-8.jpg";
import bator9 from "../images/adopted/bator/bator-9.jpg";
import bator10 from "../images/adopted/bator/bator-10.jpg";
import beni1 from "../images/breed/adopting-dog.jpg";
import beni2 from "../images/adopted/beni/beni2.jpg";
import beni3 from "../images/adopted/beni/beni3.jpg";
import beni4 from "../images/adopted/beni/beni4.jpg";
import beni5 from "../images/adopted/beni/beni5.jpg";
import beni6 from "../images/adopted/beni/beni6.jpg";
import beni7 from "../images/adopted/beni/beni7.jpg";
import beni8 from "../images/adopted/beni/beni8.jpg";
import beni9 from "../images/adopted/beni/beni9.jpg";
import bodza1 from "../images/adopted/bodza/bodza1.jpg";
import cezar1 from "../images/adopted/cezar/cezar1.jpg";
import cezar2 from "../images/adopted/cezar/cezar2.jpg";
import cezar3 from "../images/adopted/cezar/cezar3.jpg";
import cezar4 from "../images/adopted/cezar/cezar4.jpg";
import cezar5 from "../images/adopted/cezar/cezar5.jpg";
import dante1 from "../images/adopted/dante/dante1.jpg";
import dante2 from "../images/adopted/dante/dante2.jpg";
import dante3 from "../images/adopted/dante/dante3.jpg";
import dante4 from "../images/adopted/dante/dante4.jpg";
import dante5 from "../images/adopted/dante/dante5.jpg";
import dante6 from "../images/adopted/dante/dante6.jpg";
import dante7 from "../images/adopted/dante/dante7.jpg";
import diego1 from "../images/adopted/diego/diego1.jpg";
import diego2 from "../images/adopted/diego/diego2.jpg";
import diego3 from "../images/adopted/diego/diego3.jpg";
import diego4 from "../images/adopted/diego/diego4.jpg";
import dolly5 from "../images/adopted/dolly/dolly5.jpg";
import dolly6 from "../images/adopted/dolly/dolly6.jpg";
import dolly7 from "../images/adopted/dolly/dolly7.jpg";
import dolly8 from "../images/adopted/dolly/dolly8.jpg";
import dolly9 from "../images/adopted/dolly/dolly9.jpg";
import dolly10 from "../images/adopted/dolly/dolly10.jpg";
import dolly11 from "../images/adopted/dolly/dolly11.jpg";
import jazmin1 from "../images/adopted/jazmin/jazmin-1.jpg";
import jazmin2 from "../images/adopted/jazmin/jazmin-2.jpg";
import jazmin3 from "../images/adopted/jazmin/jazmin-3.jpg";
import jazmin4 from "../images/adopted/jazmin/jazmin-4.jpg";
import jazmin5 from "../images/adopted/jazmin/jazmin-5.jpg";
import jazmin6 from "../images/adopted/jazmin/jazmin-6.jpg";
import jazmin7 from "../images/adopted/jazmin/jazmin-7.jpg";
import jazmin8 from "../images/adopted/jazmin/jazmin-8.jpg";
import kelly1 from "../images/adopted/kelly/kelly1-web-res.jpg";
import kelly2 from "../images/adopted/kelly/kelly2-web-res.jpg";
import lujza1 from "../images/adopted/lujza/lujza-1.jpg";
import lujza2 from "../images/adopted/lujza/lujza-2.jpg";
import lujza3 from "../images/adopted/lujza/lujza-3.jpg";
import lujza4 from "../images/adopted/lujza/lujza-4.jpg";
import lujza5 from "../images/adopted/lujza/lujza-5.jpg";
import mango1 from "../images/adopted/mango/mango1.jpg";
import mango2 from "../images/adopted/mango/mango2.jpg";
import mango3 from "../images/adopted/mango/mango3.jpg";
import mango4 from "../images/adopted/mango/mango4.jpg";
import mango5 from "../images/adopted/mango/mango5.jpg";
import matyi1 from "../images/adopted/matyi/matyi-1.jpg";
import matyi2 from "../images/adopted/matyi/matyi-2.jpg";
import matyi3 from "../images/adopted/matyi/matyi-3.jpg";
import matyi4 from "../images/adopted/matyi/matyi-4.jpg";
import matyi5 from "../images/adopted/matyi/matyi-5.jpg";
import matyi6 from "../images/adopted/matyi/matyi-6.jpg";
import matyi7 from "../images/adopted/matyi/matyi-7.jpg";
import matyi8 from "../images/adopted/matyi/matyi-8.jpg";
import matyi9 from "../images/adopted/matyi/matyi-9.jpg";
import matyi10 from "../images/adopted/matyi/matyi-10.jpg";
import matyi11 from "../images/adopted/matyi/matyi-11.jpg";
import matyi12 from "../images/adopted/matyi/matyi-12.jpg";
import matyi13 from "../images/adopted/matyi/matyi-13.jpg";
import mexi1 from "../images/adopted/mexi/mexi-1.jpg";
import mexi2 from "../images/adopted/mexi/mexi-2.jpg";
import mexi3 from "../images/adopted/mexi/mexi-3.jpg";
import mexi4 from "../images/adopted/mexi/mexi-4.jpg";
import mia1 from "../images/adopted/mia/mia-1.jpg";
import mia2 from "../images/adopted/mia/mia-2.jpg";
import mia3 from "../images/adopted/mia/mia-3.jpg";
import mia4 from "../images/adopted/mia/mia-4.jpg";
import mollyHerceg1 from "../images/adopted/molly_herceg/molly-es-herceg-1.jpg";
import mollyHerceg3 from "../images/adopted/molly_herceg/molly-es-herceg-3.jpg";
import mollyHerceg4 from "../images/adopted/molly_herceg/molly-es-herceg-4.jpg";
import mollyHerceg5 from "../images/adopted/molly_herceg/molly-es-herceg-5.jpg";
import mollyHerceg6 from "../images/adopted/molly_herceg/molly-es-herceg-6.jpg";
import mollyHerceg7 from "../images/adopted/molly_herceg/molly-es-herceg-7.jpg";
import mollyHerceg8 from "../images/adopted/molly_herceg/molly-es-herceg-8.jpg";
import mollyHerceg9 from "../images/adopted/molly_herceg/molly-es-herceg-9.jpg";
import pluto6 from "../images/adopted/pluto/pluto6.jpg";
import pluto7 from "../images/adopted/pluto/pluto7.jpg";
import pluto8 from "../images/adopted/pluto/pluto8.jpg";
import pluto9 from "../images/adopted/pluto/pluto9.jpg";
import pluto10 from "../images/adopted/pluto/pluto10.jpg";
import pluto11 from "../images/adopted/pluto/pluto11.jpg";
import roxy1 from "../images/adopted/roxy/roxy-1.jpg";
import roxy2 from "../images/adopted/roxy/roxy-2.jpg";
import roxy3 from "../images/adopted/roxy/roxy-3.jpg";
import roxy4 from "../images/adopted/roxy/roxy-4.jpg";
import roxy5 from "../images/adopted/roxy/roxy-5.jpg";
import roxy6 from "../images/adopted/roxy/roxy-6.jpg";
import roxy7 from "../images/adopted/roxy/roxy-7.jpg";
import roxy8 from "../images/adopted/roxy/roxy-8.jpg";
import szana1 from "../images/adopted/szana/szana-1.jpg";
import szana2 from "../images/adopted/szana/szana-2.jpg";
import szana3 from "../images/adopted/szana/szana-3.jpg";
import szana4 from "../images/adopted/szana/szana-4.jpg";
import szana5 from "../images/adopted/szana/szana-5.jpg";
import szana6 from "../images/adopted/szana/szana-6.jpg";
import szana7 from "../images/adopted/szana/szana-7.jpg";
import szana8 from "../images/adopted/szana/szana-8.jpg";
import szocsi1 from "../images/adopted/szocsi/szocsi1.jpg";
import szocsi2 from "../images/adopted/szocsi/szocsi2.jpg";
import szocsi3 from "../images/adopted/szocsi/szocsi3.jpg";
import szocsi4 from "../images/adopted/szocsi/szocsi4.jpg";
import szocsi5 from "../images/adopted/szocsi/szocsi5.jpg";
import szocsi6 from "../images/adopted/szocsi/szocsi6.jpg";
import szocsi7 from "../images/adopted/szocsi/szocsi7.jpg";
import szocsi8 from "../images/adopted/szocsi/szocsi8.jpg";
import szocsi9 from "../images/adopted/szocsi/szocsi9.jpg";
import szocsi10 from "../images/adopted/szocsi/szocsi10.jpg";
import tony1 from "../images/adopted/tony/tony1.jpg";
import tony2 from "../images/adopted/tony/tony2.jpg";
import tony3 from "../images/adopted/tony/tony3.jpg";
import tony4 from "../images/adopted/tony/tony4.jpg";
import tony5 from "../images/adopted/tony/tony5.jpg";
import tony6 from "../images/adopted/tony/tony6.jpg";
import tony7 from "../images/adopted/tony/tony7.jpg";
import tony8 from "../images/adopted/tony/tony8.jpg";
import tony9 from "../images/adopted/tony/tony9.jpg";
import tony10 from "../images/adopted/tony/tony10.jpg";
import tony11 from "../images/adopted/tony/tony11.jpg";
import trixi1 from "../images/adopted/trixi/trixi-1.jpg";
import trixi2 from "../images/adopted/trixi/trixi-2.jpg";
import trixi3 from "../images/adopted/trixi/trixi-3.jpg";
import trixi4 from "../images/adopted/trixi/trixi-4.jpg";
import wilson1 from "../images/adopted/wilson/wilson-1.jpg";
import wilson2 from "../images/adopted/wilson/wilson-2.jpg";
import wilson3 from "../images/adopted/wilson/wilson-3.jpg";
import wilson4 from "../images/adopted/wilson/wilson-4.jpg";
import wilson5 from "../images/adopted/wilson/wilson-5.jpg";
import wilson7 from "../images/adopted/wilson/wilson-7.jpg";
import wilson9 from "../images/adopted/wilson/wilson-9.jpg";
import wilson10 from "../images/adopted/wilson/wilson-10.jpg";
import wilson11 from "../images/adopted/wilson/wilson-11.jpg";
import wilson12 from "../images/adopted/wilson/wilson-12.jpg";

interface Dog {
  id: string;
  photos: { id: string; src: string }[];
}

const AdoptedPhotos = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  const handleButtonClick = (destination: string) => () => {
    // Set the hash part of the URL to an empty string
    window.location.href = `${destination}?lang=${i18n.language}#`;
  };

  // Use i18n to persist language
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") ?? "en"; // default to English

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
    navigate(`/adopted-photos?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  // Array of images
  const dogs: Dog[] = [
    {
      id: "Beni",
      photos: [
        { id: "beni1", src: beni1 },
        { id: "beni2", src: beni2 },
        { id: "beni3", src: beni3 },
        { id: "beni4", src: beni4 },
        { id: "beni5", src: beni5 },
        { id: "beni6", src: beni6 },
        { id: "beni7", src: beni7 },
        { id: "beni8", src: beni8 },
        { id: "beni9", src: beni9 },
      ],
    },
    {
      id: "Wilson",
      photos: [
        { id: "wilson1", src: wilson1 },
        { id: "wilson2", src: wilson2 },
        { id: "wilson3", src: wilson3 },
        { id: "wilson4", src: wilson4 },
        { id: "wilson5", src: wilson5 },
        { id: "wilson7", src: wilson7 },
        { id: "wilson9", src: wilson9 },
        { id: "wilson10", src: wilson10 },
        { id: "wilson11", src: wilson11 },
        { id: "wilson12", src: wilson12 },
      ],
    },
    {
      id: "Matyi",
      photos: [
        { id: "matyi1", src: matyi1 },
        { id: "matyi2", src: matyi2 },
        { id: "matyi3", src: matyi3 },
        { id: "matyi4", src: matyi4 },
        { id: "matyi5", src: matyi5 },
        { id: "matyi6", src: matyi6 },
        { id: "matyi7", src: matyi7 },
        { id: "matyi8", src: matyi8 },
        { id: "matyi9", src: matyi9 },
        { id: "matyi10", src: matyi10 },
        { id: "matyi11", src: matyi11 },
        { id: "matyi12", src: matyi12 },
        { id: "matyi13", src: matyi13 },
      ],
    },
    {
      id: "Roxy",
      photos: [
        { id: "roxy1", src: roxy1 },
        { id: "roxy2", src: roxy2 },
        { id: "roxy3", src: roxy3 },
        { id: "roxy4", src: roxy4 },
        { id: "roxy5", src: roxy5 },
        { id: "roxy6", src: roxy6 },
        { id: "roxy7", src: roxy7 },
        { id: "roxy8", src: roxy8 },
      ],
    },
    {
      id: "Bátor",
      photos: [
        { id: "bator1", src: bator1 },
        { id: "bator2", src: bator2 },
        { id: "bator3", src: bator3 },
        { id: "bator4", src: bator4 },
        { id: "bator5", src: bator5 },
        { id: "bator6", src: bator6 },
        { id: "bator7", src: bator7 },
        { id: "bator8", src: bator8 },
        { id: "bator9", src: bator9 },
        { id: "bator10", src: bator10 },
      ],
    },
    {
      id: "Mia",
      photos: [
        { id: "mia1", src: mia1 },
        { id: "mia2", src: mia2 },
        { id: "mia3", src: mia3 },
        { id: "mia4", src: mia4 },
      ],
    },
    {
      id: "Szana",
      photos: [
        { id: "szana1", src: szana1 },
        { id: "szana2", src: szana2 },
        { id: "szana3", src: szana3 },
        { id: "szana4", src: szana4 },
        { id: "szana5", src: szana5 },
        { id: "szana6", src: szana6 },
        { id: "szana7", src: szana7 },
        { id: "szana8", src: szana8 },
      ],
    },
    {
      id: "Jázmin",
      photos: [
        { id: "jazmin1", src: jazmin1 },
        { id: "jazmin2", src: jazmin2 },
        { id: "jazmin3", src: jazmin3 },
        { id: "jazmin4", src: jazmin4 },
        { id: "jazmin5", src: jazmin5 },
        { id: "jazmin6", src: jazmin6 },
        { id: "jazmin7", src: jazmin7 },
        { id: "jazmin8", src: jazmin8 },
      ],
    },
    {
      id: "Trixi",
      photos: [
        { id: "trixi1", src: trixi1 },
        { id: "trixi2", src: trixi2 },
        { id: "trixi3", src: trixi3 },
        { id: "trixi4", src: trixi4 },
      ],
    },
    {
      id: "Athena",
      photos: [
        { id: "athena5", src: athena5 },
        { id: "athena1", src: athena1 },
        { id: "athena2", src: athena2 },
        { id: "athena3", src: athena3 },
        { id: "athena4", src: athena4 },
        { id: "athena6", src: athena6 },
        { id: "athena7", src: athena7 },
        { id: "athena8", src: athena8 },
        { id: "athena9", src: athena9 },
        { id: "athena10", src: athena10 },
        { id: "athena11", src: athena11 },
        { id: "athena12", src: athena12 },
        { id: "athena13", src: athena13 },
      ],
    },
    {
      id: "Dolly",
      photos: [
        { id: "dolly6", src: dolly6 },
        { id: "dolly5", src: dolly5 },
        { id: "dolly7", src: dolly7 },
        { id: "dolly8", src: dolly8 },
        { id: "dolly9", src: dolly9 },
        { id: "dolly10", src: dolly10 },
        { id: "dolly11", src: dolly11 },
      ],
    },
    {
      id: "Diego",
      photos: [
        { id: "diego1", src: diego1 },
        { id: "diego2", src: diego2 },
        { id: "diego3", src: diego3 },
        { id: "diego4", src: diego4 },
      ],
    },
    {
      id: "Tony",
      photos: [
        { id: "tony1", src: tony1 },
        { id: "tony2", src: tony2 },
        { id: "tony3", src: tony3 },
        { id: "tony4", src: tony4 },
        { id: "tony5", src: tony5 },
        { id: "tony6", src: tony6 },
        { id: "tony7", src: tony7 },
        { id: "tony8", src: tony8 },
        { id: "tony9", src: tony9 },
        { id: "tony10", src: tony10 },
        { id: "tony11", src: tony11 },
      ],
    },
    {
      id: "Bodza",
      photos: [{ id: "bodza1", src: bodza1 }],
    },
    {
      id: "Szöcsi",
      photos: [
        { id: "szocsi1", src: szocsi1 },
        { id: "szocsi2", src: szocsi2 },
        { id: "szocsi3", src: szocsi3 },
        { id: "szocsi4", src: szocsi4 },
        { id: "szocsi5", src: szocsi5 },
        { id: "szocsi6", src: szocsi6 },
        { id: "szocsi7", src: szocsi7 },
        { id: "szocsi8", src: szocsi8 },
        { id: "szocsi9", src: szocsi9 },
        { id: "szocsi10", src: szocsi10 },
      ],
    },
    {
      id: "Lujza",
      photos: [
        { id: "lujza1", src: lujza1 },
        { id: "lujza2", src: lujza2 },
        { id: "lujza3", src: lujza3 },
        { id: "lujza4", src: lujza4 },
        { id: "lujza5", src: lujza5 },
      ],
    },
    {
      id: "Mango",
      photos: [
        { id: "mango1", src: mango1 },
        { id: "mango2", src: mango2 },
        { id: "mango3", src: mango3 },
        { id: "mango4", src: mango4 },
        { id: "mango5", src: mango5 },
      ],
    },
    {
      id: "Astor",
      photos: [
        { id: "astor1", src: astor1 },
        { id: "astor2", src: astor2 },
        { id: "astor3", src: astor3 },
        { id: "astor4", src: astor4 },
      ],
    },
    {
      id: "Dante",
      photos: [
        { id: "dante1", src: dante1 },
        { id: "dante2", src: dante2 },
        { id: "dante3", src: dante3 },
        { id: "dante4", src: dante4 },
        { id: "dante5", src: dante5 },
        { id: "dante6", src: dante6 },
        { id: "dante7", src: dante7 },
      ],
    },
    {
      id: "Molly & Herceg",
      photos: [
        { id: "mollyHerceg1", src: mollyHerceg1 },
        { id: "mollyHerceg3", src: mollyHerceg3 },
        { id: "mollyHerceg4", src: mollyHerceg4 },
        { id: "mollyHerceg5", src: mollyHerceg5 },
        { id: "mollyHerceg6", src: mollyHerceg6 },
        { id: "mollyHerceg7", src: mollyHerceg7 },
        { id: "mollyHerceg8", src: mollyHerceg8 },
        { id: "mollyHerceg9", src: mollyHerceg9 },
      ],
    },
    {
      id: "Plútó",
      photos: [
        { id: "pluto7", src: pluto7 },
        { id: "pluto6", src: pluto6 },
        { id: "pluto8", src: pluto8 },
        { id: "pluto9", src: pluto9 },
        { id: "pluto10", src: pluto10 },
        { id: "pluto11", src: pluto11 },
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
      id: "Mexi",
      photos: [
        { id: "mexi2", src: mexi2 },
        { id: "mexi1", src: mexi1 },
        { id: "mexi3", src: mexi3 },
        { id: "mexi4", src: mexi4 },
      ],
    },
  ];

  // Modal to display more images
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
          {/* Header */}
          <h1>
            <strong>{t("adopted-photos.adopted")}</strong>
          </h1>
          {/* Intro */}
          <div>
            <p className="intro">{t("adopted-photos.intro")}</p>
          </div>
          {/* Send Us Your Photos button */}
          <Link to={`/send-photos`} onClick={handleButtonClick("/send-photos")}>
            <button className="button-style mt-4 mb-4">
              {t("adopted-photos.sendPhotoButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* Grid for images */}
      <div
        className="container mt-4 image-grid"
        onContextMenu={(e) => e.preventDefault()}
      >
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
          <div
            className="additional-photos-container"
            onContextMenu={(e) => e.preventDefault()}
          >
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
                {t("adopted-photos.close")}
              </button>
            </div>
          </div>
        )}
      </Modal>

      <div className="container py-5">
        {/* Flickr button */}
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

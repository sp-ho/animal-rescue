import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const Videos = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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
    navigate(`/videos?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  const breedVideos = [
    {
      title: "All about the German Shepherd",
      src: "https://www.youtube.com/embed/MxaJb-fYR4M",
    },
    {
      title: "Best German Shepherd puppy training tips",
      src: "https://www.youtube.com/embed/W2pkvy5t3Bo",
    },
    {
      title: "All you need to know about German Shepherd",
      src: "https://www.youtube.com/embed/W7eGaraQSqs",
    },
    {
      title: "History of the German Shepherd",
      src: "https://www.youtube.com/embed/ddv0QaPay94",
    },
    {
      title: "German Shepherd everything you need to know",
      src: "https://www.youtube.com/embed/p0INBNLqmPE",
    },
    {
      title: "German Shepherd pros and cons",
      src: "https://www.youtube.com/embed/LQYelPGQnh0",
    },
    {
      title: "10 things only German Shepherd dog owners understand",
      src: "https://www.youtube.com/embed/irBvSllY10w",
    },
    {
      title: "How to understand German Shepherd body language",
      src: "https://www.youtube.com/embed/NzucEq0luY0",
    },
  ];

  const spayNeuterVideos = [
    {
      title: "Neutering & spaying German Shepherds",
      src: "https://www.youtube.com/embed/CewaVQot58U",
    },
    {
      title: "How to care dogs after spay neuter",
      src: "https://www.youtube.com/embed/1B_i3TYByYs",
    },
    {
      title: "Post-Spay/Neuter surgery information",
      src: "https://www.youtube.com/embed/zoNL_jrbNKk",
    },
    {
      title: "Post surgical pet care at home",
      src: "https://www.youtube.com/embed/GWON6u80vNQ",
    },
    {
      title: "Spay/neuter patient care: patient prep - Canine",
      src: "https://www.youtube.com/embed/aESC0VrWIZA",
    },
    {
      title: "Dog spay recovery progress day by day & helpful tips",
      src: "https://www.youtube.com/embed/kz8EMYOoayI",
    },
  ];

  const microchipsVideos = [
    {
      title: "Why you should microchip your dog",
      src: "https://www.youtube.com/embed/J2IJe9mCszA",
    },
    {
      title: "Watch a dog get microchipped",
      src: "https://www.youtube.com/embed/Qo-Ft84bf84",
    },
    {
      title: "Science behind your pet's microchip",
      src: "https://www.youtube.com/embed/TiowQx0ieP8",
    },
    {
      title: "Microchip IDs help return lost pets",
      src: "https://www.youtube.com/embed/mGTGT4NV95Q",
    },
    {
      title: "How to microchip a dog",
      src: "https://www.youtube.com/embed/YwLxphE8Tk8",
    },
    {
      title: "How to microchip a puppy",
      src: "https://www.youtube.com/embed/rt3UcTkN_Jc",
    },
  ];

  const trainTipsVideos = [
    {
      title: "How to train a German Shepherd puppy",
      src: "https://www.youtube.com/embed/zttUukvfl94",
    },
    {
      title: "German Shepherd god training and mastering the art of attention",
      src: "https://www.youtube.com/embed/ygn8B2FLcdM",
    },
    {
      title: "How to raise a German shepherd",
      src: "https://www.youtube.com/embed/t9TxzuXCAyM",
    },
    {
      title: "German Shepherd puppy obedience training",
      src: "https://www.youtube.com/embed/A8zKTUIXYVI",
    },
    {
      title: "German Shepherd dog jump",
      src: "https://www.youtube.com/embed/M0D9zMwax-8",
    },
  ];

  const healthCareVideos = [
    {
      title: "German Shepherd health and life expectation",
      src: "https://www.youtube.com/embed/ROCAt2VCTy0",
    },
    {
      title: "5 most common health problems of German Shepherd",
      src: "https://www.youtube.com/embed/Va8uUTXTV5I",
    },
    {
      title: "The perfect dog diet - What to feed your dog",
      src: "https://www.youtube.com/embed/p8ZCGvKb4x8",
    },
    {
      title: "How much should you feed a German Shepherd",
      src: "https://www.youtube.com/embed/-7rcvPoOML0",
    },
  ];

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>
            <strong>{t("videos.videos")}</strong>
          </h1>
          <div>
            <p className="intro">
              {t("videos.intro")}
              <ScrollLink
                to="breed"
                smooth={true}
                duration={500}
                offset={-50}
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {t("videos.breedLink")}
              </ScrollLink>
              ,{" "}
              <ScrollLink
                to="spayNeuter"
                smooth={true}
                duration={500}
                offset={-50}
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {t("videos.spayNeuterLink")}
              </ScrollLink>
              ,{" "}
              <ScrollLink
                to="microchips"
                smooth={true}
                duration={500}
                offset={-50}
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {t("videos.microchipsLink")}
              </ScrollLink>
              ,{" "}
              <ScrollLink
                to="trainTips"
                smooth={true}
                duration={500}
                offset={-50}
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {t("videos.trainTips")}
              </ScrollLink>
              ,{" "}
              <ScrollLink
                to="healthCare"
                smooth={true}
                duration={500}
                offset={-50}
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {t("videos.healthCareLink")}
              </ScrollLink>
            </p>
          </div>
        </div>
      </div>

      {/* Grid for videos */}
      <div className="container-fluid bg-light mt-5 py-5 video-grid">
        {/* About the Breed */}
        <div className="container">
          <h3 id="breed">
            s<strong>{t("videos.breedSub")}</strong>
          </h3>
          <div className="row d-flex justify-content-center">
            {breedVideos.map((video) => (
              <div
                key={video.title}
                className="col-sm-6 col-md-5 me-5 mx-4 mt-5 mb-4 d-flex justify-content-center"
              >
                <div className="video-cell">
                  <iframe
                    width="600px"
                    height="350px"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Spaying/Neutering */}
        <div className="container py-5">
          <h3 id="spayNeuter">
            <strong>{t("videos.spayNeuterSub")}</strong>
          </h3>
          <div className="row d-flex justify-content-center">
            {spayNeuterVideos.map((video) => (
              <div
                key={video.title}
                className="col-sm-6 col-md-5 me-5 mx-4 mt-5 mb-4 d-flex justify-content-center"
              >
                <div className="video-cell">
                  <iframe
                    width="600px"
                    height="350px"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Microchips */}
        <div className="container">
          <h3 id="microchips">
            <strong>{t("videos.microchipsSub")}</strong>
          </h3>
          <div className="row d-flex justify-content-center">
            {microchipsVideos.map((video) => (
              <div
                key={video.title}
                className="col-sm-6 col-md-5 me-5 mx-4 mt-5 mb-4 d-flex justify-content-center"
              >
                <div className="video-cell">
                  <iframe
                    width="600px"
                    height="350px"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dog Training and Tips */}
        <div className="container py-5">
          <h3 id="trainTips">
            <strong>{t("videos.trainTipsSub")}</strong>
          </h3>
          <div className="row d-flex justify-content-center">
            {trainTipsVideos.map((video) => (
              <div
                key={video.title}
                className="col-sm-6 col-md-5 me-5 mx-4 mt-5 mb-4 d-flex justify-content-center"
              >
                <div className="video-cell">
                  <iframe
                    width="600px"
                    height="350px"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Care */}
        <div className="container">
          <h3 id="healthCare">
            <strong>{t("videos.healthCareSub")}</strong>
          </h3>
          <div className="row d-flex justify-content-center">
            {healthCareVideos.map((video) => (
              <div
                key={video.title}
                className="col-6 col-sm-6 col-md-5 me-5 mx-4 mt-5 mb-4 d-flex justify-content-center"
              >
                <div className="video-cell">
                  <iframe
                    width="600px"
                    height="350px"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;

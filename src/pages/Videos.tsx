import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const Videos = () => {
  const { t } = useTranslation();

  const breedVideos = [
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
  ];

  const spayNeuterVideos = [
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
  ];

  const microchipsVideos = [
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
  ];

  const trainTipsVideos = [
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
  ];

  const healthCareVideos = [
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/VIDEO_ID",
    },
  ];

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          <h1>{t("videos.videos")}</h1>
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
            <strong>{t("videos.breedSub")}</strong>
          </h3>
          <div className="row d-flex justify-content-center">
            {breedVideos.map((video) => (
              <div
                key={video.title}
                className="col-md-6 mt-5 mb-4 d-flex justify-content-center"
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
                className="col-md-6 mt-5 mb-4 d-flex justify-content-center"
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
                className="col-md-6 mt-5 mb-4 d-flex justify-content-center"
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
                className="col-md-6 mt-5 mb-4 d-flex justify-content-center"
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
                className="col-md-6 mt-5 mb-4 d-flex justify-content-center"
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

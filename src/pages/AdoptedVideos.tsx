import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const AdoptedVideos = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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
    navigate(`/adopted-videos?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  // Array of videos
  const videos = [
    {
      title: "German shepherd loves the snow",
      src: "https://www.youtube.com/embed/zTkt98JwnFQ?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0",
    },
    {
      title: "German shepherd loves the leaves",
      src: "https://www.youtube.com/embed/DMRQzLB_ey8?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=2",
    },
    {
      title: "German shepherd enjoying going into the lake",
      src: "https://www.youtube.com/embed/aod5zhp2Clc?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=3",
    },
    {
      title: "German shepherd playing fetch with the tennis ball",
      src: "https://www.youtube.com/embed/zvItSy6yFFE?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=4",
    },
    {
      title: "German shepherd taking a walk",
      src: "https://www.youtube.com/embed/FYwi_Frd5bs?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=5",
    },
    {
      title: "Sweet German Shepherd found her home",
      src: "https://www.youtube.com/embed/n1jTgpFeWZo?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=6",
    },
    {
      title: "Our sweet adopted German Shepherd dog is playing",
      src: "https://www.youtube.com/embed/Y0GUS68-Uvc?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=7",
    },
    {
      title: "Our adopted German Shepherd dog, Athena, is sleeping",
      src: "https://www.youtube.com/embed/bwTh7y6emOU?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=8",
    },
    {
      title: "Our German Shepherd dog, Philip",
      src: "https://www.youtube.com/embed/ZgMzXJE3UW4?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=9",
    },
    {
      title: "Rex our adopted German shepherd dog",
      src: "https://www.youtube.com/embed/m44KwH-Ftow?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=10",
    },
    {
      title: "Luca our German shepherd found her forever home",
      src: "https://www.youtube.com/embed/mqaZB-U1Lpk?list=PLuguWlndATsD8W76bguEE-uMzxuURusg0&index=12",
    },
  ];

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container mt-5">
          {/* Header */}
          <h1>
            <strong>{t("adopted-videos.adopted")}</strong>
          </h1>
          <div>
            {/* Intro and Youtube link */}
            <p className="intro">
              {t("adopted-videos.intro1")}
              <Link to="http://bit.ly/3trNey7" target="_blank">
                {t("adopted-videos.youtube")}
              </Link>
              {t("adopted-videos.intro2")}
            </p>
          </div>
        </div>
      </div>

      {/* Grid for videos */}
      <div className="container-fluid bg-light mt-5 py-5 video-grid">
        <div className="container" style={{ marginLeft: "-40px" }}>
          <div className="row d-flex justify-content-center mb-5">
            {videos.map((video) => (
              <div
                key={video.title}
                className="col-6 col-sm-6 col-md-5 me-5 mx-4 mt-5 mb-4 d-flex justify-content-center"
              >
                <div className="video-cell">
                  <iframe
                    width="150%"
                    height="140%"
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

export default AdoptedVideos;

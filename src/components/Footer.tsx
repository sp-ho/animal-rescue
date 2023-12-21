import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faFlickr,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          {/* Left column for copyright text */}
          <div className="col-md-6">
            <p>&copy; 2023 Mi Hárman a Németjuhászokért Alapítvány</p>
          </div>

          {/* Right column for Facebook icon */}
          <div className="col-md-6 text-end">
            {/* Facebook Icon */}
            <a href="https://bit.ly/3ua4R7s" className="me-3" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            {/* Instagram Icon */}
            <a href="https://bit.ly/3m89uKF" className="me-3" target="_blank">
              <FontAwesomeIcon icon={faInstagram} color="#d62976" />
            </a>
            {/* Youtube Icon */}
            <a
              href="http://bit.ly/3trNey7"
              className="text-white me-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} color="red" />
            </a>
            {/* Flickr Icon */}
            <a
              href="http://bit.ly/3vyEfxz"
              className="text-white me-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFlickr} color="blue" />
            </a>
            {/* Donate Link */}
            <Link
              to="/donate"
              className="text-white me-3"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Donate
              <FontAwesomeIcon icon={faHeart} className="ms-1" color="red" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

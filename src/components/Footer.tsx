import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
            <a href="#" className="text-white me-3">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            {/* TikTok Icon */}
            <a href="#" className="text-white me-3">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            {/* Instagram Icon */}
            <a href="#" className="text-white me-3">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Donate Link */}
            <a
              href="#"
              className="text-white me-3"
              style={{ textDecoration: "none" }}
            >
              Donate
              <FontAwesomeIcon icon={faHeart} className="ms-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

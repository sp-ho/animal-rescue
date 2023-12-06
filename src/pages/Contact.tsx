import { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import validateFormData from "../components/FormValidator";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    telephone: "",
    comments: "",
    image: null as File | null,
    agreeTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataInstance = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataInstance.append(key, value as string | Blob);
    });
    const errors = validateFormData(formDataInstance);

    if (Object.keys(errors).length === 0) {
      // No validation errors, proceed with form submission logic
      console.log("Form submitted:", formData);
    } else {
      // Validation errors, handle them (e.g., display errors to the user)
      console.error("Validation errors:", errors);
    }
  };

  return (
    <>
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-div">
          <div className="columns">
            {/* Left Section */}
            <div className="left-section">
              <div className="contact-section">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </div>
              <p className="contact-p">Email</p>
              <p>example@example.com</p>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <div className="contact-section">
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </div>
              <div>
                <p className="contact-p">Follow us on Social Media</p>
                <div className="social-icons">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faYoutube} />
                  <FontAwesomeIcon icon={faTiktok} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <form onSubmit={handleSubmit} className="compact-form">
            <h2>Send Us a Message</h2>
            <br />
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="telephone">Telephone:</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="comments">Comments/Questions:</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image">Upload an Image (optional):</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>

            <div>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
import axios from "axios";

const Contact = () => {
  // useState for data
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

  // useState for reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  // useState for submission status
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // log for debug
    // console.log(`Updating ${name} with value: ${value}`);

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (file) {
      // Check if the file format is allowed
      const allowedImageFormats = ["image/jpeg", "image/png", "image/jpg"];

      if (allowedImageFormats.includes(file.type)) {
        setFormData({ ...formData, image: file });
      }
    } else {
      // Set image to null when no file is provided
      setFormData({ ...formData, image: null });
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaValue) {
      // Handle case where reCAPTCHA is not completed
      console.error("reCAPTCHA not completed");
      return;
    }

    const formDataInstance = new FormData();

    // log for debug
    // console.log("Current formData:", formData);

    Object.entries(formData).forEach(([key, value]) => {
      formDataInstance.append(key, value as string | Blob);
    });

    // log for debug
    // console.log("Form Data Instance:", formDataInstance);

    const errors = validateFormData(formDataInstance);

    if (Object.keys(errors).length === 0) {
      // No validation errors, proceed with form submission logic

      // Include reCAPTCHA value in the form data
      formDataInstance.append("recaptcha", recaptchaValue);

      // Perform the actual form submission, e.g., using fetch or axios
      try {
        const response = await axios.post(
          "http://localhost:5000/api/submit",
          formDataInstance
        );

        if (response.status === 200) {
          console.log("Form submitted successfully");

          // Reset reCAPTCHA
          setRecaptchaValue(null);

          // If the submission is successful, update the submission status
          setSubmissionStatus("success");

          // Clear the form fields
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            telephone: "",
            comments: "",
            image: null,
            agreeTerms: false,
          });
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      // Validation errors, handle them (e.g., display errors to the user)
      console.error("Validation errors:", errors);

      // Display validation errors to the user
      // You can update the UI directly without using state
      Object.entries(errors).forEach(([key, value]) => {
        const inputElement = document.getElementById(key) as HTMLInputElement;
        if (inputElement) {
          inputElement.classList.add("is-invalid");

          const errorElement = document.createElement("div");
          errorElement.classList.add("invalid-feedback");
          errorElement.innerText = value;

          const parentElement = inputElement.parentElement;
          if (parentElement) {
            parentElement.appendChild(errorElement);
          }
        }
      });
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
              <p>animalrescue@email.com</p>
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
              {/* we are using the global site key for testing */}
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
              {submissionStatus === "success" && (
                <div className="success-message">
                  Form submitted successfully!
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

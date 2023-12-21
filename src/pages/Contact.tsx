import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFlickr,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import validateFormData from "../components/FormValidator";
import axios from "axios";

const Contact = () => {
  const { t } = useTranslation();

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
    imagePreview: null as string | null, // Store the image preview URL
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
        setFormData({
          ...formData,
          image: file,
        });
      }
    } else {
      setFormData({
        ...formData,
        image: null,
      });
    }
  };

  const handleDeleteImage = () => {
    setFormData({
      ...formData,
      image: null,
    });
    // Clear the file input
    clearFileInput();
  };

  const clearFileInput = () => {
    const fileInput = document.getElementById("image") as HTMLInputElement;

    if (fileInput) {
      fileInput.value = ""; // Reset the value of the file input
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
            imagePreview: null,
          });
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);

        // Update the submission status with an error message
        setSubmissionStatus("error");
      }
    } else {
      // Validation errors, handle them (e.g., display errors to the user)
      console.error("Validation errors:", errors);

      // Display validation errors to the user
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
      <h2 className="contact-heading">{t("contact.contact")}</h2>
      <div className="contact-container">
        <div className="contact-div">
          <div className="columns">
            {/* Left Section */}
            <div className="left-section">
              <div className="contact-section">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  style={{
                    backgroundColor: "orange", // Set the background color to orange
                    borderRadius: "50%", // Make it a circle by setting border-radius
                    padding: "20px", // Adjust padding for better appearance
                  }}
                />
              </div>
              <p className="contact-p">Email</p>
              <p>judit.valent@gmail.com</p>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <div className="contact-section">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2x"
                  style={{
                    width: "35px",
                    backgroundColor: "orange", // Set the background color to orange
                    borderRadius: "50%", // Make it a circle by setting border-radius
                    padding: "20px", // Adjust padding for better appearance
                  }}
                />
              </div>
              <div>
                <p className="contact-p">{t("contact.p1")}</p>
                <div className="social-icons">
                  <a href="https://bit.ly/3ua4R7s">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faFacebook}
                      size="2x"
                    />
                  </a>
                  <a href="https://bit.ly/3m89uKF">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faInstagram}
                      size="2x"
                      style={{ color: "#d62976" }}
                    />
                  </a>
                  <a href="http://bit.ly/3trNey7">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faYoutube}
                      size="2x"
                      style={{ color: "red" }}
                    />
                  </a>
                  <a href="http://bit.ly/3vyEfxz">
                    <FontAwesomeIcon
                      className="me-3"
                      icon={faFlickr}
                      size="2x"
                      style={{ color: "blue" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <form onSubmit={handleSubmit} className="compact-form">
            <h2>{t("contact.p2")}</h2>
            <br />
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName">{t("contact.p3")}</label>
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
                <label htmlFor="lastName">{t("contact.p4")}</label>
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
                <label htmlFor="email">{t("contact.p5")}</label>
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
                <label htmlFor="telephone">{t("contact.p7")}</label>
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
              <label htmlFor="subject">{t("contact.p6")}</label>
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
              <label htmlFor="comments">{t("contact.p8")}</label>
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
              <label htmlFor="image">{t("contact.p9")}</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="form-control"
              />
              {formData.image && (
                <div className="uploaded-image">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Uploaded Preview"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={handleDeleteImage}
                    className="trash-icon"
                  />
                </div>
              )}
            </div>

            <div>
              {/* we are using the global site key for testing */}
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
              <button type="submit" className="btn btn-secondary">
                {t("contact.submitButton")}
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

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SendPhotos = () => {
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
    navigate(`/send-photos?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  // useState for data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    subject: "",
    comments: "",
    image: null as File | null,
  });

  // useState for error messages
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // useState for reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  // useState for submission status
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const isEmailValid = (email: string): boolean => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber: string): boolean => {
    // Phone number validation regex
    const phoneRegex = /^[0-9+\-() ]*$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateField = (fieldName: string, value: string) => {
    const errors: Record<string, string> = {};

    // Validate email format
    if (fieldName === "email" && value.trim() !== "" && !isEmailValid(value)) {
      errors[fieldName] = `"${value}" is not a valid email address`;
    }

    // Validate telephone format
    if (
      fieldName === "tel" &&
      value.trim() !== "" &&
      !isPhoneNumberValid(value)
    ) {
      errors[fieldName] = `"${value}" is not a valid telephone number`;
    }

    // Clear the error message if the entered value is valid
    if (!errors[fieldName]) {
      setFormErrors({ ...formErrors, [fieldName]: "" });
    } else {
      setFormErrors({
        ...formErrors,
        [fieldName]: errors[fieldName],
      });
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    validateField(fieldName, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (file) {
      // Check if the file format are allowed
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for validation errors
    const hasErrors = Object.values(formErrors).some((error) => !!error);
    if (hasErrors || !recaptchaValue) {
      // Handle case where there are errors or reCAPTCHA is not completed
      console.error("Validation failed or reCAPTCHA not completed");
      return;
    }

    // Create a FormData object
    const postData = new FormData();

    // Append form fields
    postData.append("firstName", formData.firstName);
    postData.append("lastName", formData.lastName);
    postData.append("email", formData.email);
    postData.append("tel", formData.tel);
    postData.append("subject", formData.subject);
    postData.append("comments", formData.comments);

    // Append the image file if it exists
    if (formData.image) {
      postData.append("image", formData.image);
    }

    // Append reCAPTCHA value
    postData.append("recaptchaValue", recaptchaValue);

    console.log("Form Data:", Object.fromEntries(postData.entries()));
    console.log("Recaptcha Value:", recaptchaValue);

    // Validation for required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "tel",
      "subject",
      "comments",
    ];

    // Declare errors object
    const errors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        errors[field] = `"${field}" is required`;
      }
    });

    try {
      // Make the POST request using Axios
      // Modify this part according to your form submission handling
      const response = await axios.post(
        "http://localhost:5000/api/sendphotos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        // Reset reCAPTCHA
        setRecaptchaValue(null);

        setFormErrors({});
        setSubmissionStatus("success");

        // Reset form data, clear errors, and update submission status
        setFormData({
          // Initial values
          firstName: "",
          lastName: "",
          email: "",
          tel: "",
          subject: "",
          comments: "",
          image: null,
        });
      } else {
        // Handle the error
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white">
        <div className="container py-5">
          <h1>
            <strong>{t("sendPhotos.sendPhotos")}</strong>
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="container-fluid bg-dark py-5" style={{ color: "white" }}>
        <form
          onSubmit={handleSubmit}
          className="container"
          encType="multipart/form-data"
        >
          <div className="row mb-3">
            {/* First Name */}
            <div className="col-md-3 me-3">
              <label htmlFor="firstName">{t("sendPhotos.fName")}</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="form-control"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            {/* Last Name */}
            <div className="col-md-3">
              <label htmlFor="lastName">{t("sendPhotos.lName")}</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="form-control"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            {/* Email */}
            <div className="col-md-3 me-3 mb-3">
              <label htmlFor="email">{t("sendPhotos.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                className={`form-control ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </div>
            {/* Telephone */}
            <div className="col-md-3 ">
              <label htmlFor="tel">{t("sendPhotos.tel")}</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                className={`form-control ${formErrors.tel ? "is-invalid" : ""}`}
                value={formData.tel}
                onChange={(e) => handleInputChange("tel", e.target.value)}
              />
              {formErrors.tel && (
                <div className="invalid-feedback">{formErrors.tel}</div>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="col-md-6 mb-3">
            <label htmlFor="subject">{t("sendPhotos.subject")}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              required
              className="form-control"
            />
          </div>

          {/* Comment/Questions */}
          <div className="col-md-6 mb-3">
            <label htmlFor="comments">{t("sendPhotos.comments")}</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
              required
              className="form-control"
              rows={5}
            />
          </div>

          {/* Upload an Image */}
          <div className="col-md-6 mb-3">
            <label htmlFor="image">{t("sendPhotos.upload")}</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/jpeg, image/png, image/jpg"
              onChange={handleFileChange}
              className="form-control"
            />
            {formData.image && (
              <div className="uploaded-image mt-3">
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

          {/* ReCAPTCHA v2 */}
          <div>
            {/* We are using the global site key for testing */}
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleRecaptchaChange}
            />
            {/* Submit button */}
            <button type="submit" className="btn btn-primary mt-3">
              {t("sendPhotos.button")}
            </button>
            {submissionStatus === "success" && (
              <div className="success-message mt-3">
                <strong>Form submitted successfully!</strong>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default SendPhotos;

import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Volunteer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = (destination: string) => () => {
    // Set the hash part of the URL to an empty string
    window.location.href = `${destination}?lang=${i18n.language}#`;
  };

  // Define interests with corresponding translations
  const interests = [
    { id: 1, text: t("volunteer.form.option1") },
    { id: 2, text: t("volunteer.form.option2") },
    { id: 3, text: t("volunteer.form.option3") },
    { id: 4, text: t("volunteer.form.option4") },
    { id: 5, text: t("volunteer.form.option5") },
    { id: 6, text: t("volunteer.form.option6") },
    { id: 7, text: t("volunteer.form.option7") },
    { id: 8, text: t("volunteer.form.option8") },
    { id: 9, text: t("volunteer.form.option9") },
    { id: 10, text: t("volunteer.form.option10") },
  ];

  // useState for data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    age: "",
    selectedInterests: [] as string[],
  });

  // useState for reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  // useState for submission status
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  // useState for error messages
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // useEffect hook for handling form submission success
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
    navigate(`/volunteer?lang=${lang}`, { replace: true });

    // Update the fields if submission is successful
    if (submissionStatus === "success") {
      // Reset form data, clear errors, and update submission status
      setFormData({
        // Initial values
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        age: "",
        selectedInterests: [],
      });
      // Reset reCAPTCHA
      setRecaptchaValue(null);
      setFormErrors({});
    }
  }, [i18n, navigate, submissionStatus]);

  const isEmailValid = (email: string): boolean => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber: string): boolean => {
    // Simple phone number validation regex
    const phoneRegex = /^[0-9+\-() ]*$/; // Change this regex based on your validation criteria
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

  // Handle the radio buttons
  const handleRadioChange = (category: string, value: string) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [category]: value,
      };
    });
  };

  // Handle the checkbox change
  const handleCheckboxChange = (interest: string) => {
    setFormData((prevData) => {
      const selectedInterests = [...prevData.selectedInterests];
      const interestIndex = selectedInterests.indexOf(interest);

      if (interestIndex !== -1) {
        // Remove interest if already selected
        selectedInterests.splice(interestIndex, 1);
      } else {
        // Add interest if not selected
        selectedInterests.push(interest);
      }

      return {
        ...prevData,
        selectedInterests,
      };
    });
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    validateField(fieldName, value);
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

    // Ensure that selectedInterests is always an array
    const interestsArray = Array.isArray(formData.selectedInterests)
      ? formData.selectedInterests
      : [];

    console.log("Form Data:", formData);
    console.log("Selected Interests:", interestsArray.join(", "));
    console.log("Recaptcha Value:", recaptchaValue);

    // Validation for required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "tel",
      "age",
      "selectedInterests",
    ];

    // Declare errors object
    const errors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        errors[field] = `"${field}" is required`;
      }
    });

    // Prepare the data for the POST request
    const postData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      tel: formData.tel,
      age: formData.age,
      selectedInterests: formData.selectedInterests,
    };

    try {
      // Make the POST request using Axios
      const response = await axios.post(
        "https://www.youtube.com/shorts/p9wKxNO-23k?feature=share",
        postData
      );

      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        setSubmissionStatus("success");
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
        <div className="container mt-5">
          <h1>
            <strong>{t("volunteer.volunteer")}</strong>
          </h1>
          <div>
            <div>
              <p className="intro d-flex">{t("volunteer.intro")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid mt-5 bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mb-5">
              {/* YouTube video */}
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/p9wKxNO-23k"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Text on the right */}
            <div className="col-md-6 mt-5">
              <p>{t("volunteer.p1")}</p>
              <p>{t("volunteer.p2")}</p>
              <ul>
                <li>
                  <p>{t("volunteer.p3")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p4")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p5")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p6")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p7")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p8")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p9")}</p>
                </li>
                <li>
                  <p>
                    {t("volunteer.p10")}{" "}
                    <Link
                      to={`/fostering`}
                      onClick={handleButtonClick("/fostering")}
                    >
                      {t("volunteer.link")}
                    </Link>
                  </p>
                </li>
                <li>
                  <p>{t("volunteer.p11")}</p>
                </li>
                <li>
                  <p>{t("volunteer.p12")}</p>
                </li>
              </ul>
              <p>{t("volunteer.p13")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container-fluid bg-dark py-5" style={{ color: "white" }}>
        <form onSubmit={handleSubmit} className="container">
          <h2>
            <strong>{t("volunteer.form.title")}</strong>
          </h2>
          <p>{t("volunteer.form.intro")}</p>
          <br />
          <div className="row mb-3">
            {/* First Name */}
            <div className="col-md-4 me-5">
              <label htmlFor="firstName">{t("volunteer.form.fName")}</label>
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
            <div className="col-md-4">
              <label htmlFor="lastName">{t("volunteer.form.lName")}</label>
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
            <div className="col-md-4 me-5 mb-3">
              <label htmlFor="email">{t("volunteer.form.email")}</label>
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
            <div className="col-md-4 ">
              <label htmlFor="tel">{t("volunteer.form.tel")}</label>
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

          {/* Age */}
          <div className="mb-3">
            <label>{t("volunteer.form.age")}</label>
            {/* Radio: Under 18 */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="under18"
                name="age"
                value="under18"
                className="form-check-input"
                onChange={() => handleRadioChange("age", "Under 18")}
              />
              <label htmlFor="age" className="form-check-label">
                {t("volunteer.form.radio1")}
              </label>
            </div>

            {/* Radio: Over 18 */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="over18"
                name="age"
                value="over18"
                className="form-check-input"
                onChange={() => handleRadioChange("age", "Over 18")}
              />
              <label htmlFor="age" className="form-check-label">
                {t("volunteer.form.radio2")}
              </label>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-3">
            <label>{t("volunteer.form.interests")}</label>
            {/* Checkboxes for multiple selections */}
            {interests.map((interest) => (
              <div key={interest.id} className="form-check py-1 mx-2">
                <input
                  type="checkbox"
                  id={`interest${interest.id}`}
                  name={`interest${interest.id}`}
                  value={interest.text}
                  className="form-check-input"
                  checked={formData.selectedInterests.includes(interest.text)}
                  onChange={() => handleCheckboxChange(interest.text)}
                />
                <label
                  htmlFor={`interest${interest.id}`}
                  className="form-check-label"
                >
                  {interest.text}
                </label>
              </div>
            ))}
          </div>

          <div>
            {/* We are using the global site key for testing */}
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleRecaptchaChange}
            />
            <button type="submit" className="btn btn-primary mt-3">
              {t("contact.submitButton")}
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

export default Volunteer;

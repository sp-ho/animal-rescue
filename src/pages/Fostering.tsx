import { useTranslation } from "react-i18next";
import { useState } from "react";
import Select from "react-select";
import fosterImage from "../images/fostering/volunteer.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Fostering = () => {
  const { t } = useTranslation();

  const countries = [
    { label: t("fostering.form.hungary"), value: "Hungary" },
    { label: t("fostering.form.canada"), value: "Canada" },
    { label: t("fostering.form.usa"), value: "USA" },
  ];

  // useState for data
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    cell: string;
    tel: string;
    address: string;
    city: string;
    province: string;
    postal: string;
    country: string;
    wayOfReach: string;
    age: string;
    house: string;
    condoApart: string;
    animalsAllowed: string;
    animalExp: string;
    transport: string;
  }>({
    // initial values
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    tel: "",
    address: "",
    city: "",
    province: "",
    postal: "",
    country: "",
    wayOfReach: "",
    age: "",
    house: "",
    condoApart: "",
    animalsAllowed: "",
    animalExp: "",
    transport: "",
  });

  // useState for submission status
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  // useState for error messages
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleCountryChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    setFormData({
      ...formData,
      country: selectedOption ? selectedOption.value : "", // Update the country value in the state
    });
  };

  const handleCheckboxChange = (
    category: string,
    value: string,
    isChecked: boolean
  ) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [category]: isChecked ? value : "",
      };
    });
  };

  // useState for reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

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

  const handleEmailChange = (email: string) => {
    setFormData({ ...formData, email });
    validateField("email", email);
  };

  const handleCellChange = (cell: string) => {
    setFormData({ ...formData, cell });
    validateField("cell", cell);
  };

  const handleTelChange = (tel: string) => {
    setFormData({ ...formData, tel });
    validateField("tel", tel);
  };

  const validateField = (fieldName: string, value: string) => {
    const errors: Record<string, string> = {};

    // Validate email format
    if (fieldName === "email" && value.trim() !== "" && !isEmailValid(value)) {
      errors[fieldName] = `"${value}" is not a valid email address`;
    }

    // Validate telephone format
    if (
      fieldName === "cell" &&
      value.trim() !== "" &&
      !isPhoneNumberValid(value)
    ) {
      errors[fieldName] = `"${value}" is not a valid cell number`;
    }

    // Validate homeTel format
    if (
      fieldName === "tel" &&
      value.trim() !== "" &&
      !isPhoneNumberValid(value)
    ) {
      errors[fieldName] = `"${value}" is not a valid Home Tel number`;
    }

    // Clear the error message if the entered value is valid
    if (!errors[fieldName]) {
      setFormErrors({ ...formErrors, [fieldName]: "" });
    } else {
      setFormErrors({
        ...formErrors,
        [fieldName as string]: errors[fieldName],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    console.log("Recaptcha Value:", recaptchaValue);

    // Validation for required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "cell",
      "tel",
      "address",
      "city",
      "province",
      "postal",
      "country",
      "wayOfReach",
      "age",
      "house",
      "condoApart",
      "animalsAllowed",
      "animalExp",
      "transport",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !formData[field as keyof typeof formData] ||
        formData[field as keyof typeof formData].trim() === ""
    );

    if (missingFields.length > 0) {
      // Handle case where required fields are not filled
      console.error("Required fields are missing:", missingFields);
      return;
    }

    if (!recaptchaValue) {
      // Handle case where reCAPTCHA is not completed
      console.error("reCAPTCHA not completed");
      return;
    }

    // Prepare the data for the POST request
    const postData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      cell: formData.cell,
      tel: formData.tel,
      address: formData.address,
      city: formData.city,
      province: formData.province,
      postal: formData.postal,
      country: formData.country,
      wayOfReach: formData.wayOfReach,
      age: formData.age,
      house: formData.house,
      condoApart: formData.condoApart,
      animalsAllowed: formData.animalsAllowed,
      animalExp: formData.animalExp,
      transport: formData.transport,
    };

    try {
      // Make the POST request using Axios
      const response = await axios.post("/api/fostering", postData);

      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        // Reset form data, clear errors, and update submission status
        setFormData({
          // initial values
          firstName: "",
          lastName: "",
          email: "",
          cell: "",
          tel: "",
          address: "",
          city: "",
          province: "",
          postal: "",
          country: "",
          wayOfReach: "",
          age: "",
          house: "",
          condoApart: "",
          animalsAllowed: "",
          animalExp: "",
          transport: "",
        });
        setFormErrors({});
        setSubmissionStatus("success");
      } else {
        // Handle the error, e.g., display an error message
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting form:", error);
    }
  };
  // Set submission status to success
  // setSubmissionStatus("success");

  return (
    <>
      {/* White background section under the navbar */}
      <div className="container-fluid bg-white mt-5 mb-5">
        <div className="container mt-5">
          <h1>{t("fostering.aboutFostering")}</h1>
          <div>
            <div>
              {/* Use d-flex to display p1 in one line */}
              <p className="intro d-flex">{t("fostering.p1")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            {/* Image on the left with reduced margin */}
            <div className="col-md-6">
              <img
                src={fosterImage}
                alt="About Fostering"
                className="img-fluid rounded"
                style={{ maxWidth: "90%", height: "auto", marginBottom: 10 }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-6">
              <p>{t("fostering.p2")}</p>
              <p>{t("fostering.p3")}</p>
              <p>{t("fostering.p4")}</p>
              <p>{t("fostering.p5")}</p>
              <p>{t("fostering.p6")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container-fluid bg-dark py-5" style={{ color: "white" }}>
        <form onSubmit={handleSubmit} className="container">
          <h2>{t("fostering.form.title")}</h2>
          <br />
          <div className="row mb-3">
            <div className="col-md-4 me-5">
              <label htmlFor="firstName">{t("fostering.form.fName")}</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName">{t("fostering.form.lName")}</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 me-5 mb-3">
              <label htmlFor="email">{t("fostering.form.email1")}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control"
                value={formData.email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              {formErrors.email && (
                <div className="error-message">{formErrors.email}</div>
              )}
            </div>
            <div className="col-md-4 ">
              <label htmlFor="cell">{t("fostering.form.cell1")}</label>
              <input
                type="tel"
                id="cell"
                name="cell"
                className="form-control"
                value={formData.cell}
                onChange={(e) => handleCellChange(e.target.value)}
              />
              {formErrors.cell && (
                <div className="error-message">{formErrors.cell}</div>
              )}
            </div>
            <div className="col-md-4 me-5 mb-3">
              <label htmlFor="homeTel">{t("fostering.form.tel1")}</label>
              <input
                type="tel"
                id="homeTel"
                name="homeTel"
                className="form-control"
                value={formData.tel}
                onChange={(e) => handleTelChange(e.target.value)}
              />
              {formErrors.tel && (
                <div className="error-message">{formErrors.tel}</div>
              )}
            </div>
            <div className="col-md-4">
              <label htmlFor="address">{t("fostering.form.address")}</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 me-5 mb-3">
              <label htmlFor="city">{t("fostering.form.city")}</label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="province">{t("fostering.form.prov")}</label>
              <input
                type="text"
                id="province"
                name="province"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, province: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 me-5 mb-3">
              <label htmlFor="city">{t("fostering.form.postal")}</label>
              <input
                type="text"
                id="postal"
                name="postal"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, postal: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="country">{t("fostering.form.country")}</label>
              {/* Use Select component for the country dropdown */}
              <Select
                options={countries}
                isSearchable
                placeholder={t("fostering.form.hungary")} // Define onChange handler to update the selected country in the state
                onChange={handleCountryChange}
                styles={{
                  option: (provided) => ({
                    ...provided,
                    color: "black", // set text color to black
                  }),
                }}
              />
            </div>
          </div>

          {/* Preferred way to reach you */}
          <div className="mb-3">
            <label>{t("fostering.form.wayOfReach")}</label>
            {/* Checkbox: Email */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="email"
                name="wayOfReach"
                value="email"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("wayOfReach", "email", e.target.checked)
                }
              />
              <label htmlFor="email" className="form-check-label">
                {t("fostering.form.email2")}
              </label>
            </div>

            {/* Checkbox: Cell */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="cell"
                name="wayOfReach"
                value="cell"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("wayOfReach", "cell", e.target.checked)
                }
              />
              <label htmlFor="cell" className="form-check-label">
                {t("fostering.form.cell2")}
              </label>
            </div>

            {/* Checkbox: Home Tel */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="homeTel"
                name="wayOfReach"
                value="homeTel"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange(
                    "wayOfReach",
                    "homeTel",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="homeTel" className="form-check-label">
                {t("fostering.form.tel2")}
              </label>
            </div>
          </div>

          {/* Age */}
          <div className="mb-3">
            <label htmlFor="age">{t("fostering.form.age")}</label>
            {/* Checkbox: Under 18 */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="under18"
                name="age"
                value="under18"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("age", "under18", e.target.checked)
                }
              />
              <label htmlFor="under18" className="form-check-label">
                {t("fostering.form.<18")}
              </label>
            </div>
            {/* Checkbox: 18-29 */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="18_29"
                name="age"
                value="18_29"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("age", "18_29", e.target.checked)
                }
              />
              <label htmlFor="18_29" className="form-check-label">
                18 - 29
              </label>
            </div>
            {/* Checkbox: 30-44 */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="30_44"
                name="age"
                value="30_44"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("age", "30_44", e.target.checked)
                }
              />
              <label htmlFor="30_44" className="form-check-label">
                30 - 44
              </label>
            </div>
            {/* Checkbox: 45-64 */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="45_64"
                name="age"
                value="45_64"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("age", "45_64", e.target.checked)
                }
              />
              <label htmlFor="45_64" className="form-check-label">
                45 - 64
              </label>
            </div>
            {/* Checkbox: 65 and over */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="over65"
                name="age"
                value="over65"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("age", "over65", e.target.checked)
                }
              />
              <label htmlFor="over65" className="form-check-label">
                {t("fostering.form.>65")}
              </label>
            </div>
          </div>

          {/* Live in a house? */}
          <div className="mb-3">
            <label htmlFor="house">{t("fostering.form.house")}</label>
            {/* Checkbox: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="yesHouse"
                name="house"
                value="yesHouse"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("house", "yesHouse", e.target.checked)
                }
              />
              <label htmlFor="house" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Checkbox: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="noHouse"
                name="house"
                value="noHouse"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("house", "noHouse", e.target.checked)
                }
              />
              <label htmlFor="house" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>

          {/* Live in condo/apartment? */}
          <div className="mb-3">
            <label htmlFor="condoApart">
              {t("fostering.form.condo/apartment")}
            </label>
            {/* Checkbox: Condo */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="condo"
                name="condoApart"
                value="condo"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("condoApart", "condo", e.target.checked)
                }
              />
              <label htmlFor="condoApart" className="form-check-label">
                {t("fostering.form.condo")}
              </label>
            </div>
            {/* Checkbox: Apartment */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="apart"
                name="condoApart"
                value="apart"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("condoApart", "apart", e.target.checked)
                }
              />
              <label htmlFor="condoApart" className="form-check-label">
                {t("fostering.form.apartment")}
              </label>
            </div>
            {/* Checkbox: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="noCondoApart"
                name="condoApart"
                value="noCondoApart"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange(
                    "condoApart",
                    "noCondoApart",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="condoApart" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>

          {/* Animals allowed? */}
          <div className="mb-3">
            <label htmlFor="animalAllowed">
              {t("fostering.form.animalAllowed")}
            </label>
            {/* Checkbox: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="yesAnimal"
                name="animalAllowed"
                value="yesAnimal"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange(
                    "animalAllowed",
                    "yesAnimal",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="animalAllowed" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Checkbox: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="noAnimal"
                name="animalAllowed"
                value="noAnimal"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange(
                    "animalAllowed",
                    "noAnimal",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="animalAllowed" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>
          {/* Experience with animals? */}
          <div className="mb-3">
            <label htmlFor="experience">{t("fostering.form.experience")}</label>
            {/* Checkbox: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="yesExp"
                name="experience"
                value="yesExp"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("experience", "yesExp", e.target.checked)
                }
              />
              <label htmlFor="experience" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Checkbox: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="noExp"
                name="experience"
                value="noExp"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange("experience", "noExp", e.target.checked)
                }
              />
              <label htmlFor="experience" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>

          {/* Transportation */}
          <div className="mb-3">
            <label htmlFor="transportation">
              {t("fostering.form.transportation")}
            </label>
            {/* Checkbox: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="yesTransport"
                name="transportation"
                value="yesTransport"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange(
                    "transportation",
                    "yesTransport",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="transportation" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Checkbox: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="checkbox"
                id="noTransport"
                name="transportation"
                value="noTransport"
                className="form-check-input"
                onChange={(e) =>
                  handleCheckboxChange(
                    "transportation",
                    "noTransport",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="transportation" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>

          <div>
            {/* we are using the global site key for testing */}
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleRecaptchaChange}
            />
            <button type="submit" className="btn btn-secondary mt-3">
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
    </>
  );
};

export default Fostering;

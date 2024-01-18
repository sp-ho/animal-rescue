import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import fosterImage from "../images/fostering/volunteer.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Fostering = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Use i18n to persist language
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
    navigate(`/fostering?lang=${lang}`, { replace: true });
  }, [i18n, navigate]);

  const countries = [
    { label: t("fostering.countries.afghanistan"), value: "Afghanistan" },
    { label: t("fostering.countries.albania"), value: "Albania" },
    { label: t("fostering.countries.algeria"), value: "Algeria" },
    { label: t("fostering.countries.andorra"), value: "Andorra" },
    { label: t("fostering.countries.angola"), value: "Angola" },
    {
      label: t("fostering.countries.antiguaAndBarbuda"),
      value: "Antigua and Barbuda",
    },
    { label: t("fostering.countries.armenia"), value: "Armenia" },
    { label: t("fostering.countries.australia"), value: "Australia" },
    { label: t("fostering.countries.austria"), value: "Austria" },
    { label: t("fostering.countries.azerbaijan"), value: "Azerbaijan" },
    { label: t("fostering.countries.bahamas"), value: "Bahamas" },
    { label: t("fostering.countries.bahrain"), value: "Bahrain" },
    { label: t("fostering.countries.bangladesh"), value: "Bangladesh" },
    { label: t("fostering.countries.belarus"), value: "Belarus" },
    { label: t("fostering.countries.belgium"), value: "Belgium" },
    { label: t("fostering.countries.belize"), value: "Belize" },
    { label: t("fostering.countries.benin"), value: "Benin" },
    { label: t("fostering.countries.bhutan"), value: "Bhutan" },
    { label: t("fostering.countries.bolivia"), value: "Bolivia" },
    {
      label: t("fostering.countries.bosniaAndHerzegovina"),
      value: "Bosnia and Herzegovina",
    },
    { label: t("fostering.countries.botswana"), value: "Botswana" },
    { label: t("fostering.countries.brazil"), value: "Brazil" },
    { label: t("fostering.countries.brunei"), value: "Brunei" },
    { label: t("fostering.countries.bulgaria"), value: "Bulgaria" },
    { label: t("fostering.countries.burkinaFaso"), value: "Burkina Faso" },
    { label: t("fostering.countries.burundi"), value: "Burundi" },
    { label: t("fostering.countries.cambodia"), value: "Cambodia" },
    { label: t("fostering.countries.cameroon"), value: "Cameroon" },
    { label: t("fostering.countries.canada"), value: "Canada" },
    { label: t("fostering.countries.capeVerde"), value: "Cape Verde" },
    {
      label: t("fostering.countries.centralAfricanRepublic"),
      value: "Central African Republic",
    },
    { label: t("fostering.countries.chad"), value: "Chad" },
    { label: t("fostering.countries.chile"), value: "Chile" },
    { label: t("fostering.countries.china"), value: "China" },
    { label: t("fostering.countries.colombia"), value: "Colombia" },
    { label: t("fostering.countries.comoros"), value: "Comoros" },
    { label: t("fostering.countries.costaRica"), value: "Costa Rica" },
    {
      label: t("fostering.countries.ivoryCoast"),
      value: "Côte d’Ivoire/Ivory Coast",
    },
    { label: t("fostering.countries.croatia"), value: "Croatia" },
    { label: t("fostering.countries.cuba"), value: "Cuba" },
    { label: t("fostering.countries.cyprus"), value: "Cyprus" },
    {
      label: t("fostering.countries.czechRepublic"),
      value: "Czechia/Czech Republic",
    },
    {
      label: t("fostering.countries.democraticRepublicOfTheCongo"),
      value: "Democratic Republic of the Congo",
    },
    { label: t("fostering.countries.denmark"), value: "Denmark" },
    { label: t("fostering.countries.djibouti"), value: "Djibouti" },
    { label: t("fostering.countries.dominica"), value: "Dominica" },
    {
      label: t("fostering.countries.dominicanRepublic"),
      value: "DominicanRepublic",
    },
    { label: t("fostering.countries.ecuador"), value: "Ecuador" },
    { label: t("fostering.countries.egypt"), value: "Egypt" },
    { label: t("fostering.countries.elSalvador"), value: "El Salvador" },
    {
      label: t("fostering.countries.equatorialGuinea"),
      value: "Equatorial Guinea",
    },
    { label: t("fostering.countries.eritrea"), value: "Eritrea" },
    { label: t("fostering.countries.estonia"), value: "Estonia" },
    {
      label: t("fostering.countries.eswatini"),
      value: "Eswatini (formerly Swaziland)",
    },
    { label: t("fostering.countries.ethiopia"), value: "Ethiopia" },
    { label: t("fostering.countries.fiji"), value: "Fiji" },
    { label: t("fostering.countries.finland"), value: "Finland" },
    { label: t("fostering.countries.france"), value: "France" },
    { label: t("fostering.countries.gabon"), value: "Gabon" },
    { label: t("fostering.countries.gambia"), value: "Gambia" },
    { label: t("fostering.countries.georgia"), value: "Georgia" },
    { label: t("fostering.countries.germany"), value: "Germany" },
    { label: t("fostering.countries.ghana"), value: "Ghana" },
    { label: t("fostering.countries.greece"), value: "Greece" },
    { label: t("fostering.countries.grenada"), value: "Grenada" },
    { label: t("fostering.countries.guatemala"), value: "Guatemala" },
    { label: t("fostering.countries.guinea"), value: "Guinea" },
    { label: t("fostering.countries.guineaBissau"), value: "Guinea-Bissau" },
    { label: t("fostering.countries.guyana"), value: "Guyana" },
    { label: t("fostering.countries.haiti"), value: "Haiti" },
    { label: t("fostering.countries.honduras"), value: "Honduras" },
    { label: t("fostering.countries.hungary"), value: "Hungary" },
    { label: t("fostering.countries.iceland"), value: "Iceland" },
    { label: t("fostering.countries.india"), value: "India" },
    { label: t("fostering.countries.indonesia"), value: "Indonesia" },
    { label: t("fostering.countries.iran"), value: "Iran" },
    { label: t("fostering.countries.iraq"), value: "Iraq" },
    { label: t("fostering.countries.ireland"), value: "Ireland" },
    { label: t("fostering.countries.israel"), value: "Israel" },
    { label: t("fostering.countries.italy"), value: "Italy" },
    { label: t("fostering.countries.jamaica"), value: "Jamaica" },
    { label: t("fostering.countries.japan"), value: "Japan" },
    { label: t("fostering.countries.jordan"), value: "Jordan" },
    { label: t("fostering.countries.kazakhstan"), value: "Kazakhstan" },
    { label: t("fostering.countries.kenya"), value: "Kenya" },
    { label: t("fostering.countries.kiribati"), value: "Kiribati" },
    { label: t("fostering.countries.kuwait"), value: "Kuwait" },
    { label: t("fostering.countries.kyrgyzstan"), value: "Kyrgyzstan" },
    { label: t("fostering.countries.laos"), value: "Laos" },
    { label: t("fostering.countries.latvia"), value: "Latvia" },
    { label: t("fostering.countries.lebanon"), value: "Lebanon" },
    { label: t("fostering.countries.lesotho"), value: "Lesotho" },
    { label: t("fostering.countries.liberia"), value: "Liberia" },
    { label: t("fostering.countries.libya"), value: "Libya" },
    { label: t("fostering.countries.liechtenstein"), value: "Liechtenstein" },
    { label: t("fostering.countries.lithuania"), value: "Lithuania" },
    { label: t("fostering.countries.luxembourg"), value: "Luxembourg" },
    { label: t("fostering.countries.madagascar"), value: "Madagascar" },
    { label: t("fostering.countries.malawi"), value: "Malawi" },
    { label: t("fostering.countries.malaysia"), value: "Malaysia" },
    { label: t("fostering.countries.maldives"), value: "Maldives" },
    { label: t("fostering.countries.mali"), value: "Mali" },
    { label: t("fostering.countries.malta"), value: "Malta" },
    {
      label: t("fostering.countries.marshallIslands"),
      value: "Marshall Islands",
    },
    { label: t("fostering.countries.mauritania"), value: "Mauritania" },
    { label: t("fostering.countries.mauritius"), value: "Mauritius" },
    { label: t("fostering.countries.mexico"), value: "Mexico" },
    { label: t("fostering.countries.micronesia"), value: "Micronesia" },
    { label: t("fostering.countries.moldova"), value: "Moldova" },
    { label: t("fostering.countries.monaco"), value: "Monaco" },
    { label: t("fostering.countries.mongolia"), value: "Mongolia" },
    { label: t("fostering.countries.montenegro"), value: "Montenegro" },
    { label: t("fostering.countries.morocco"), value: "Morocco" },
    { label: t("fostering.countries.mozambique"), value: "Mozambique" },
    { label: t("fostering.countries.myanmar"), value: "Myanmar" },
    { label: t("fostering.countries.namibia"), value: "Namibia" },
    { label: t("fostering.countries.nauru"), value: "Nauru" },
    { label: t("fostering.countries.nepal"), value: "Nepal" },
    { label: t("fostering.countries.netherlands"), value: "Netherlands" },
    { label: t("fostering.countries.newZealand"), value: "New Zealand" },
    { label: t("fostering.countries.nicaragua"), value: "Nicaragua" },
    { label: t("fostering.countries.niger"), value: "Niger" },
    { label: t("fostering.countries.nigeria"), value: "Nigeria" },
    { label: t("fostering.countries.northKorea"), value: "North Korea" },
    {
      label: t("fostering.countries.northMacedonia"),
      value: "North Macedonia",
    },
    { label: t("fostering.countries.norway"), value: "Norway" },
    { label: t("fostering.countries.oman"), value: "Oman" },
    { label: t("fostering.countries.pakistan"), value: "Pakistan" },
    { label: t("fostering.countries.palau"), value: "Palau" },
    { label: t("fostering.countries.palestine"), value: "Palestine" },
    { label: t("fostering.countries.panama"), value: "Panama" },
    {
      label: t("fostering.countries.papuaNewGuinea"),
      value: "Papua New Guinea",
    },
    { label: t("fostering.countries.paraguay"), value: "Paraguay" },
    { label: t("fostering.countries.peru"), value: "Peru" },
    { label: t("fostering.countries.philippines"), value: "Philippines" },
    { label: t("fostering.countries.poland"), value: "Poland" },
    { label: t("fostering.countries.portugal"), value: "Portugal" },
    { label: t("fostering.countries.qatar"), value: "Qatar" },
    {
      label: t("fostering.countries.republicOfTheCongo"),
      value: "Republic of the Congo",
    },
    { label: t("fostering.countries.romania"), value: "Romania" },
    { label: t("fostering.countries.russia"), value: "Russia" },
    { label: t("fostering.countries.rwanda"), value: "Rwanda" },
    {
      label: t("fostering.countries.saintKittsAndNevis"),
      value: "Saint Kitts and Nevis",
    },
    { label: t("fostering.countries.saintLucia"), value: "SaintLucia" },
    {
      label: t("fostering.countries.saintVincentAndTheGrenadines"),
      value: "Saint Vincent and the Grenadines",
    },
    { label: t("fostering.countries.samoa"), value: "Samoa" },
    { label: t("fostering.countries.sanMarino"), value: "SanMarino" },
    {
      label: t("fostering.countries.saoTomeAndPrincipe"),
      value: "São Tomé and Príncipe",
    },
    { label: t("fostering.countries.saudiArabia"), value: "Saudi Arabia" },
    { label: t("fostering.countries.senegal"), value: "Senegal" },
    { label: t("fostering.countries.serbia"), value: "Serbia" },
    { label: t("fostering.countries.seychelles"), value: "Seychelles" },
    { label: t("fostering.countries.sierraLeone"), value: "Sierra Leone" },
    { label: t("fostering.countries.singapore"), value: "Singapore" },
    { label: t("fostering.countries.slovakia"), value: "Slovakia" },
    { label: t("fostering.countries.slovenia"), value: "Slovenia" },
    { label: t("fostering.countries.solomonIslands"), value: "SolomonIslands" },
    { label: t("fostering.countries.somalia"), value: "Somalia" },
    { label: t("fostering.countries.southAfrica"), value: "South Africa" },
    { label: t("fostering.countries.southKorea"), value: "South Korea" },
    { label: t("fostering.countries.southSudan"), value: "South Sudan" },
    { label: t("fostering.countries.spain"), value: "Spain" },
    { label: t("fostering.countries.sriLanka"), value: "Sri Lanka" },
    { label: t("fostering.countries.sudan"), value: "Sudan" },
    { label: t("fostering.countries.suriname"), value: "Suriname" },
    { label: t("fostering.countries.sweden"), value: "Sweden" },
    { label: t("fostering.countries.switzerland"), value: "Switzerland" },
    { label: t("fostering.countries.syria"), value: "Syria" },
    { label: t("fostering.countries.tajikistan"), value: "Tajikistan" },
    { label: t("fostering.countries.tanzania"), value: "Tanzania" },
    { label: t("fostering.countries.thailand"), value: "Thailand" },
    {
      label: t("fostering.countries.eastTimor"),
      value: "Timor-Leste/East Timor",
    },
    { label: t("fostering.countries.togo"), value: "Togo" },
    { label: t("fostering.countries.tonga"), value: "Tonga" },
    {
      label: t("fostering.countries.trinidadAndTobago"),
      value: "Trinidad and Tobago",
    },
    { label: t("fostering.countries.tunisia"), value: "Tunisia" },
    { label: t("fostering.countries.turkey"), value: "Turkey" },
    { label: t("fostering.countries.turkmenistan"), value: "Turkmenistan" },
    { label: t("fostering.countries.tuvalu"), value: "Tuvalu" },
    { label: t("fostering.countries.uganda"), value: "Uganda" },
    { label: t("fostering.countries.ukraine"), value: "Ukraine" },
    { label: t("fostering.countries.uae"), value: "United Arab Emirates" },
    { label: t("fostering.countries.uk"), value: "United Kingdom" },
    { label: t("fostering.countries.usa"), value: "United States of America" },
    { label: t("fostering.countries.uruguay"), value: "Uruguay" },
    { label: t("fostering.countries.uzbekistan"), value: "Uzbekistan" },
    { label: t("fostering.countries.vanuatu"), value: "Vanuatu" },
    { label: t("fostering.countries.venezuela"), value: "Venezuela" },
    { label: t("fostering.countries.vietnam"), value: "Vietnam" },
    { label: t("fostering.countries.yemen"), value: "Yemen" },
    { label: t("fostering.countries.zambia"), value: "Zambia" },
    { label: t("fostering.countries.zimbabwe"), value: "Zimbabwe" },
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
    // Initial values
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    tel: "",
    address: "",
    city: "",
    province: "",
    postal: "",
    country: "Hungary",
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

  // useState for reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  // useEffect hook for handling form submission success
  useEffect(() => {
    console.log("Submission Status:", submissionStatus);
    if (submissionStatus === "success") {
      // Reset form data, clear errors, and update submission status
      setFormData({
        // Initial values
        firstName: "",
        lastName: "",
        email: "",
        cell: "",
        tel: "",
        address: "",
        city: "",
        province: "",
        postal: "",
        country: "Hungary",
        wayOfReach: "",
        age: "",
        house: "",
        condoApart: "",
        animalsAllowed: "",
        animalExp: "",
        transport: "",
      });
      // Reset reCAPTCHA
      setRecaptchaValue(null);
      setFormErrors({});
    }
  }, [submissionStatus]);

  const handleCountryChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    setFormData({
      ...formData,
      country: selectedOption ? selectedOption.value : "", // Update the country value in the state
    });
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

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const isEmailValid = (email: string): boolean => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber: string): boolean => {
    // Phone number validation regex
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
        [fieldName]: errors[fieldName],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaValue) {
      // Handle case where reCAPTCHA is not completed
      console.error("reCAPTCHA not completed");
      return;
    }
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
      "wayOfReach",
      "age",
      "house",
      "condoApart",
      "animalsAllowed",
      "animalExp",
      "transport",
    ];

    // Declare errors object
    const errors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (
        !formData[field as keyof typeof formData] ||
        formData[field as keyof typeof formData].trim() === ""
      ) {
        errors[field] = `"${field}" is required`;
      }
    });

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
      const response = await axios.post(
        "http://localhost:5000/api/fostering",
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
      <div className="container-fluid bg-white mt-5 mb-5">
        <div className="container mt-5">
          <h1>
            <strong>{t("fostering.aboutFostering")}</strong>
          </h1>
          <div>
            <div>
              <p className="intro d-flex">{t("fostering.p1")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section with more padding */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row py-5">
            {/* Image on the left */}
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
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
          <h2>
            <strong>{t("fostering.form.title")}</strong>
          </h2>
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
                className={`form-control ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                value={formData.email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </div>
            <div className="col-md-4 ">
              <label htmlFor="cell">{t("fostering.form.cell1")}</label>
              <input
                type="tel"
                id="cell"
                name="cell"
                className={`form-control ${formErrors.tel ? "is-invalid" : ""}`}
                value={formData.cell}
                onChange={(e) => handleCellChange(e.target.value)}
              />
              {formErrors.cell && (
                <div className="invalid-feedback">{formErrors.cell}</div>
              )}
            </div>
            <div className="col-md-4 me-5 mb-3">
              <label htmlFor="homeTel">{t("fostering.form.tel1")}</label>
              <input
                type="tel"
                id="homeTel"
                name="homeTel"
                className={`form-control ${formErrors.tel ? "is-invalid" : ""}`}
                value={formData.tel}
                onChange={(e) => handleTelChange(e.target.value)}
              />
              {formErrors.tel && (
                <div className="invalid-feedback">{formErrors.tel}</div>
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
              {/* Use Select component for the country dropdown options */}
              <Select
                options={countries}
                isSearchable
                placeholder={t("fostering.countries.hungary")} // Define onChange handler to update the selected country in the state
                onChange={handleCountryChange}
                styles={{
                  option: (provided) => ({
                    ...provided,
                    color: "black", // Set text color to black
                  }),
                }}
              />
            </div>
          </div>

          {/* Preferred way to reach you */}
          <div className="mb-3">
            <label>{t("fostering.form.wayOfReach")}</label>
            {/* Radio: Email */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="email"
                name="wayOfReach"
                value="email"
                className="form-check-input"
                onChange={() => handleRadioChange("wayOfReach", "email")}
              />
              <label htmlFor="email" className="form-check-label">
                {t("fostering.form.email2")}
              </label>
            </div>

            {/* Radio: Cell */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="cell"
                name="wayOfReach"
                value="cell"
                className="form-check-input"
                onChange={() => handleRadioChange("wayOfReach", "cell")}
              />
              <label htmlFor="cell" className="form-check-label">
                {t("fostering.form.cell2")}
              </label>
            </div>

            {/* Radio: Home Tel */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="homeTel"
                name="wayOfReach"
                value="homeTel"
                className="form-check-input"
                onChange={() => handleRadioChange("wayOfReach", "homeTel")}
              />
              <label htmlFor="homeTel" className="form-check-label">
                {t("fostering.form.tel2")}
              </label>
            </div>
          </div>

          {/* Age */}
          <div className="mb-3">
            <label htmlFor="age">{t("fostering.form.age")}</label>
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
              <label htmlFor="under18" className="form-check-label">
                {t("fostering.form.<18")}
              </label>
            </div>
            {/* Radio: 18-29 */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="18_29"
                name="age"
                value="18_29"
                className="form-check-input"
                onChange={() => handleRadioChange("age", "18-29")}
              />
              <label htmlFor="18_29" className="form-check-label">
                18 - 29
              </label>
            </div>
            {/* Radio: 30-44 */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="30_44"
                name="age"
                value="30_44"
                className="form-check-input"
                onChange={() => handleRadioChange("age", "30-44")}
              />
              <label htmlFor="30_44" className="form-check-label">
                30 - 44
              </label>
            </div>
            {/* Radio: 45-64 */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="45_64"
                name="age"
                value="45_64"
                className="form-check-input"
                onChange={() => handleRadioChange("age", "45-64")}
              />
              <label htmlFor="45_64" className="form-check-label">
                45 - 64
              </label>
            </div>
            {/* Radio: 65 and over */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="over65"
                name="age"
                value="over65"
                className="form-check-input"
                onChange={() => handleRadioChange("age", "65 and over")}
              />
              <label htmlFor="over65" className="form-check-label">
                {t("fostering.form.>65")}
              </label>
            </div>
          </div>

          {/* Live in a house? */}
          <div className="mb-3">
            <label htmlFor="house">{t("fostering.form.house")}</label>
            {/* Radio: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="yesHouse"
                name="house"
                value="yesHouse"
                className="form-check-input"
                onChange={() => handleRadioChange("house", "yes")}
              />
              <label htmlFor="house" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Radio: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="noHouse"
                name="house"
                value="noHouse"
                className="form-check-input"
                onChange={() => handleRadioChange("house", "no")}
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
            {/* Radio: Condo */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="condo"
                name="condoApart"
                value="condo"
                className="form-check-input"
                onChange={() => handleRadioChange("condoApart", "condo")}
              />
              <label htmlFor="condoApart" className="form-check-label">
                {t("fostering.form.condo")}
              </label>
            </div>
            {/* Radio: Apartment */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="apart"
                name="condoApart"
                value="apart"
                className="form-check-input"
                onChange={() => handleRadioChange("condoApart", "apartment")}
              />
              <label htmlFor="condoApart" className="form-check-label">
                {t("fostering.form.apartment")}
              </label>
            </div>
            {/* Radio: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="noCondoApart"
                name="condoApart"
                value="noCondoApart"
                className="form-check-input"
                onChange={() => handleRadioChange("condoApart", "No")}
              />
              <label htmlFor="condoApart" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>

          {/* Animals allowed? */}
          <div className="mb-3">
            <label htmlFor="animalsAllowed">
              {t("fostering.form.animalsAllowed")}
            </label>
            {/* Radio: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="yesAnimal"
                name="animalsAllowed"
                value="Animals Allowed"
                className="form-check-input"
                onChange={() =>
                  handleRadioChange("animalsAllowed", "Animals Allowed")
                }
              />
              <label htmlFor="animalsAllowed" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Radio: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="noAnimal"
                name="animalsAllowed"
                value="Animals Not Allowed"
                className="form-check-input"
                onChange={() =>
                  handleRadioChange("animalsAllowed", "Animals Not Allowed")
                }
              />
              <label htmlFor="animalsAllowed" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>

          {/* Experience with animals? */}
          <div className="mb-3">
            <label htmlFor="animalExp">{t("fostering.form.experience")}</label>
            {/* Radio: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="yesExp"
                name="animalExp"
                value="Experienced"
                className="form-check-input"
                onChange={() => handleRadioChange("animalExp", "Experienced")}
              />
              <label htmlFor="animalExp" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Radio: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="noExp"
                name="animalExp"
                value="No Experience"
                className="form-check-input"
                onChange={() => handleRadioChange("animalExp", "No Experience")}
              />
              <label htmlFor="animalExp" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
          </div>

          {/* Transportation */}
          <div className="mb-3">
            <label htmlFor="transport">
              {t("fostering.form.transportation")}
            </label>
            {/* Radio: Yes */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="yesTransport"
                name="transport"
                value="Transportation OK"
                className="form-check-input"
                onChange={() =>
                  handleRadioChange("transport", "Transportation OK")
                }
              />
              <label htmlFor="transport" className="form-check-label">
                {t("fostering.form.yes")}
              </label>
            </div>
            {/* Radio: No */}
            <div className="form-check py-1 mx-2">
              <input
                type="radio"
                id="noTransport"
                name="transport"
                value="No Transportation"
                className="form-check-input"
                onChange={() =>
                  handleRadioChange("transport", "No Transportation")
                }
              />
              <label htmlFor="transport" className="form-check-label">
                {t("fostering.form.no")}
              </label>
            </div>
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

export default Fostering;

// FormValidator.tsx
const validateFormData = (formData: FormData) => {
  const errors: Record<string, string> = {};

  // Check required fields
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "subject",
    "comments",
  ];
  requiredFields.forEach((field) => {
    if (!formData.get(field)) {
      errors[field] = `"${field}" is required`;
    }
  });

  // Validate email format
  const email = formData.get("email") as string;
  if (!isValidEmail(email)) {
    errors["email"] = `"${email}" is not a valid email address`;
  }

  // Validate telephone format
  const telephone = formData.get("telephone") as string;
  if (telephone && !isValidTelephone(telephone)) {
    errors["telephone"] = `"${telephone}" is not a valid telephone number`;
  }

  // Validate image if provided
  const image = formData.get("image") as File | null;
  if (image) {
    const imageSize = image.size / (1024 * 1024); // in MB
    const allowedImageFormats = ["image/jpeg", "image/png", "image/jpg"];

    if (image.type != null) {
      if (!allowedImageFormats.includes(image.type)) {
        errors["image"] =
          "Invalid image format. Please upload a jpg, jpeg, or png file.";
      }

      if (imageSize > 5) {
        errors["image"] =
          "Image size exceeds the maximum allowed limit of 5MB.";
      }
    }
  }

  return errors;
};

const isValidEmail = (email: string) => {
  // Implement your email validation logic here
  // For a simple example, you can use a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidTelephone = (telephone: string) => {
  // Implement your telephone validation logic here
  // For a simple example, you can use a regular expression
  const telephoneRegex = /^[0-9+\-() ]*$/;
  return telephoneRegex.test(telephone);
};

export default validateFormData;

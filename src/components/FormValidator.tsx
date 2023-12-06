// FormValidator.tsx
import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  telephone: Joi.string().pattern(/^[0-9+\-() ]*$/),
  subject: Joi.string().required(),
  comments: Joi.string().required().max(500),
  image: Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid("image/jpeg", "image/png").required(),
    size: Joi.number().max(5 * 1024 * 1024),
  }),
});

const validateFormData = (formData: FormData) => {
  const { error } = schema.validate(formData, { abortEarly: false });
  if (error) {
    const errors: Record<string, string> = {}; // use Record<string, string> for explicit typing
    error.details.forEach((detail) => {
      errors[detail.path[0] as string] = detail.message;
    });
    return errors;
  }

  return {};
};

export default validateFormData;

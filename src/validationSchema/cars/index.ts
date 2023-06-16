import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  location: yup.string().required(),
  availability: yup.boolean().required(),
  company_id: yup.string().nullable(),
});

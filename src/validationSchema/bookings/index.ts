import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  pickup_time: yup.date().required(),
  drop_off_time: yup.date().required(),
  car_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});

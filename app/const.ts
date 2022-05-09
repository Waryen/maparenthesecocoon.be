import * as yup from 'yup';

// contact form schema validation
export const validationSchema = yup.object({
  lastname: yup
    .string()
    .max(50, `Maximum 50 charactères requis.`)
    .required(`Champs obligatoire`),
  firstname: yup
    .string()
    .max(50, `Maximum 50 charactères requis.`)
    .required(`Champs obligatoire`),
  email: yup
    .string()
    .email(`Veuillez spécifier une adresse email valide.`)
    .max(100, `Maximum 100 charactères requis.`)
    .required(`Champs obligatoire.`),
  phone: yup
    .string()
    .matches(/^(\+?32|0)4\d{8}$/, `Mauvais format de numéro de téléphone`)
    .required(`Champs obligatoire`),
  subject: yup.string().required(`Champs obligatoire`),
  message: yup
    .string()
    .max(500, `Maximum 500 charactères requis.`)
    .required(`Champs obligatoire`),
  consent: yup.bool().isTrue('Veuillez cocher cette case pour continuer.'),
});

// contact from initial values
export const initialValues = {
  lastname: '',
  firstname: '',
  email: '',
  phone: '',
  subject: 'Formation',
  message: '',
  consent: false,
};

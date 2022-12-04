import * as yup from 'yup';

export const validationScheme = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required(),
    desc: yup
        .string()
        .trim()
        .required(),
});

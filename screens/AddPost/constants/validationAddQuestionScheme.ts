import * as yup from 'yup';

export const validationAddQuestionScheme = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required(),
    url: yup.string().trim(),
    desc: yup.string().trim(),
});

import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email is invalid')
    .min(5, 'Email have min length is 5')
    .max(160, 'Email have max length is 160'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password have min length is 5')
    .max(160, 'Password have max length is 160'),
  confirm_password: yup
    .string()
    .required('Confirm Password is required')
    .min(6, 'Confirm Password have min length is 5')
    .max(160, 'Confirm Password have max length is 160')
    .oneOf([yup.ref('password')], 'Confirm Password is not match')
})

export type Schema = yup.InferType<typeof schema>

export const loginSchema = schema.omit(['confirm_password'])

export type LoginSchema = yup.InferType<typeof loginSchema>

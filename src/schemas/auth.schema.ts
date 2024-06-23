import { ZodType, z } from 'zod'

export type UserRegistrationProps = {
  type: string
  fullname: string
  email: string
  password: string
  confirmPassword: string
  otp: string
}

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .min(4, { message: 'Seu nome deve ter pelo menos 4 caracteres' }),
    email: z.string().email({ message: 'Formato de e-mail incorreto' }),
    password: z
      .string()
      .min(8, { message: 'Sua senha deve ter pelo menos 8 caracteres' })
      .max(64, {
        message: 'Sua senha não pode ter mais de 64 caracteres',
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'A senha deve conter apenas letras e números'
      ),
    confirmPassword: z.string(),
    otp: z.string().min(6, { message: 'Você deve inserir um código de 6 dígitos' }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type UserLoginProps = {
  email: string
  password: string
}

export type ChangePasswordProps = {
  password: string
  confirmPassword: string
}

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z.string().email({ message: 'Você não digitou um e-mail válido' }),
  password: z
    .string()
    .min(8, { message: 'Sua senha deve ter pelo menos 8 caracteres' })
    .max(64, {
      message: 'Sua senha não pode ter mais de 64 caracteres',
    }),
})

export const ChangePasswordSchema: ZodType<ChangePasswordProps> = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Sua senha deve ter pelo menos 8 caracteres' })
      .max(64, {
        message: 'Sua senha não pode ter mais de 64 caracteres',
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'A senha deve conter apenas letras e números'
      ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
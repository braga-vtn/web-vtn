import { useToast } from '@/components/ui/use-toast'
import { UserLoginProps, UserLoginSchema } from '@/schemas/auth.schema'
import { useSignIn } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useSignInForm = () => {
  const { isLoaded, setActive, signIn } = useSignIn()
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()
  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),
    mode: 'onChange',
  })
  const onHandleSubmit = methods.handleSubmit(
    async (values: UserLoginProps) => {
      if (!isLoaded) return

      try {

        setLoading(true)
        const authenticated = await signIn.create({
          identifier: values.email,
          password: values.password,
        })

        if (authenticated.status === 'complete') {
          await setActive({ session: authenticated.createdSessionId })
          toast({
            title: 'Você está de volta!',
            description: 'Sucesso ao entrar em sua conta. Fique a vontade!',
          })
          router.push('/dashboard')
        }
      } catch (error: any) {
        setLoading(false)
        toast({
          title: 'Algo deu Errado',
          description: 'E-mail/senha estão incorretos, tente novamente',
        })
      }
    }
  )

  return {
    methods,
    onHandleSubmit,
    loading,
  }
}
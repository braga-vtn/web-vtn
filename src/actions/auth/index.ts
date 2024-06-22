'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'

export const onCompleteUserRegistration = async (
  name: string,
  clerkId: string,
  email: string
) => {
  try {
    const registered = await client.user.create({
      data: {
        name,
        clerkId,
        email
      },
      select: {
        name: true,
        id: true,
        email: true
      },
    })

    if (registered) {
      return { status: 200, user: registered }
    }
  } catch (error) {
    return { status: 400 }
  }
}

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user) redirectToSignIn()
  else {
    try {
      const authenticated = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          name: true,
          id: true,
        },
      })
      if (authenticated) {
        return { status: 200, user: authenticated }
      }
    } catch (error) {
      return { status: 400 }
    }
  }
}
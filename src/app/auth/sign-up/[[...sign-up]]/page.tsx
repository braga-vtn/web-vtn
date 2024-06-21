import ButtonHandler from '@/components/forms/sign-up/button-handlers'
import SignUpFormProvider from '@/components/forms/sign-up/form-provider'
import HighLightBar from '@/components/forms/sign-up/highlight-bar'
import RegistrationFormStep from '@/components/forms/sign-up/registration-step'

import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col h-full gap-3 md:px-16 w-full">
        <SignUpFormProvider>
          <div className="flex flex-col gap-5">
            <RegistrationFormStep />
            <ButtonHandler />
            <HighLightBar />
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp
'use client';
import { Button } from '@/components/ui/button';
import { useAuthContextHook } from '@/context/use-auth-context';
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up';
import Link from 'next/link';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const ButtonHandler = () => {
  const { setCurrentStep, currentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP, onHandleSubmit, loading } = useSignUpForm();
  const { isDirty: isName } = getFieldState('fullname', formState);
  const { isDirty: isEmail } = getFieldState('email', formState);
  const { isDirty: isPassword } = getFieldState('password', formState);

  if (currentStep === 3) {
    return (
      <div className="w-full flex flex-col gap-3 items-center mt-5">
        <Button
          type="submit"
          variant={"gooeyLeft"}
          className="w-full"
          disabled={loading} // Disable button while loading
        >
          Criar Conta
        </Button>
        <p>
          já tem uma conta?{' '}
          <Link href="/auth/sign-in" className="font-bold">
            Entrar
          </Link>
        </p>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="w-full flex flex-col gap-3 items-center mt-5">
        <Button
          type="button"
          variant={"gooeyLeft"}
          className="w-full"
          onClick={
            isName && isEmail && isPassword
              ? () => onGenerateOTP(getValues('email'), getValues('password'), setCurrentStep)
              : undefined
          }
          disabled={!isName || !isEmail || !isPassword || loading} // Disable button if fields are not dirty or loading
        >
          Continuar
        </Button>
        <p>
          já tem uma conta?{' '}
          <Link href="/auth/sign-in" className="font-bold">
            Entrar
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3 items-center mt-5">
      <Button
        type="button"
        variant={"gooeyLeft"}
        className="w-full"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
        disabled={loading} // Disable button while loading
      >
        Continuar
      </Button>
      <p>
        já tem uma conta?{' '}
        <Link href="/auth/sign-in" className="font-bold">
          Entrar
        </Link>
      </p>
    </div>
  );
};

export default ButtonHandler;
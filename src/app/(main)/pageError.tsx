import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import React from 'react';

type Props = {
  srcReturn: string;
  textButtonReturn: string;
}

const PageError = (props: Props) => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center ">
      <div>
        <Avatar>
          <AvatarImage src="/vistune-dark-perfil.png" alt="avatar-error-404" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Alert className='w-[70vh] mt-3 mb-10'>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className='font-bold'>Erro 404</AlertTitle>
        <AlertDescription>
          Parece que você descobriu nosso arsenal de segredos obscuros... ou simplesmente caiu em uma página que não existe. De qualquer forma, recomendo fortemente que clique no botão abaixo... 👻
        </AlertDescription>
      </Alert>
      <Button
        onClick={() => window.location.href = props.srcReturn ? props.srcReturn : "/dashboard"}
      >
        {props.textButtonReturn ? props.textButtonReturn : "Voltar ao Menu"}
      </Button>
      <div className="mt-12">
      </div>
    </div>
  )
}

export default PageError;
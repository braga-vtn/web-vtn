import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'

type Props = {
  register: UseFormRegister<FieldValues>
  userType: 'owner' | 'student'
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Criar uma Conta</h2>
      <p className="text-iridium md:text-sm">
        Estamos felizes em ajudar a criar a experiência <br />
        perfeita para você! Selecione a opção que melhor descreve sua finalidade.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="Para o meu Negócio"
        text="Quero adaptar o meu negócio ao Novo Mundo!"
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="Apenas uso Pessoal"
        text="Pretendo testar os modelos de IA existentes."
      />
    </>
  )
}

export default TypeSelectionForm
"use client"
import React from 'react';
import PageError from '../../../pageError';

type Props = {}

const Page = (props: Props) => {

  return (
    <PageError srcReturn={"/workflows"} textButtonReturn={"Voltar para o Flow"} />
  );
}

export default Page;
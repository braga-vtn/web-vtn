import React from 'react'
import Workflows from './_components'
import { Separator } from '@/components/ui/separator'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="hidden flex-col md:flex">
      <div className="ml-10 flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">
          Flows
        </h2>
      </div>
      <Separator />
      <div className="relative flex flex-col gap-4 p-6 text-muted-foreground">
        <p className=" ml-2">Aqui o limite é sua imaginação! Personalize modelos e automações com um simples arrastar e soltar.</p>
        <Workflows />
      </div>
    </div>
  )
}

export default Page

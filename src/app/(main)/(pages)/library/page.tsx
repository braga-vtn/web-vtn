import { Separator } from '@/components/ui/separator'
import React from 'react'
import { LibraryHeader } from './_components/header'
import { CardNodes } from './_components/nodes'
import { CardBlock } from './_components/block'
import { CardOne } from './_components/one'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="hidden flex-col md:flex">
      <div className=" ml-10 flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Biblioteca de Ferramentas</h2>
      </div>
      <Separator />
      <LibraryHeader />
      <div className="flex flex-col items-center mt-10 ">
        <CardNodes />
        <CardBlock />
        <CardOne />
      </div>
    </div>
  )
}

export default Page

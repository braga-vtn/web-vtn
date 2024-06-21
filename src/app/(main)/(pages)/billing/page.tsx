import React from 'react'
import { Separator } from '@/components/ui/separator'
import { PlanOptions } from './_components/plan-options'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const Billing = async (props: Props) => {
 
  return (
    <div className="hidden flex-col md:flex">
      <div className=" ml-10 flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Assinatura</h2>
      </div>
      <Separator />
      <PlanOptions />
    </div>
  )
}

export default Billing

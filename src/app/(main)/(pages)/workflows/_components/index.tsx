'use server'

import React from 'react'
import { onGetWorkflows } from '../_actions/workflow-connections'
import CardModels from './models/cardModels'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ComingSoon from './models/comingSoon'

type Props = {}

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows()

  return (
    <div className="">
      <Tabs defaultValue="model" className="space-y-4 ml-2 mt-4">
        <TabsList className='bg-neutral-100 dark:bg-neutral-900'>
          <TabsTrigger value="model">
            Inteligência Artificial
          </TabsTrigger>
          <TabsTrigger value="automation" >
            Automação
          </TabsTrigger>
        </TabsList>
        <TabsContent value="model" className="space-y-4">
          <div className="flex flex-col items-center mt-10 ">
            {workflows?.length ? (
              workflows.map((flow) => (
                <CardModels
                  key={flow.id}
                  {...flow}
                />
              ))
            ) : (
              <div className="mt-28 flex text-muted-foreground items-center justify-center">
                Nenhum flow encontrado
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="automation" className="space-y-4">
          <ComingSoon />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Workflows

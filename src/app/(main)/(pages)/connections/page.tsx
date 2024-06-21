import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/connection-card'
import { Separator } from '@/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const Connections = async (props: Props) => {

  return (
    <div className="hidden flex-col md:flex">
      <div className="ml-10 flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Integrações</h2>
      </div>
      <Separator />
      <div className="relative flex flex-col gap-4 p-6 text-muted-foreground">
        <p className="mb-4 ml-2">Conecte a Vistune com seus aplicativos! Nossos modelos irão captar todos os dados relevantes de cada app conectado.</p>
        <Tabs defaultValue="all" className="space-y-4 ml-2">
          <TabsList className='bg-neutral-100 dark:bg-neutral-900'>
            <TabsTrigger value="all">
              Todos Aplicativos
            </TabsTrigger>
            <TabsTrigger value="cleo">
              Cleo
            </TabsTrigger>
            <TabsTrigger value="vision">
              Vision
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-2">
              {CONNECTIONS.map((connection) => (
                <ConnectionCard
                  key={connection.title}
                  description={connection.description}
                  title={connection.title}
                  model={connection.model}
                  icon={connection.image}
                  type={connection.title}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cleo" className="space-y-4">
            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-2">
              {CONNECTIONS.filter(connection => connection.model === 'Cleo'
              ).map((connection) => (
                <ConnectionCard
                  key={connection.title}
                  description={connection.description}
                  title={connection.title}
                  model={connection.model}
                  icon={connection.image}
                  type={connection.title}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="vision" className="space-y-4">
            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-2">
              {CONNECTIONS.filter(connection => connection.model === 'Vision').map((connection) => (
                <ConnectionCard
                  key={connection.title}
                  description={connection.description}
                  title={connection.title}
                  model={connection.model}
                  icon={connection.image}
                  type={connection.title}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Connections

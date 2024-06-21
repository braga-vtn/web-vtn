"use client"

import React from 'react'
import { Separator } from '@/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import TrainingCard from './_components/training-card'
import { status, trainingList } from './data'
import { AddNewTraining } from './_components/add-new-training'
import { DataTableFacetedFilter } from './_components/filter-model'
import { toast } from 'sonner'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

interface TrainingData {
  id: string;
  title: string;
  model: string;
  url: string;
  date: string;
  type: string;
  similarity: number;
  utilization: number;
  parameters: number;
}

const Connections = (props: Props) => {
  const [trainings, setTrainings] = React.useState(trainingList);
  const addTraining = (newTraining: TrainingData) => {
    setTrainings(prevTrainings => [...prevTrainings, newTraining]);
  };
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>([]);

  const handleDeleteTraining = (id: string) => {
    setTrainings(prevTrainings => prevTrainings.filter(training => training.id !== id));
    toast("Treinamento excluído com sucesso!", {
      description: "Em alguns minutos todos os parâmetros serão deletados e os modelos estarão atualizados.",
    });
  };

  return (
    <div className="hidden flex-col md:flex">
      <div className="ml-10 flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Treinamento</h2>
      </div>
      <Separator />
      <div className="relative flex flex-col gap-4 p-6 text-muted-foreground">
        <div className='flex justify-between' >
          <p className="mb-4 ml-2">
            Você pode aprimorar os nossos modelos de IA! Realize treinamentos para elevar sua experiência na Vistune a um novo patamar.
          </p>
          <AddNewTraining addTraining={addTraining} />
        </div>
        <Tabs defaultValue="all" className="space-y-4 ml-2">
          <div className='flex items-center'>
            <TabsList className='bg-neutral-100 dark:bg-neutral-900'>
              <TabsTrigger value="all">
                Todos
              </TabsTrigger>
              <TabsTrigger value="text">
                Texto
              </TabsTrigger>
              <TabsTrigger value="video">
                Vídeo
              </TabsTrigger>
              <TabsTrigger value="url">
                Url
              </TabsTrigger>
              <TabsTrigger value="audio">
                Áudio
              </TabsTrigger>
              <TabsTrigger value="file">
                Arquivo
              </TabsTrigger>
              <TabsTrigger value="group">
                Conjunto
              </TabsTrigger>
            </TabsList>
            <DataTableFacetedFilter
              data={trainingList}
              title="Modelos"
              options={status}
              filterCallback={(selectedOptions) => {
                setSelectedStatus(selectedOptions);
              }}
            />
          </div>
          <TabsContent value="all" className="space-y-4">
            <div className="grid lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 gap-2">
              {trainings
                .filter(training => selectedStatus.length === 0 || selectedStatus.includes(training.model))
                .map((training) => (
                  <TrainingCard
                    key={training.id}
                    id={training.id}
                    title={training.title}
                    model={training.model}
                    url={training.url}
                    date={training.date}
                    type={training.type}
                    similarity={training.similarity}
                    utilization={training.utilization}
                    parameters={training.parameters}
                    onDelete={handleDeleteTraining}
                  />
                ))
              }
            </div>
          </TabsContent>
          <TabsContent value="text" className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {trainings
                .filter(training => training.type === 'text')
                .filter(training => selectedStatus.length === 0 || selectedStatus.includes(training.model))
                .map((training) => (
                  <TrainingCard
                    key={training.id}
                    id={training.id}
                    title={training.title}
                    model={training.model}
                    url={training.url}
                    date={training.date}
                    type={training.type}
                    similarity={training.similarity}
                    utilization={training.utilization}
                    parameters={training.parameters}
                    onDelete={handleDeleteTraining}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="video" className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {trainings
                .filter(training => training.type === 'video')
                .filter(training => selectedStatus.length === 0 || selectedStatus.includes(training.model))
                .map((training) => (
                  <TrainingCard
                    key={training.id}
                    id={training.id}
                    title={training.title}
                    model={training.model}
                    url={training.url}
                    date={training.date}
                    type={training.type}
                    similarity={training.similarity}
                    utilization={training.utilization}
                    parameters={training.parameters}
                    onDelete={handleDeleteTraining}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="url" className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {trainings
                .filter(training => training.type === 'url')
                .filter(training => selectedStatus.length === 0 || selectedStatus.includes(training.model))
                .map((training) => (
                  <TrainingCard
                    key={training.id}
                    id={training.id}
                    title={training.title}
                    model={training.model}
                    url={training.url}
                    date={training.date}
                    type={training.type}
                    similarity={training.similarity}
                    utilization={training.utilization}
                    parameters={training.parameters}
                    onDelete={handleDeleteTraining}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="audio" className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {trainings
                .filter(training => training.type === 'audio')
                .filter(training => selectedStatus.length === 0 || selectedStatus.includes(training.model))
                .map((training) => (
                  <TrainingCard
                    key={training.id}
                    id={training.id}
                    title={training.title}
                    model={training.model}
                    url={training.url}
                    date={training.date}
                    type={training.type}
                    similarity={training.similarity}
                    utilization={training.utilization}
                    parameters={training.parameters}
                    onDelete={handleDeleteTraining}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="file" className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {trainings
                .filter(training => training.type === 'file')
                .filter(training => selectedStatus.length === 0 || selectedStatus.includes(training.model))
                .map((training) => (
                  <TrainingCard
                    key={training.id}
                    id={training.id}
                    title={training.title}
                    model={training.model}
                    url={training.url}
                    date={training.date}
                    type={training.type}
                    similarity={training.similarity}
                    utilization={training.utilization}
                    parameters={training.parameters}
                    onDelete={handleDeleteTraining}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="group" className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {trainings
                .filter(training => training.type === 'group')
                .filter(training => selectedStatus.length === 0 || selectedStatus.includes(training.model))
                .map((training) => (
                  <TrainingCard
                    key={training.id}
                    id={training.id}
                    title={training.title}
                    model={training.model}
                    url={training.url}
                    date={training.date}
                    type={training.type}
                    similarity={training.similarity}
                    utilization={training.utilization}
                    parameters={training.parameters}
                    onDelete={handleDeleteTraining}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div >
  )
}

export default Connections

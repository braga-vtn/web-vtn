"use client"

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';
import { useState } from 'react';
import { AddNewItem } from '@/app/(main)/(pages)/settings/(pages)/team/_components/add-new-member';
import SortableLinks from '@/app/(main)/(pages)/settings/(pages)/team/_components/team-members';
import { Separator } from '@/components/ui/separator';

interface Item {
  name: string;
  avatar: string;
  permissions: string[];
  email: string;
  id: number;
}

const simulationData = (
  [
    {
      id: 1693653637084,
      name: 'Braga',
      avatar: "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+%C3%A0(s)+16.04.19_0e0cf0ae.jpg",
      permissions: ['Dashboard', 'Flow', 'Treinamento', 'Bate-papo', 'Playground', 'Biblioteca de Ferramentas',
        'Assinatura', 'Configurações', 'Logs'],
      email: "braga@vistune.ai"
    },
    {
      id: 16936242424,
      name: 'Cleyton',
      avatar: "https://pbs.twimg.com/media/GFatiCPWEAA4iqt.jpg",
      permissions: ['Dashboard', 'Flow', 'Treinamento', 'Bate-papo'],
      email: "cleyton@vistune.ai"
    },
  ]
)

const Team = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [items, setItems] = useState<Item[]>(
    simulationData
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  }

  function handleDelete(idToDelete: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  }

  function addNewItem(newItem: string, newEmail: string, newPermissions: string[], currentUploadedFiles: string) {
    let newId = Math.random();
    setItems(prevItems => [...prevItems, {
      name: newItem,
      id: newId,
      avatar: currentUploadedFiles,
      permissions: newPermissions,
      email: newEmail,
    }]);
  }

  return (
    <div className="space-y-6">
      <div>
        <div className='flex justify-between' >
          <h3 className="text-lg font-medium">
            Equipe
          </h3>
          <AddNewItem addNewItem={addNewItem} />
        </div>
        <p className="text-sm text-muted-foreground">
          Gerencie as pessoas que devem ter acesso a sua conta Vistune.
        </p>
      </div>
      <Separator />
      <div className='grid gap-4 '>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableLinks key={item.id} id={item} onDelete={handleDelete} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Team;
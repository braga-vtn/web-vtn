import React, { FC, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Avatar, AvatarFallback, AvatarImage } from '../../../../../../../components/ui/avatar';
import { Pen, Trash } from 'lucide-react';
import { Badge } from '../../../../../../../components/ui/badge';
import { EditNewItem } from './edit-member';
import { DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogExit, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { SonnerDeleteMember } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';

interface Item {
    id: number;
    avatar: string;
    name: string;
    email: string;
    permissions: string[];
}

interface SortableLinkCardProps {
    id: Item;
    onDelete: (id: number) => void;
}

const SortableLinks: FC<SortableLinkCardProps> = ({ id, onDelete }) => {
    const [item, setItem] = React.useState<Item>(id);

    useEffect(() => {
        setItem(id);
    }, [id]);

    const handleItemUpdate = (itemName: string, itemEmail: string, newPermissions: string[], itemAvatar2: string) => {
        const updatedItem = {
            id: item.id,
            name: itemName,
            email: itemEmail,
            permissions: newPermissions,
            avatar: itemAvatar2,
        };
        setItem(updatedItem);
    };

    const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);

    const uniqueId = id.id;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: uniqueId });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const handleButtonClick = () => {
        onDelete(uniqueId);
    };

    const isCursorGrabbing = attributes['aria-pressed'];

    return (
        <div ref={setNodeRef} style={style} key={item.id}>
            <Card className="p-4 relative group bg-neutral-100 dark:bg-neutral-900">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <Avatar>
                            <AvatarImage
                                src={item.avatar.trim() === '' ? "/default-1.png" : item.avatar}
                                alt="avatar-team"
                            />
                            <AvatarFallback>{item.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className='font-bold'>{item.name}</div>
                            <div className='text-zinc-500 text-sm'>{item.email.toLowerCase()}</div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-4 mt-7">
                        <EditNewItem
                            item={item}
                            onClose={() => setIsEditDialogOpen(false)}
                            editNewItem={handleItemUpdate}
                        >
                            <DialogTrigger asChild>
                                <button className="hidden group-hover:block">
                                    <Pen className='h-3 w-3' />
                                </button>
                            </DialogTrigger>
                        </EditNewItem>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <button className="hidden group-hover:block">
                                                <Trash className='h-3 w-3' />
                                            </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Deseja deletar esse membro?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Automaticamente esse membro será impossibilitado de acessar essa conta
                                                    e todas as dependências.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel asChild>
                                                    <Button
                                                        variant={"gooeyLeft2"}
                                                        className='border'
                                                    >
                                                        Cancelar
                                                    </Button>
                                                </AlertDialogCancel>
                                                <AlertDialogExit onClick={handleButtonClick}>
                                                    <SonnerDeleteMember />
                                                </AlertDialogExit>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                        <button {...attributes} {...listeners} className={`${isCursorGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`} aria-describedby={`DndContext-${uniqueId}`}>
                            <svg viewBox="0 0 20 20" width="15">
                                <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"
                                    fill="currentColor">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {item.permissions.slice(0, 5).map((permission, index) => (
                        <Badge key={index} variant="secondary2" className="mt-3">
                            {permission}
                        </Badge>
                    ))}
                    {item.permissions.length > 5 && (
                        <Badge key="more" variant="secondary" className="mt-3">
                            ...
                        </Badge>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default SortableLinks;
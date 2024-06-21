import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pen, Plus } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';
import { FancyMultiSelect } from './select-function';
import ImageUpload from '@/components/ui/input-file';
import { UploadAvatar } from '@/components/global/upload-avatar';
import { UploadedFile } from '@/lib/types';
import Image from 'next/image';

interface Item {
  name: string;
  email: string;
  permissions: string[];
  avatar: string;
}

interface EditNewItemProps {
  item: Item;
  onClose: () => void;
  editNewItem: (itemName: string, itemEmail: string, newPermissions: string[], avatar: string) => void;
  children: React.ReactNode;
}

type Framework = {
  value: string;
  label: string;
};

export function EditNewItem({ item, onClose, editNewItem, children }: EditNewItemProps) {
  const [itemName, setItemName] = React.useState<string>(item.name);
  const [itemEmail, setItemEmail] = React.useState<string>(item.email);
  const [itemAvatar, setItemAvatar] = React.useState<string>(item.avatar);
  const [currentUploadedFiles, setCurrentUploadedFiles] = React.useState<UploadedFile[]>([]);
  const [selectedPermissions, setSelectedPermissions] = React.useState<Framework[]>(
    item.permissions.map(permission => ({ value: permission, label: permission }))
  );

  const handleSubmit = () => {
    if (itemName.trim() === "" || itemEmail.trim() === "" || !itemEmail.includes('@') || !itemEmail.includes('.')) {
      return;
    }
    const itemAvatar2 = currentUploadedFiles.length > 0 ? currentUploadedFiles[0].url : itemAvatar;
    const permissions = selectedPermissions.map(permission => permission.value);
    editNewItem(itemName, itemEmail, permissions, itemAvatar2);
    setItemAvatar(itemAvatar2)
    onClose();
  };

  const handleSelectedChange = (selected: Framework[]) => {
    setSelectedPermissions(selected);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    setItemAvatar("")
  };

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-start">
          <DialogTitle>Edite o Membro</DialogTitle>
          <DialogDescription>
            Edite os detalhes desse colaborador
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-2">
          {itemAvatar ?
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <div>
                    <Image
                      src={itemAvatar}
                      alt={'avatar-file'}
                      fill
                      sizes="(min-width: 340px) 340px, 100vw"
                      loading="lazy"
                      className="rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
              <Button variant="gooeyLeft2" className="justify-items-center mt-4 border" onClick={handleEditClick}>
                Mudar Foto
              </Button>
            </div> :
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
              <UploadAvatar setUploadedFiles={setCurrentUploadedFiles} />
            </div>
          }
          <Label htmlFor="name">Nome</Label>
          <Input id="name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={itemEmail} type="email" onChange={(e) => setItemEmail(e.target.value)} />
          <Label htmlFor="permissions">Permissões</Label>
          <FancyMultiSelect
            initialSelected={selectedPermissions}
            onSelectedChange={handleSelectedChange}
          />
          {
            (!itemName ||
              itemName.length <= 4 ||
              !itemEmail ||
              !itemEmail.includes('@') ||
              !itemEmail.includes('.') ||
              itemEmail.length <= 5 ||
              selectedPermissions.map(permission => permission.value).length == 0) == true ?
              <Button
              variant={"gooeyLeft"}
                disabled={true}
                onClick={() => {
                  handleSubmit();
                  toast("Membro atualizado com sucesso!", {
                    description: "As informações do membro foram atualizadas.",
                  });
                }}
                className="w-full">
                Atualizar Membro
              </Button>
              :
              <DialogClose>
                <Button
                variant={"gooeyLeft"}
                  onClick={() => {
                    handleSubmit();
                    toast("Membro atualizado com sucesso!", {
                      description: "As informações do membro foram atualizadas.",
                    });
                  }}
                  className="w-full">
                  Atualizar Membro
                </Button>
              </DialogClose>
          }
        </div>
      </DialogContent>
    </Dialog >
  )
}
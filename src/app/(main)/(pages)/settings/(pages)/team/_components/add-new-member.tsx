import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import React from 'react'
import { Label } from "../../../../../../../components/ui/label"
import { FancyMultiSelect } from "@/app/(main)/(pages)/settings/(pages)/team/_components/select-function"
import { toast } from "sonner"
import { UploadAvatar } from "@/components/global/upload-avatar"
import { UploadedFile } from "@/lib/types"
import { ScrollArea, ScrollArea2 } from "@/components/ui/scroll-area"

// Define o tipo para as props
interface AddNewItemProps {
    addNewItem: (itemName: string, itemEmail: string, newPermissions: string[], currentUploadedFiles: string) => void;
}

type Framework = {
    value: string;
    label: string;
};

export function AddNewItem({ addNewItem }: AddNewItemProps) {
    const [itemName, setItemName] = React.useState("");
    const [itemEmail, setItemEmail] = React.useState("");
    const [currentUploadedFiles, setCurrentUploadedFiles] = React.useState<UploadedFile[]>([]);
    const [selectedPermissions, setSelectedPermissions] = React.useState<Framework[]>([]);

    const handleSelectedChange = (selected: Framework[]) => {
        setSelectedPermissions(selected);
    };

    const handleSubmit = () => {
        if (itemName.trim() === "" || itemEmail.trim() === "") {
            return;
        }

        const permissions = selectedPermissions.map(permission => permission.value);
        const avatarUrl = currentUploadedFiles.length > 0 ? currentUploadedFiles[0].url : "";

        addNewItem(itemName, itemEmail, permissions, avatarUrl);

        setItemName("");
        setItemEmail("");
        setSelectedPermissions([]);
        setCurrentUploadedFiles([]);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="gooeyLeft" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <ScrollArea2 className="h-full w-full ">
                    <DialogHeader className="text-start">
                        <DialogTitle>Novo Membro</DialogTitle>
                        <DialogDescription>
                            Adicione um novo colaborador para essa conta.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 pt-2 mb-5">
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                            <UploadAvatar setUploadedFiles={setCurrentUploadedFiles} />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" value={itemEmail} type="email" onChange={(e) => setItemEmail(e.target.value)} />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="permissions">Permissões</Label>
                            <FancyMultiSelect onSelectedChange={handleSelectedChange} />
                        </div>
                    </div>
                    <DialogClose className="w-full" >
                        <Button
                        variant={"gooeyLeft"}
                            disabled={
                                !itemName ||
                                itemName.length <= 4 ||
                                !itemEmail ||
                                !itemEmail.includes('@') ||
                                !itemEmail.includes('.') ||
                                itemEmail.length <= 5 ||
                                selectedPermissions.map(permission => permission.value).length == 0
                            }
                            onClick={() => {
                                handleSubmit();
                                toast("Novo membro adicionado!", {
                                    description: "É necessário que esse usuário tenha uma conta na Vistune com o email informado.",
                                });
                            }}
                            className="w-full">
                            Adicionar Membro
                        </Button>
                    </DialogClose>
                </ScrollArea2>

            </DialogContent>
        </Dialog>
    )
}
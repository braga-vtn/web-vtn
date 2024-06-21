import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { SonnerEditConfirm } from "../ui/sonner";

type DialogEditChatProps = {
  message: string;
  messageId: number;
  onSave: (messageId: number, newMessage: string) => void;  // Função de callback para salvar a mensagem editada
};

const DialogEditChat: React.FC<DialogEditChatProps> = ({ message, messageId, onSave }) => {
  const [editedMessage, setEditedMessage] = useState(message);

  useEffect(() => {
    setEditedMessage(message);
  }, [message]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="slim" variant="gooeyLeftDark" className="h-8 w-8">
          <Pen className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Mensagem</DialogTitle>
          <DialogDescription>
            Para editar a mensagem selecionada, simplesmente insira o novo texto e salve a alteração!
          </DialogDescription>
        </DialogHeader>
        <Textarea
          value={editedMessage}
          onChange={(e) => setEditedMessage(e.target.value)}
          placeholder="Digite a nova mensagem aqui..."
        />
        <DialogFooter className="sm:justify-end">
          <DialogTrigger>
          <SonnerEditConfirm messageId={messageId} editedMessage={editedMessage} onSave={onSave}/>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogEditChat;
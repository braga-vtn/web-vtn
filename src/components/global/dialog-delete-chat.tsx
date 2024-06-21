import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { SonnerDeleteChat } from "../ui/sonner";

type DialogDeleteChatProps = {
  message: string;
  messageId: number;
  onSave: (messageId: number, newMessage: string) => void;
};

const DialogDeleteChat: React.FC<DialogDeleteChatProps> = ({ messageId, onSave }) => {
  const handleDelete = () => {
    onSave(messageId, "Essa mensagem foi apagada");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="slim" variant="gooeyLeftDark" className="h-8 w-8">
          <Trash2 className="h-3 w-3" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja deletar a mensagem?</AlertDialogTitle>
          <AlertDialogDescription>
            Este processo é irreversível e pode ser inviável se o aplicativo de origem não suportar exclusões.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button type="button" variant="gooeyLeft2">
              Cancelar
            </Button>
          </AlertDialogCancel>
          <SonnerDeleteChat onDelete={handleDelete} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogDeleteChat;
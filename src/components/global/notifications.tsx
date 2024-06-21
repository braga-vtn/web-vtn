"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Bell, Cable, PartyPopper, User2, X } from "lucide-react"
import { Separator } from "../ui/separator"
import { notifications as initialNotifications } from "../data/notifications"
import { useCallback, useState } from "react"
import { formatRelative } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ScrollArea } from "../ui/scroll-area"

interface Notification {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'newAccount' | 'newUser' | 'newIntegrations';
}

function validateNotifications(data: any): Notification[] {
  return data.filter((item: any) => ['newAccount', 'newUser', 'newIntegrations'].includes(item.type)).map((item: any) => ({
    id: item.id,
    title: item.title,
    date: item.date,
    description: item.description,
    type: item.type as 'newAccount' | 'newUser' | 'newIntegrations'
  }));
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(validateNotifications(initialNotifications));

  const removeNotification = useCallback((id: string) => {
    setNotifications(notifications => notifications.filter(notification => notification.id !== id));
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="gooeyLeft2" size="icon3" className="relative">
          <Bell className="w-5 h-5 dark:stroke-neutral-700 stroke-neutral-300" />
          {notifications.length > 0 && (
            <span className="absolute top-1.5 right-1.5 flex items-center justify-center h-1 w-1 text-xs font-bold text-current rounded-full bg-neutral-950 dark:bg-neutral-50">
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notificações</SheetTitle>
          <SheetDescription>
            Assuntos importantes a equipe da Vistune avisa por aqui também!
          </SheetDescription>
          <Separator />
          <ScrollArea className="h-[calc(100vh-100px)] mt-3">
            <div className="p-3 mb-2">
              {notifications.map((notification: Notification) => (
                <div key={notification.id} className="flex items-center mb-3 justify-between border space-x-4 rounded-md p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-accent-foreground bg-neutral-100 dark:bg-neutral-900">
                  {
                    notification.type == 'newAccount' ? <PartyPopper className="h-5 w-5" /> :
                      notification.type == 'newUser' ? <User2 className="h-5 w-5" /> : <Cable className="h-5 w-5" />
                  }
                  <div className="space-y-1 flex-grow">
                    <p className="text-sm font-medium leading-none">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatRelative(new Date(notification.date), new Date(), {
                        locale: ptBR
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                  <Button variant="invisible" size="icon2" onClick={() => removeNotification(notification.id)}>
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  )
}
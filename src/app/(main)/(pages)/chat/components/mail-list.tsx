'use client'

import { ComponentProps, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMail } from "../use-mail"
import { formatRelative } from "date-fns"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import TruncateComponent from "@/components/global/truncate-text"
import { ptBR } from "date-fns/locale"
import { Mail } from "../data"

interface MailListProps {
  items: Mail[] | null;
  selected: number | null;
  tab: string;
  onUpdateSelectMail: (mailId: number) => void;
}

export function MailList({ items, selected, tab, onUpdateSelectMail }: MailListProps) {
  const [selectedMailId, setSelectedMailId] = useState<number | null>(() => {
    if (items && items.length > 0 && !selected && tab == 'all') {
      onUpdateSelectMail(items[0].id);
    }

    const result = (tab == 'all' ? items && items.length > 0 ? selected ? selected : items[0].id : null : null);

    return result;
  });

  const handleSwitchChange = (id: number) => {
    onUpdateSelectMail(id);
    setSelectedMailId(id);
  };

  return (
    <ScrollArea className="h-[calc(100vh-220px)]">
      {!items ? null :
        <div className="flex flex-col gap-2 p-4 pt-0 mt-4">
          {items.map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-neutral-200 hover:dark:bg-neutral-800",
                selectedMailId === item.id && "bg-neutral-200 dark:bg-neutral-800"
              )}
              onClick={() => handleSwitchChange(item.id)}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  {item.name ?
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage alt={item.name} src={item.avatar ? item.avatar : 'default-1.png'} />
                      </Avatar>
                      <div className="font-semibold">
                        {item.name}
                      </div>
                      {!item.read && selectedMailId !== item.id && (
                        <span className="flex h-2 w-2 rounded-full bg-green-500" />
                      )}
                      {item.cleo && (
                        <span className="flex h-2 w-2 rounded-full bg-red-600" />
                      )}
                      <Avatar className="h-4 w-4">
                        <AvatarImage
                          alt={item.name}
                          src={
                            item.channel == 'whatsapp' ? '/channel-whatsapp.png' :
                              item.channel == 'telegram' ? '/channel-telegram.png' :
                                item.channel == 'instagram' ? '/channel-instagram.png' :
                                  item.channel == 'gmail' ? '/channel-gmail.png' :
                                    '/'
                          }
                          className="h-full w-full object-cover"
                        />
                      </Avatar>
                    </div>
                    :
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage alt={item.name} src={item.avatar ? item.avatar : 'default-1.png'} />
                      </Avatar>
                      <div className="font-semibold">
                        {item.phone}
                      </div>
                      <Avatar className="h-4 w-4">
                        <AvatarImage
                          alt={item.name}
                          src={
                            item.channel == 'whatsapp' ? '/channel-whatsapp.png' :
                              item.channel == 'telegram' ? '/channel-telegram.png' :
                                item.channel == 'instagram' ? '/channel-instagram.png' :
                                  item.channel == 'gmail' ? '/channel-gmail.png' :
                                    '/'
                          }
                          className="h-full w-full object-cover"
                        />
                      </Avatar>
                      {!item.read && selectedMailId !== item.id && (
                        <span className="flex h-2 w-2 rounded-full bg-green-500" />
                      )}
                      {item.cleo && (
                        <span className="flex h-2 w-2 rounded-full bg-red-500" />
                      )}
                    </div>
                  }
                  <div
                    className={cn(
                      "ml-auto text-xs",
                      selectedMailId === item.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {formatRelative(new Date(item.date), new Date(), {
                      locale: ptBR
                    })}
                  </div>
                </div>
                <div className="text-xs font-medium">
                  {item.subject}
                </div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                <TruncateComponent item={{ subject: item.text }} />
              </div>
              {item.labels.length ? (
                <div className="flex items-center gap-2">
                  {item.labels.map((label) => (
                    <Badge className="bg-neutral-200 dark:bg-neutral-800" key={label} variant={getBadgeVariantFromLabel(label)}>
                      {label}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </button>
          ))}
        </div>
      }
    </ScrollArea >
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}

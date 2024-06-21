"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Search,
} from "lucide-react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useMail } from "../use-mail"
import { MailList } from "./mail-list"
import { MailDisplay } from "./mail-display"
import { Mail as MailVar, status } from "../data"
import { DataTableFacetedFilter } from "./filter-chat"

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: MailVar[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Mail({
  mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false
}: MailProps) {
  const [mailState, setMailState] = useMail();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [position, setPosition] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>([]);

  const handleReportMail = (mailId: number) => {
    const updatedMails = mailState.mails.map(m =>
      m.id === mailId ? { ...m, report: true } : m
    );
    setMailState({ ...mailState, mails: updatedMails });
  };

  const handleToFileMail = (mailId: number) => {
    const updatedMails = mailState.mails.map(m =>
      m.id === mailId ? { ...m, archive: true } : m
    );
    setMailState({ ...mailState, mails: updatedMails });
  };

  const handleUnarchiveMail = (mailId: number) => {
    const updatedMails = mailState.mails.map(m =>
      m.id === mailId ? { ...m, archive: false } : m
    );

    setMailState({ ...mailState, mails: updatedMails });
  };

  const handleUpdateSelectMail = (mailId: number) => {
    setMailState(prevState => {
      const updatedMails = prevState.mails.map(mail =>
        mail.id === mailId ? { ...mail, read: true } : mail
      );

      return {
        ...prevState,
        selected: mailId,
        mails: updatedMails
      };
    });
  };

  const handleInstructionMail = (mailId: number) => {
    const updatedMails = mailState.mails.map(m =>
      m.id === mailId ? { ...m, manager: false } : m
    );
    setMailState({ ...mailState, mails: updatedMails });
  };

  const handleStatusCleoMail = (mailId: number, checked: boolean) => {
    const updatedMails = mailState.mails.map(m =>
      m.id === mailId ? { ...m, cleo: checked } : m
    );
    setMailState({ ...mailState, mails: updatedMails });
  };

  const filteredMails = mailState.mails.filter(mail => {
    const matchesStatus = selectedStatus.length === 0 ||
      (selectedStatus.includes('Gerente') && mail.manager) ||
      (selectedStatus.includes('Pausados') && mail.cleo) ||
      (selectedStatus.includes('Arquivados') && mail.archive);

    const matchesSearch = mail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mail.phone.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  // const sortedMails = filteredMails.sort((a, b) => b.read === a.read ? 0 : a.read ? 1 : -1);
  const sortedMails = filteredMails;

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full items-stretch bg-neutral-100 dark:bg-neutral-900"
      >
        <ResizablePanel defaultSize={30} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2 mt-1 mb-1 focus:outline-none focus-visible:none disabled:opacity-75" >
              <h1 className="text-xl font-bold mb-1">Bate Papo</h1>
              <DataTableFacetedFilter
                data={mails}
                title=""
                options={status}
                filterCallback={(selectedOptions) => {
                  setSelectedStatus(selectedOptions);
                }}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                  <DropdownMenuLabel>Filtro</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="Gerente">Gerente</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Pausados">Pausados</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Arquivados">Arquivados</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <TabsList className="ml-auto bg-neutral-200 dark:bg-neutral-800">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Todos
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Não lido
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className="p-4">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Procurar..."
                    className="pl-8 focus:outline-none focus-visible:none disabled:opacity-75"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <MailList tab="all" selected={mailState?.selected} items={selectedStatus.includes('Arquivados') || selectedStatus.includes('Gerente') || selectedStatus.includes('Pausados') ? sortedMails : sortedMails.filter(item => !item.archive)} onUpdateSelectMail={handleUpdateSelectMail} />
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <MailList tab="unread" selected={mailState?.selected} items={filteredMails.filter(item => !item.read)} onUpdateSelectMail={handleUpdateSelectMail} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          <MailDisplay
            mail={mailState.mails.find((item) => item.id === mailState.selected) || null}
            onReportMail={handleReportMail}
            onToFileMail={handleToFileMail}
            onUnarchiveMail={handleUnarchiveMail}
            onInstructionMail={handleInstructionMail}
            onStatusCleoMail={handleStatusCleoMail}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}

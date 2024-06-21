"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, addHours, endOfDay, format, isAfter, nextSaturday, subDays, subMonths } from "date-fns";
import { DateRange } from "react-day-picker";
import { ptBR } from 'date-fns/locale';
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface CalendarDashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  onDateChange: (range: DateRange) => void;
}

export function CalendarDashboard({
  className,
  onDateChange,
}: CalendarDashboardProps) {
  const today = React.useMemo(() => new Date(), []);
  const [date, setDate] = React.useState<DateRange>({ from: subDays(today, 6), to: today });
  const [visibleMonth, setVisibleMonth] = React.useState(date?.from || today);

  React.useEffect(() => {
    setVisibleMonth(date?.from || today);
  }, [date, today]);

  const handleSelectRange = (range: DateRange | undefined) => {
    if (range) {
      setDate(range);
      onDateChange(range);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "w-[260px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y", { locale: ptBR })} -
                {format(date.to, "LLL dd, y", { locale: ptBR })}
              </>
            ) : (
              format(date.from, "LLL dd, y", { locale: ptBR })
            )
          ) : (
            <span>Escolha uma data</span>

          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto p-0">
        <div className="flex flex-col gap-2 border-r px-2 py-4">
          <div className="px-4 text-sm font-medium">Filtros Padrão</div>
          <div className="grid min-w-[150px] gap-1">
            <Button
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => {
                const today = new Date();
                const range = { from: today, to: today };
                setDate(range);
                onDateChange(range);
              }}
            >
              Hoje
            </Button>
            <Button
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => {
                const today = new Date();
                const range = { from: subDays(today, 6), to: today };
                setDate(range);
                onDateChange(range);
              }}
            >
              Últimos 7 dias
            </Button>
            <Button
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => {
                const today = new Date();
                const range = { from: subDays(today, 13), to: today };
                setDate(range);
                onDateChange(range);
              }}
            >
              Últimos 14 dias
            </Button>
            <Button
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => {
                const today = new Date();
                const range = { from: subDays(today, 29), to: today };
                setDate(range);
                onDateChange(range);
              }}
            >
              Últimos 30 dias
            </Button>
            <Button
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => {
                const today = new Date();
                const range = { from: subMonths(today, 3), to: today };
                setDate(range);
                onDateChange(range);
              }}
            >
              Últimos 3 meses
            </Button>
            <Button
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => {
                const today = new Date();
                const range = { from: subMonths(today, 12), to: today };
                setDate(range);
                onDateChange(range);
              }}
            >
              Últimos 12 meses
            </Button>
          </div>
        </div>
        <div className="p-2">
          <div className={cn("grid gap-2", className)}>
            <Calendar
              key={visibleMonth ? visibleMonth.toLocaleDateString() : "key"}
              initialFocus
              mode="range"
              defaultMonth={visibleMonth}
              selected={date}
              locale={ptBR}
              onSelect={handleSelectRange}
              numberOfMonths={2}
              disabled={day => isAfter(day, endOfDay(new Date()))}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
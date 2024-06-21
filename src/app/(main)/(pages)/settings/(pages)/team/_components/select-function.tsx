"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { ScrollArea } from "@/components/ui/scroll-area";

type Framework = Record<"value" | "label", string>;

const FRAMEWORKS = [
  {
    value: "Dashboard",
    label: "Dashboard",
  },
  {
    value: "Flow",
    label: "Flow",
  },
  {
    value: "Treinamento",
    label: "Treinamento",
  },
  {
    value: "Playground",
    label: "Playground",
  },
  {
    value: "Bate-papo",
    label: "Bate-papo",
  },
  {
    value: "Biblioteca de Ferramentas",
    label: "Biblioteca de Ferramentas",
  },
  {
    value: "Assinatura",
    label: "Assinatura",
  },
  {
    value: "Configurações",
    label: "Configurações",
  },
  {
    value: "Logs",
    label: "Logs",
  }
] satisfies Framework[];

interface FancyMultiSelectProps {
  onSelectedChange: (selected: Framework[]) => void;
  initialSelected?: Framework[]; // Adiciona a propriedade opcional para itens selecionados inicialmente
}


export function FancyMultiSelect({ onSelectedChange, initialSelected = [FRAMEWORKS[4]] }: FancyMultiSelectProps) {
  const [selected, setSelected] = React.useState<Framework[]>(initialSelected);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected(prev => prev.filter(s => s.value !== framework.value));
  }, []);

  React.useEffect(() => {
    onSelectedChange(selected);
  }, [selected, onSelectedChange]);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current
    if (input) {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (input.value === "") {
          setSelected(prev => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          })
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === "Escape") {
        input.blur();
      }
    }
  }, []);

  const selectables = FRAMEWORKS.filter(framework => !selected.includes(framework));

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div
        className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
      >
        <div className="flex gap-1 flex-wrap">
            {selected.map((framework) => {
              return (
                <Badge key={framework.value} variant="secondary">
                  {framework.label}
                  <button
                    className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(framework);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(framework)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              )
            })}
            {/* Avoid having the "Search" Icon */}
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder=""
              className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
            />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ?
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((framework) => {
                return (
                  <CommandItem
                    key={framework.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={(value) => {
                      setInputValue("")
                      setSelected(prev => [...prev, framework])
                    }}
                    className={"cursor-pointer"}
                  >
                    {framework.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
          : null}
      </div>
    </Command >
  )
}
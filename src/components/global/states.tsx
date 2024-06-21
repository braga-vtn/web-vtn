"use client";

import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { cn, lowerCase, sentenceCase } from "@/lib/utils";
import states from "@/components/data/states.json";
import { useDropdownStore } from "@/lib/dropdown-region";

import { type StateProps } from "@/lib/types";


interface StateDropdownProps {
  defaultState?: string;
  defaultCountry?: string;
  countrySelected?: string;
}

const StateDropdown = ({ defaultCountry, defaultState }: StateDropdownProps) => {
  const { countryValue, stateValue, openStateDropdown, setOpenStateDropdown, setStateValue } = useDropdownStore();
  const countrySelected = !countryValue ? defaultCountry : countryValue;
  const SD = states as StateProps[];
  const S = SD.filter((state) => state.country_name === sentenceCase(countrySelected ? countrySelected : countryValue));

  return (
    <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
      {!countryValue && S.length === 0 ? null :
        <div>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openStateDropdown}
              className="w-[300px] cursor-pointer justify-between ml-2"
              disabled={!countryValue && S.length === 0}
            >
              {stateValue || defaultState ? (
                <div className="flex items-end gap-2">
                  {!stateValue ?
                    <span>
                      {S.find((state) => lowerCase(state.name) === defaultState)?.name}
                    </span>
                    :
                    <span>
                      {S.find((state) => lowerCase(state.name) === stateValue)?.name}
                    </span>
                  }
                </div>
              ) : (
                <span>Selecione um estado</span>
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Procurar..." />
              <CommandEmpty>Estado não encontrado.</CommandEmpty>
              <CommandGroup>
                <ScrollArea className="h-[300px] w-full">
                  {S.map((state) => (
                    <CommandItem
                      key={state.id}
                      value={state.name}
                      onSelect={(currentValue) => {
                        setStateValue(currentValue === lowerCase(state.name) ? currentValue : "");
                        setOpenStateDropdown(false);
                      }}
                      className="flex cursor-pointer items-center justify-between text-xs hover:!bg-[#27272a] hover:!text-white"
                    >
                      <div className="flex items-end gap-2">
                        <span className="">{state.name}</span>
                      </div>
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          stateValue === lowerCase(state.name) ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </div>
      }
    </Popover>
  );
};

export default StateDropdown;
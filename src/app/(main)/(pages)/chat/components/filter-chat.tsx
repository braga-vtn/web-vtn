import React, { useState } from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Filter } from "lucide-react";

interface OptionType {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface DataTableFacetedFilterProps<TData> {
  data: TData[];
  title: string;
  options: OptionType[];
  filterCallback: (selectedOptions: string[]) => void;
}

export function DataTableFacetedFilter<TData>({
  data,
  title,
  options,
  filterCallback
}: DataTableFacetedFilterProps<TData>) {
  const [selectedValues, setSelectedValues] = React.useState<Set<string>>(new Set());

  const handleSelect = (value: string) => {
    const newSelectedValues = new Set(selectedValues);
    if (newSelectedValues.has(value)) {
      newSelectedValues.delete(value);
    } else {
      newSelectedValues.add(value);
    }
    setSelectedValues(newSelectedValues);
    filterCallback(Array.from(newSelectedValues));
  };

  const clearFilters = () => {
    setSelectedValues(new Set<string>());
    filterCallback([]);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="gooeyLeft2" size="icon5" className="border-dashed ml-2">
          <Filter className="h-4 w-4" />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden "
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex ml-2">
                {selectedValues.size > 1 ? (
                  <Badge variant="secondary" className="rounded-sm px-1 font-normal bg-neutral-50 dark:bg-neutral-800">
                    {selectedValues.size} selecionado
                  </Badge>
                ) : (
                  Array.from(selectedValues).map(value => (
                    <Badge
                      variant="secondary"
                      key={value}
                      className="rounded-sm px-1 font-normal"
                    >
                      {options.find(option => option.value === value)?.label}
                    </Badge>
                  ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((status) => (
                <CommandItem
                  key={status.value}
                  onSelect={() => handleSelect(status.value)}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-sm border">
                    {selectedValues.has(status.value) && <CheckIcon className="h-4 w-4" />}
                  </div>
                  <span>{status.label}</span>
                  {/* <div className="absolute right-0">
                    {status.icon && (
                      <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                  </div> */}
                </CommandItem>
              ))}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={clearFilters}>
                    Limpar filtros
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
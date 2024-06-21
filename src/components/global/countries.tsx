"use client";

import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn, lowerCase } from "@/lib/utils";
import countries from "@/components/data/countries.json";
import { type CountryProps } from "@/lib/types";
import { useDropdownStore } from "@/lib/dropdown-region";

interface CountryDropdownProps {
    disabled?: boolean;
    defaultCountry?: string;
}

const CountryDropdown = ({ disabled, defaultCountry }: CountryDropdownProps) => {
    const { countryValue, setCountryValue, openCountryDropdown, setOpenCountryDropdown } = useDropdownStore();
    const C = countries as CountryProps[];

    return (
        <Popover open={openCountryDropdown} onOpenChange={setOpenCountryDropdown}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCountryDropdown}
                    className="w-[300px] justify-between border  "
                    disabled={disabled}
                >
                    <span>
                        {countryValue || defaultCountry ? (
                            <div className="flex items-end gap-2">
                                <span>
                                    {countryValue ?
                                        <span>
                                            {countries.find((country) => lowerCase(country.name) === countryValue)?.emoji}
                                        </span> :
                                        null
                                    }
                                    {defaultCountry && !countryValue ?
                                        <span>
                                            {countries.find((country) => lowerCase(country.name) === defaultCountry)?.emoji}
                                        </span> :
                                        null
                                    }
                                </span>
                                <span>
                                    {countryValue ?
                                        <span>
                                            {countries.find((country) => lowerCase(country.name) === countryValue)?.name}
                                        </span> :
                                        null
                                    }
                                    {defaultCountry && !countryValue ?
                                        <span>
                                            {countries.find((country) => lowerCase(country.name) === defaultCountry)?.name}
                                        </span> :
                                        null
                                    }
                                </span>
                            </div>
                        ) : (
                            <span>Selecione um país</span>
                        )}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Procurar..." />
                    <CommandEmpty>País não encontrado.</CommandEmpty>
                    <CommandGroup>
                        <ScrollArea className="h-[300px] w-full">
                            {C.map((country) => (
                                <CommandItem
                                    key={country.id}
                                    value={country.name}
                                    onSelect={(currentValue) => {
                                        setCountryValue(currentValue === lowerCase(country.name) ? currentValue : "");
                                        setOpenCountryDropdown(false);
                                    }}
                                    className="flex cursor-pointer items-center justify-between text-xs hover:!bg-[#27272a] hover:!text-white"
                                >
                                    <div className="flex items-end gap-2">
                                        <span>{country.emoji}</span>
                                        <span className="">{country.name}</span>
                                    </div>
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            countryValue === lowerCase(country.name) ? "opacity-100" : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                            <ScrollBar orientation="vertical" />
                        </ScrollArea>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default CountryDropdown;
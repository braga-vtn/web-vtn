"use client";

import * as React from "react";
import { TimePickerInput } from "./time-picker-input";
import { Checkbox } from "../ui/checkbox";

interface SelectTimeProps {
  label: string;
  active: boolean;
  onActiveChange: (active: boolean) => void;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}

export function SelectTime({
  label,
  active,
  onActiveChange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: SelectTimeProps) {
  const minuteRefStart = React.useRef<HTMLInputElement>(null);
  const hourRefStart = React.useRef<HTMLInputElement>(null);
  const minuteRefEnd = React.useRef<HTMLInputElement>(null);
  const hourRefEnd = React.useRef<HTMLInputElement>(null);

  const id = React.useId();

  const handleCheckedChange = (checked: boolean) => {
    onActiveChange(checked);
  };

  return (
    <div className="flex items-center justify-between gap-4 space-y-5">
      <div className="flex items-center space-x-2 mt-3">
        <Checkbox
          id={id}
          checked={active}
          onCheckedChange={handleCheckedChange}
        />
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
      <div className="flex items-center gap-2">
        <p className="self-center text-sm text-neutral-500">de</p>
        <TimePickerInput
          picker="hours"
          date={startDate}
          setDate={setStartDate}
          ref={hourRefStart}
          onRightFocus={() => minuteRefStart.current?.focus()}
        />
        <p className="self-center text-sm text-neutral-500">:</p>
        <TimePickerInput
          picker="minutes"
          date={startDate}
          setDate={setStartDate}
          ref={minuteRefStart}
          onLeftFocus={() => hourRefStart.current?.focus()}
        />

        <p className="self-center text-sm text-neutral-500 mx-3">até</p>
        <TimePickerInput
          picker="hours"
          date={endDate}
          setDate={setEndDate}
          ref={hourRefEnd}
          onRightFocus={() => minuteRefEnd.current?.focus()}
        />
        <p className="self-center text-sm text-neutral-500">:</p>
        <TimePickerInput
          picker="minutes"
          date={endDate}
          setDate={setEndDate}
          ref={minuteRefEnd}
          onLeftFocus={() => hourRefEnd.current?.focus()}
        />
      </div>
    </div>
  );
}
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { TimePickerInput } from '@/components/global/time-picker-input';
import { Switch } from '@/components/ui/switch';

interface TimeProps {
  timeStart: Date | undefined;
  setTimeStart: (time: Date | undefined) => void;
  timeEnd: Date | undefined;
  setTimeEnd: (time: Date | undefined) => void;
}

interface DaySettingsProps extends TimeProps {
  day: { full: string; short: string };
}

const daysOfWeek = [
  { full: 'Terça-Feira', short: 'Ter' },
];

const DayTimePickerTuesday: React.FC<DaySettingsProps> = ({ day, timeStart, setTimeStart, timeEnd, setTimeEnd }) => {

  const minuteTerStartRef = React.useRef<HTMLInputElement>(null);
  const minuteTerEndRef = React.useRef<HTMLInputElement>(null);
  const hourTerStartRef = React.useRef<HTMLInputElement>(null);
  const hourTerEndRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-end justify-between w-full mb-4">
      <div className="flex space-x-2 h-10 items-center">
        <Switch defaultChecked={true} id={`${day.full}-switch`} />
        <Label htmlFor={`${day.full}-switch`}>{day.full}</Label>
      </div>
      <div className="flex items-center gap-2">
        <div className="grid gap-1 text-center">
          <TimePickerInput
            picker={"startHours"}
            date={timeStart}
            setDate={setTimeStart}
            ref={hourTerStartRef}
            onRightFocus={() => minuteTerStartRef.current?.focus()}
          />
        </div>
        <div className="grid gap-1 text-center">
          <TimePickerInput
            picker={"startMinutes"}
            date={timeStart}
            setDate={setTimeStart}
            ref={minuteTerStartRef}
            onLeftFocus={() => hourTerStartRef.current?.focus()}
          />
        </div>
        {day.full == 'Terça-Feira' ? <div className="flex h-10 items-end text-zinc-600 dark:text-zinc-500">
          até
        </div>
          :
          <div className="flex items-center text-zinc-600 dark:text-zinc-500">
            até
          </div>}
        <div className="grid gap-1 text-center">
          <TimePickerInput
            picker={"endHours"}
            date={timeEnd}
            setDate={setTimeEnd}
            ref={hourTerEndRef}
            onRightFocus={() => minuteTerEndRef.current?.focus()}
          />
        </div>
        <div className="grid gap-1 text-center">
          <TimePickerInput
            picker={"endMinutes"}
            date={timeEnd}
            setDate={setTimeEnd}
            ref={minuteTerEndRef}
            onLeftFocus={() => hourTerEndRef.current?.focus()}
          />
        </div>
      </div>
    </div>
  );
};

export function TimePickerStartTuesday(props: TimeProps) {
  return (
    <div>
      {daysOfWeek.map(day => (
        <DayTimePickerTuesday key={day.full} day={day} {...props} />
      ))}
    </div>
  );
}

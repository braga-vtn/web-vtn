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
  { full: 'Quarta-Feira', short: 'Qua' },
];

const DayTimePicker: React.FC<DaySettingsProps> = ({ day, timeStart, setTimeStart, timeEnd, setTimeEnd }) => {

  const minuteQuaStartRef = React.useRef<HTMLInputElement>(null);
  const minuteQuaEndRef = React.useRef<HTMLInputElement>(null);
  const hourQuaStartRef = React.useRef<HTMLInputElement>(null);
  const hourQuaEndRef = React.useRef<HTMLInputElement>(null);

  const minuteQuiStartRef = React.useRef<HTMLInputElement>(null);
  const minuteQuiEndRef = React.useRef<HTMLInputElement>(null);
  const hourQuiStartRef = React.useRef<HTMLInputElement>(null);
  const hourQuiEndRef = React.useRef<HTMLInputElement>(null);

  const minuteSexStartRef = React.useRef<HTMLInputElement>(null);
  const minuteSexEndRef = React.useRef<HTMLInputElement>(null);
  const hourSexStartRef = React.useRef<HTMLInputElement>(null);
  const hourSexEndRef = React.useRef<HTMLInputElement>(null);

  const minuteSabStartRef = React.useRef<HTMLInputElement>(null);
  const minuteSabEndRef = React.useRef<HTMLInputElement>(null);
  const hourSabStartRef = React.useRef<HTMLInputElement>(null);
  const hourSabEndRef = React.useRef<HTMLInputElement>(null);

  const minuteDomStartRef = React.useRef<HTMLInputElement>(null);
  const minuteDomEndRef = React.useRef<HTMLInputElement>(null);
  const hourDomStartRef = React.useRef<HTMLInputElement>(null);
  const hourDomEndRef = React.useRef<HTMLInputElement>(null);

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
          ref={hourQuaStartRef}
          onRightFocus={() => minuteQuaStartRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <TimePickerInput
          picker={"startMinutes"}
          date={timeStart}
          setDate={setTimeStart}
          ref={minuteQuaStartRef}
          onLeftFocus={() => hourQuaStartRef.current?.focus()}
        />
      </div>
      {day.full == 'Quarta-Feira' ? <div className="flex h-10 items-end text-zinc-600 dark:text-zinc-500">
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
          ref={hourQuaEndRef}
          onRightFocus={() => minuteQuaEndRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <TimePickerInput
          picker={"endMinutes"}
          date={timeEnd}
          setDate={setTimeEnd}
          ref={minuteQuaEndRef}
          onLeftFocus={() => hourQuaEndRef.current?.focus()}
        />
      </div>
    </div>
  </div>
);
};

export function TimePickerStartWednesday(props: TimeProps) {
  return (
    <div>
      {daysOfWeek.map(day => (
        <DayTimePicker key={day.full} day={day} {...props} />
      ))}
    </div>
  );
}

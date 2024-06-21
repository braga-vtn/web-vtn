import * as React from 'react';
import { Label } from '@/components/ui/label';
import { TimePickerInput } from '@/components/global/time-picker-input';
import { Switch2 } from '@/components/ui/switch-2';

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
  { full: 'Segunda-Feira', short: 'Seg' },
];

const DayTimePickerMonday: React.FC<DaySettingsProps> = ({ day, timeStart, setTimeStart, timeEnd, setTimeEnd }) => {
  const minuteSegStartRef = React.useRef<HTMLInputElement>(null);
  const minuteSegEndRef = React.useRef<HTMLInputElement>(null);
  const hourSegStartRef = React.useRef<HTMLInputElement>(null);
  const hourSegEndRef = React.useRef<HTMLInputElement>(null);

return (
  <div className="flex items-end justify-between mb-4">
    <div className="flex space-x-2 h-10 items-center">
      <Switch2 defaultChecked={true} id={`${day.full}-switch`} />
      <Label htmlFor={`${day.full}-switch`}>{day.full}</Label>
    </div>
    <div className="flex items-center gap-2">
      <div className="grid gap-1 text-center">
        <Label htmlFor={`${day.full}-start-hour`} className="text-xs">
          {day.full == 'Segunda-Feira' ? 'Hora' : null}
        </Label>
        <TimePickerInput
          picker={"startHours"}
          date={timeStart}
          setDate={setTimeStart}
          ref={hourSegStartRef}
          onRightFocus={() => minuteSegStartRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor={`${day.full}-start-minute`} className="text-xs">
          {day.full == 'Segunda-Feira' ? 'Minuto' : null}
        </Label>
        <TimePickerInput
          picker={"startMinutes"}
          date={timeStart}
          setDate={setTimeStart}
          ref={minuteSegStartRef}
          onLeftFocus={() => hourSegStartRef.current?.focus()}
        />
      </div>
      {day.full == 'Segunda-Feira' ? <div className="flex h-10 items-end text-zinc-600 dark:text-zinc-500">
        até
      </div>
        :
        <div className="flex items-center text-zinc-600 dark:text-zinc-500">
          até
        </div>}
      <div className="grid gap-1 text-center">
        <Label htmlFor={`${day.full}-end-hour`} className="text-xs">
          {day.full == 'Segunda-Feira' ? 'Hora' : null}
        </Label>
        <TimePickerInput
          picker={"endHours"}
          date={timeEnd}
          setDate={setTimeEnd}
          ref={hourSegEndRef}
          onRightFocus={() => minuteSegEndRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor={`${day.full}-end-minute`} className="text-xs">
          {day.full == 'Segunda-Feira' ? 'Minuto' : null}
        </Label>
        <TimePickerInput
          picker={"endMinutes"}
          date={timeEnd}
          setDate={setTimeEnd}
          ref={minuteSegEndRef}
          onLeftFocus={() => hourSegEndRef.current?.focus()}
        />
      </div>
    </div>
  </div>
);
};

export function TimePickerStartMonday(props: TimeProps) {
  return (
    <div>
      {daysOfWeek.map(day => (
        <DayTimePickerMonday key={day.full} day={day} {...props} />
      ))}
    </div>
  );
}

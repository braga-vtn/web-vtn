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
  { full: 'Sexta-Feira', short: 'Sex' },
];

const DayTimePicker: React.FC<DaySettingsProps> = ({ day, timeStart, setTimeStart, timeEnd, setTimeEnd }) => {

  const minuteSexStartRef = React.useRef<HTMLInputElement>(null);
  const minuteSexEndRef = React.useRef<HTMLInputElement>(null);
  const hourSexStartRef = React.useRef<HTMLInputElement>(null);
  const hourSexEndRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-end justify-between w-full mb-4">
      <div className="flex space-x-2 h-10 items-center">
        <Switch defaultChecked={true} id={`${day.full}-switch`} />
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
            ref={hourSexStartRef}
            onRightFocus={() => minuteSexStartRef.current?.focus()}
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
            ref={minuteSexStartRef}
            onLeftFocus={() => hourSexStartRef.current?.focus()}
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
            ref={hourSexEndRef}
            onRightFocus={() => minuteSexEndRef.current?.focus()}
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
            ref={minuteSexEndRef}
            onLeftFocus={() => hourSexEndRef.current?.focus()}
          />
        </div>
      </div>
    </div>
  );
};

export function TimePickerStartFriday(props: TimeProps) {
  return (
    <div>
      {daysOfWeek.map(day => (
        <DayTimePicker key={day.full} day={day} {...props} />
      ))}
    </div>
  );
}

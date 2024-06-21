import { ResponsiveFunnel } from '@nivo/funnel';
import { PartTooltipProps } from '@nivo/funnel/dist/types/PartTooltip';
import { useTheme } from 'next-themes';
import React from 'react';

interface DataEntry {
  id: string;
  value: number;
  label: string;
  vt: number;
}

interface RangeFunnelProps {
  data: DataEntry[];
}

function CustomTooltip({ part }: PartTooltipProps<DataEntry>) {
  const { label, vt } = part.data;
  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-neutral-500">
            {label}
          </span>
          <span className="font-bold">
            {vt}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RangeFunnel({ data }: RangeFunnelProps) {
  const { systemTheme, resolvedTheme } = useTheme();

  const currentTheme = resolvedTheme === 'dark' || (systemTheme === 'dark' && !resolvedTheme) ? 'dark' : 'light';

  const lightColors = ['#171717', '#404040', '#525252', '#737373', '#a3a3a3'];
  const darkColors = ['#f5f5f5', '#d4d4d4', '#737373', '#525252', '#404040'];

  const colors = currentTheme === 'dark' ? darkColors : lightColors;

  return (
    <div style={{ height: '400px', margin: '55px', textAlign: 'center' }}>
      <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        direction="horizontal"
        valueFormat=">-.4s"
        colors={colors}
        borderWidth={20}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        borderOpacity={0.1}
        tooltip={CustomTooltip}
        motionConfig="wobbly"
      />
    </div>
  );
}
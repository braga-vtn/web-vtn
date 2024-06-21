import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface DataEntry {
  name: string;
  uv: number;
}

interface InteractionUsedProps {
  data: DataEntry[];
}

export default function InteractionUsed({ data }: InteractionUsedProps) {
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name, uv } = payload[0].payload;
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Interações
                        </span>
                        <span className="font-bold">{uv}</span>
                      </div>
                    </div>
                  </div>
                )
              }

              return null
            }}
          />
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Line type="monotone" dataKey="uv" stroke="currentColor" />
        </LineChart>
      </ResponsiveContainer>
    </div >
  );
}

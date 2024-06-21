import { Separator } from "@/components/ui/separator";
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
  feminino: number;
  masculino: number;
}

interface RangerGenderProps {
  data: DataEntry[];
}

export default function RangerGender({ data }: RangerGenderProps) {
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId4"
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
                const { name, feminino, masculino } = payload[0].payload;
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">{name}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Feminino</span>
                      <span className="font-bold ml-2">{feminino}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Masculino</span>
                      <span className="font-bold ml-5">{masculino}</span>
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
          <Line type="monotone" dataKey="feminino" stroke="currentColor" />
          <Line type="monotone" dataKey="masculino" stroke="#a3a3a3" />
        </LineChart>
      </ResponsiveContainer>
    </div >
  );
}
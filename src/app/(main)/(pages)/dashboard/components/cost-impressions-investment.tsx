import { Separator } from '@/components/ui/separator';
import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface DataEntry {
  name: string;
  investimento: number;
  cliques: number;
}

interface ImpressionsInvestmentProps {
  data: DataEntry[];
}

export default function ImpressionsInvestment({ data }: ImpressionsInvestmentProps) {
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={443}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId3"
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name, investimento, cliques } = payload[0].payload;
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">{name}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Investimento</span>
                      <span className="font-bold ml-2">R$ {investimento}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Cliques</span>
                      <span className="font-bold">{cliques}</span>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Line type="monotone" dataKey="investimento" stroke="currentColor" />
          <Line type="monotone" dataKey="cliques" stroke="#a3a3a3" />
        </LineChart>
      </ResponsiveContainer>
    </div >
  );
}

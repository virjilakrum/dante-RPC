import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { time: '00:00', requests: 3500 },
  { time: '04:00', requests: 2800 },
  { time: '08:00', requests: 4200 },
  { time: '12:00', requests: 5100 },
  { time: '16:00', requests: 4800 },
  { time: '20:00', requests: 3900 },
];

export function UsageChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Request Volume (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="requests"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
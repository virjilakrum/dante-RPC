import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, Calendar, Filter } from 'lucide-react';

const mockUsageData = [
  { date: '2024-03-10', requests: 15000, credits: 7500 },
  { date: '2024-03-11', requests: 18000, credits: 9000 },
  { date: '2024-03-12', requests: 16000, credits: 8000 },
  { date: '2024-03-13', requests: 20000, credits: 10000 },
  { date: '2024-03-14', requests: 22000, credits: 11000 },
  { date: '2024-03-15', requests: 19000, credits: 9500 },
];

export function Usage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medieval">Usage Analytics</h1>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 7 Days
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Credit Usage Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockUsageData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="credits"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Credits Used</span>
                  <span>75,000 / 100,000</span>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>API Requests</span>
                  <span>150,000 / 200,000</span>
                </div>
                <Progress value={75} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage by Endpoint</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['getBalance', 'getTransaction', 'getBlock'].map((endpoint) => (
                  <div key={endpoint} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{endpoint}</span>
                      <span>32%</span>
                    </div>
                    <Progress value={32} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
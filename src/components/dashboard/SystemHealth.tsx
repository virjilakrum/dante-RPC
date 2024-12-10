import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart } from 'lucide-react';

interface HealthMetric {
  name: string;
  value: number;
  status: 'healthy' | 'warning' | 'critical';
}

const healthMetrics: HealthMetric[] = [
  { name: 'CPU Usage', value: 45, status: 'healthy' },
  { name: 'Memory Usage', value: 78, status: 'warning' },
  { name: 'Storage', value: 32, status: 'healthy' },
  { name: 'Network', value: 92, status: 'critical' },
];

const statusColors = {
  healthy: 'bg-green-500',
  warning: 'bg-yellow-500',
  critical: 'bg-red-500',
};

export function SystemHealth() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-medieval">System Health</CardTitle>
        <Heart className="h-5 w-5 text-red-500" />
      </CardHeader>
      <CardContent className="space-y-4">
        {healthMetrics.map((metric) => (
          <div key={metric.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{metric.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${statusColors[metric.status]}`}>
                {metric.status}
              </span>
            </div>
            <Progress value={metric.value} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
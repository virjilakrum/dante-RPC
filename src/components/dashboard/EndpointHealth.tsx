import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Flame } from 'lucide-react';

interface EndpointHealthProps {
  endpoints: {
    name: string;
    health: number;
    region: string;
    status: 'healthy' | 'degraded' | 'critical';
  }[];
}

const statusColors = {
  healthy: 'text-green-500',
  degraded: 'text-yellow-500',
  critical: 'text-red-500',
};

export function EndpointHealth({ endpoints }: EndpointHealthProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medieval">Infernal Gateways</CardTitle>
        <Flame className="h-5 w-5 text-red-500" />
      </CardHeader>
      <CardContent className="space-y-4">
        {endpoints.map((endpoint) => (
          <div key={endpoint.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{endpoint.name}</span>
              <span className={statusColors[endpoint.status]}>{endpoint.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={endpoint.health} className="flex-1" />
              <span className="text-sm text-muted-foreground">{endpoint.region}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
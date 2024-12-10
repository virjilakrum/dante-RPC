import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Alert {
  id: string;
  type: 'error' | 'warning' | 'success' | 'info';
  message: string;
  timestamp: string;
}

const iconMap = {
  error: AlertTriangle,
  warning: Bell,
  success: CheckCircle,
  info: Info,
};

const alertStyles = {
  error: 'text-red-500 bg-red-500/10',
  warning: 'text-yellow-500 bg-yellow-500/10',
  success: 'text-green-500 bg-green-500/10',
  info: 'text-blue-500 bg-blue-500/10',
};

interface AlertScrollProps {
  alerts: Alert[];
}

export function AlertScroll({ alerts }: AlertScrollProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medieval">Divine Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {alerts.map((alert) => {
              const Icon = iconMap[alert.type];
              return (
                <div
                  key={alert.id}
                  className={cn(
                    'p-4 rounded-lg flex items-start gap-3',
                    alertStyles[alert.type]
                  )}
                >
                  <Icon className="h-5 w-5 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {alert.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
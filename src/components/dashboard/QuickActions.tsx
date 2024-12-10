import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Key, RefreshCw, Shield } from 'lucide-react';

const actions = [
  {
    icon: Key,
    label: 'Rotate Keys',
    description: 'Update API access credentials',
  },
  {
    icon: RefreshCw,
    label: 'Sync State',
    description: 'Force endpoint state refresh',
  },
  {
    icon: Shield,
    label: 'Security Scan',
    description: 'Run infrastructure audit',
  },
  {
    icon: Zap,
    label: 'Boost Performance',
    description: 'Optimize request routing',
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medieval">Ritual Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {actions.map(({ icon: Icon, label, description }) => (
          <Button
            key={label}
            variant="outline"
            className="h-auto flex-col items-start p-4 space-y-2"
          >
            <div className="flex items-center space-x-2">
              <Icon className="h-4 w-4" />
              <span className="font-medium">{label}</span>
            </div>
            <span className="text-xs text-muted-foreground">{description}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ServiceCard as ServiceCardType } from '@/types/dashboard';
import { cn } from '@/lib/utils';

const statusColors = {
  active: 'bg-green-500',
  inactive: 'bg-gray-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

export function ServiceCard({ title, description, status, features, actionUrl }: ServiceCardType) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge
            variant="secondary"
            className={cn('px-2 py-1 rounded-full', statusColors[status])}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full" variant="outline">
          Configure
        </Button>
      </CardContent>
    </Card>
  );
}
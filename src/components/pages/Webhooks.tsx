import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Bell, Globe, ArrowRight } from 'lucide-react';

const mockWebhooks = [
  {
    id: 'webhook-1',
    name: 'Transaction Monitor',
    url: 'https://api.example.com/webhooks/tx',
    events: ['tx.confirmed', 'tx.failed'],
    status: 'active',
    lastDelivery: '10 minutes ago',
  },
  {
    id: 'webhook-2',
    name: 'Account Updates',
    url: 'https://api.example.com/webhooks/accounts',
    events: ['account.modified'],
    status: 'inactive',
    lastDelivery: '2 days ago',
  },
];

export function Webhooks() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medieval">Webhooks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Webhook
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search webhooks..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4">
        {mockWebhooks.map((webhook) => (
          <Card key={webhook.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{webhook.name}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Globe className="h-4 w-4" />
                      <span>{webhook.url}</span>
                    </div>
                  </div>
                </div>
                <Badge variant={webhook.status === 'active' ? 'default' : 'secondary'}>
                  {webhook.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {webhook.events.map((event) => (
                    <Badge key={event} variant="outline">
                      {event}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Last delivery: {webhook.lastDelivery}
                  </span>
                  <Button variant="ghost" size="sm">
                    View Deliveries
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Key, Copy, MoreVertical } from 'lucide-react';

const mockApiKeys = [
  {
    id: 'key-1',
    name: 'Production API Key',
    prefix: 'pk_live_',
    created: '2024-03-15',
    lastUsed: '2 hours ago',
    status: 'active',
  },
  {
    id: 'key-2',
    name: 'Development API Key',
    prefix: 'pk_test_',
    created: '2024-03-10',
    lastUsed: '5 days ago',
    status: 'active',
  },
];

export function APIKeys() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medieval">API Keys</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Key
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search API keys..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4">
        {mockApiKeys.map((key) => (
          <Card key={key.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{key.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Created on {key.created}</p>
                  </div>
                </div>
                <Badge variant={key.status === 'active' ? 'default' : 'secondary'}>
                  {key.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <code className="bg-muted px-2 py-1 rounded">{key.prefix}...XXXX</code>
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Last used {key.lastUsed}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
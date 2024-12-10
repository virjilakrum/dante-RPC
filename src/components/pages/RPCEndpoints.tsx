import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Globe, Cpu, Network, Shield } from 'lucide-react';
import { useEndpoints } from '@/lib/hooks/useEndpoints';

export function RPCEndpoints() {
  const { endpoints } = useEndpoints();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medieval">RPC Endpoints</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Endpoint
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search endpoints..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filters</Button>
      </div>

      <div className="grid gap-6">
        {endpoints.map((endpoint) => (
          <Card key={endpoint.name} className="hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{endpoint.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{endpoint.region}</p>
                  </div>
                </div>
                <Badge
                  variant={endpoint.status === 'healthy' ? 'default' : 'destructive'}
                >
                  {endpoint.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Cpu className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">CPU Usage</p>
                    <p className="text-2xl font-bold">45%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Network className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Network</p>
                    <p className="text-2xl font-bold">1.2 GB/s</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Security</p>
                    <p className="text-2xl font-bold">High</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button variant="outline" className="flex-1">Configure</Button>
                <Button variant="outline" className="flex-1">View Logs</Button>
                <Button variant="outline" className="flex-1">Metrics</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
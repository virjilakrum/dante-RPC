import { StatsCard } from '@/components/dashboard/StatsCard';
import { ServiceCard } from '@/components/dashboard/ServiceCard';
import { UsageChart } from '@/components/dashboard/UsageChart';
import { EndpointHealth } from '@/components/dashboard/EndpointHealth';
import { AlertScroll } from '@/components/dashboard/AlertScroll';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { PerformanceMetrics } from '@/components/dashboard/PerformanceMetrics';
import { SystemHealth } from '@/components/dashboard/SystemHealth';
import { ErrorDistribution } from '@/components/dashboard/ErrorDistribution';
import { Activity, Zap, Clock, Database } from 'lucide-react';
import { useEndpoints } from '@/lib/hooks/useEndpoints';
import { useAlerts } from '@/lib/hooks/useAlerts';
import { useStats } from '@/lib/hooks/useStats';

export function Dashboard() {
  const { endpoints } = useEndpoints();
  const { alerts } = useAlerts();
  const { stats } = useStats();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-medieval">Infernal Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Requests"
          value={stats.totalRequests.toLocaleString()}
          description="+12.3% from last week"
          icon={<Activity className="h-4 w-4" />}
        />
        <StatsCard
          title="Success Rate"
          value={`${stats.successRate}%`}
          description="Last 24 hours"
          icon={<Zap className="h-4 w-4" />}
        />
        <StatsCard
          title="Avg. Latency"
          value={`${stats.averageLatency}ms`}
          description="Global average"
          icon={<Clock className="h-4 w-4" />}
        />
        <StatsCard
          title="Credit Usage"
          value={`${stats.creditUsage}%`}
          description="8.9M/12M credits used"
          icon={<Database className="h-4 w-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceMetrics />
        <SystemHealth />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EndpointHealth endpoints={endpoints} />
        <ErrorDistribution />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertScroll alerts={alerts} />
        <QuickActions />
      </div>
    </div>
  );
}
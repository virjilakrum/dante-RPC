import { useState, useEffect } from 'react';
import { ProjectStats } from '@/types/dashboard';

export function useStats() {
  const [stats, setStats] = useState<ProjectStats>({
    totalRequests: 0,
    successRate: 0,
    averageLatency: 0,
    creditUsage: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Simulated API call
        const mockStats: ProjectStats = {
          totalRequests: 1234567,
          successRate: 99.9,
          averageLatency: 123,
          creditUsage: 67,
        };

        setStats(mockStats);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stats');
        setLoading(false);
      }
    };

    fetchStats();

    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 100),
        successRate: Math.min(100, prev.successRate + (Math.random() * 0.1 - 0.05)),
        averageLatency: Math.max(0, prev.averageLatency + (Math.random() * 2 - 1)),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { stats, loading, error };
}
import { useState, useEffect } from 'react';

interface Endpoint {
  name: string;
  health: number;
  region: string;
  status: 'healthy' | 'degraded' | 'critical';
}

export function useEndpoints() {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulated API call
    const fetchEndpoints = async () => {
      try {
        // In a real application, this would be an API call
        const mockEndpoints: Endpoint[] = [
          { name: 'Inferno-1', health: 98, region: 'US East', status: 'healthy' },
          { name: 'Purgatorio-2', health: 75, region: 'EU West', status: 'degraded' },
          { name: 'Paradiso-3', health: 100, region: 'Asia Pacific', status: 'healthy' },
        ];

        setEndpoints(mockEndpoints);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch endpoints');
        setLoading(false);
      }
    };

    fetchEndpoints();
  }, []);

  return { endpoints, loading, error };
}
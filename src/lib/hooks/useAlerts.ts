import { useState, useEffect } from 'react';

export interface Alert {
  id: string;
  type: 'error' | 'warning' | 'success' | 'info';
  message: string;
  timestamp: string;
}

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulated API call
    const fetchAlerts = async () => {
      try {
        // In a real application, this would be an API call
        const mockAlerts: Alert[] = [
          {
            id: '1',
            type: 'error',
            message: 'High latency detected in EU West region',
            timestamp: '2 minutes ago',
          },
          {
            id: '2',
            type: 'warning',
            message: 'API rate limit threshold reached',
            timestamp: '15 minutes ago',
          },
          {
            id: '3',
            type: 'success',
            message: 'New endpoint deployed successfully',
            timestamp: '1 hour ago',
          },
          {
            id: '4',
            type: 'info',
            message: 'System maintenance scheduled',
            timestamp: '2 hours ago',
          },
        ];

        setAlerts(mockAlerts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch alerts');
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  return { alerts, loading, error };
}
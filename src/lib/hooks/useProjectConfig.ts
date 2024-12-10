import { useState, useEffect } from 'react';
import { ProjectConfig } from '@/types/dashboard';

export function useProjectConfig() {
  const [config, setConfig] = useState<ProjectConfig>({
    id: 'dante-1',
    name: 'Dante RPC',
    plan: 'Inferno',
    credits: 8900000,
    maxCredits: 12000000,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        // In a real app, this would be an API call
        setConfig({
          id: 'dante-1',
          name: 'Dante RPC',
          plan: 'Inferno',
          credits: 8900000,
          maxCredits: 12000000,
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch project configuration');
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
}
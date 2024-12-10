export interface ProjectStats {
  totalRequests: number;
  successRate: number;
  averageLatency: number;
  creditUsage: number;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive' | 'warning' | 'error';
  features: string[];
  actionUrl: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface ThemeConfig {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface ProjectConfig {
  id: string;
  name: string;
  plan: string;
  credits: number;
  maxCredits: number;
}
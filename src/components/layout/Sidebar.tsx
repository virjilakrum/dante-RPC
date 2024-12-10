import { useState } from 'react';
import { NavigationItem } from '@/types/dashboard';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Network,
  Key,
  Bell,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', path: '/' },
  { id: 'endpoints', label: 'RPC Endpoints', icon: 'Network', path: '/endpoints' },
  { id: 'api-keys', label: 'API Keys', icon: 'Key', path: '/api-keys' },
  { id: 'webhooks', label: 'Webhooks', icon: 'Bell', path: '/webhooks' },
  { id: 'usage', label: 'Usage', icon: 'BarChart3', path: '/usage' },
  { id: 'settings', label: 'Settings', icon: 'Settings', path: '/settings' },
];

const iconMap = {
  LayoutDashboard,
  Network,
  Key,
  Bell,
  BarChart3,
  Settings,
};

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'flex flex-col h-screen bg-background border-r transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div
          className={cn(
            'font-bold text-xl transition-opacity',
            collapsed ? 'opacity-0 w-0' : 'opacity-100'
          )}
        >
          Dante RPC
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <Button
              key={item.id}
              variant={currentPage === item.id ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                collapsed ? 'px-2' : 'px-4'
              )}
              onClick={() => onNavigate(item.id)}
            >
              <Icon className="h-5 w-5" />
              {!collapsed && (
                <span className="ml-2">{item.label}</span>
              )}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
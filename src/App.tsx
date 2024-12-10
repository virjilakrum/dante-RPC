import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { DanteHeader } from '@/components/layout/DanteHeader';
import { Dashboard } from '@/components/pages/Dashboard';
import { RPCEndpoints } from '@/components/pages/RPCEndpoints';
import { APIKeys } from '@/components/pages/APIKeys';
import { Webhooks } from '@/components/pages/Webhooks';
import { Usage } from '@/components/pages/Usage';
import { Settings } from '@/components/pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DanteHeader />
        <main className="flex-1 overflow-y-auto p-8">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'endpoints' && <RPCEndpoints />}
          {currentPage === 'api-keys' && <APIKeys />}
          {currentPage === 'webhooks' && <Webhooks />}
          {currentPage === 'usage' && <Usage />}
          {currentPage === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
}

export default App;
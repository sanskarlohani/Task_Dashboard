import React, { useCallback, useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Header from './components/Header';
import RevenueSection from './components/RevenueSection';
import { ChartsSection } from './components/ChartsSection';
import PlatformValueChart from './components/PlatformValueChart';
import { UserTable, WorkWithPlatforms, SalesDynamic } from './components/UserStats';
import ActionToast from './components/ActionToast';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const triggerAction = useCallback((label) => {
    setToastMessage(`${label} clicked`);
    setToastVisible(true);
    window.clearTimeout((window)._actionToastTimer);
    (window)._actionToastTimer = window.setTimeout(() => setToastVisible(false), 1200);
  }, []);

  const handleRootClick = useCallback((e) => {
    const actionable = e.target.closest('[data-action]');
    if (actionable) {
      const label = actionable.getAttribute('data-action') || 'Action';
      triggerAction(label);
    }
  }, [triggerAction]);
  return (
    <div className="flex min-h-screen bg-[#f4efef]">
      {/* Sidebar */}
      <Sidebar />

      {/* Top Search Bar */}
      <TopBar />

      {/* Main Content */}
      <div className="flex-1 ml-40 pt-16">
        <div onClick={handleRootClick} className="relative mx-10 my-6 transform origin-top scale-90 bg-white rounded-[28px]  border border-gray-100 overflow-hidden">
          <ActionToast message={toastMessage} visible={toastVisible} />
          <Header />
          
          <main className="p-6">
          {/* Revenue Section */}
          <RevenueSection />

          {/* Middle Section - Charts and Platform Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Left Column - Deals by Referrer */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
                <button data-action="Filters: Referrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Dribbble', value: '$227,459', pct: '43%', icon: '●', color: 'text-pink-500' },
                  { name: 'Instagram', value: '$142,823', pct: '27%', icon: '◉', color: 'text-pink-500' },
                  { name: 'Behance', value: '$89,935', pct: '11%', icon: 'Bē', color: 'text-blue-600' },
                  { name: 'Google', value: '$37,028', pct: '7%', icon: 'G', color: 'text-blue-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <span className={`text-xs font-medium ${item.color}`}>{item.icon}</span>
                    </div>
                    <span className="text-sm text-gray-700 w-20">{item.name}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                    <span className="text-xs text-gray-400 ml-auto">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Column - Deals Amount */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="grid grid-cols-3 gap-0.5">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="w-1.5 h-4 bg-gray-300 rounded-sm"></div>
                  ))}
                </div>
                <button data-action="Filters: Deals" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters
                </button>
              </div>

              <div className="flex justify-center gap-3 mb-6">
                {[
                  { icon: '●', active: true, color: 'bg-pink-500' },
                  { icon: 'Bē', color: 'bg-gray-100' },
                  { icon: '◉', color: 'bg-gray-100' },
                  { icon: 'G', color: 'bg-gray-100' },
                  { icon: '...', color: 'bg-gray-100' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    data-action={`Icon: ${item.icon}`}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition ${item.active ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
                  >
                    <span className="text-xs font-medium">{item.icon}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Deals amount</div>
                <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                  by referrer category
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column - User Stats Preview */}
            <div className="space-y-4">
              {/* Mini User Table */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="grid grid-cols-6 gap-2 text-[10px] text-gray-400 mb-3">
                  <span>Sales</span>
                  <span>Revenue</span>
                  <span>Leads</span>
                  <span>KPI</span>
                  <span>W/L</span>
                  <span></span>
                </div>
                
                {[
                  { name: 'Armin A.', sales: 41, revenue: '$209,633', leads: 118, kpi: 0.84, wr: '31%', w: 12, l: 29, color: 'bg-green-500' },
                  { name: 'Mikasa A.', sales: 54, revenue: '$156,841', leads: 103, kpi: 0.89, wr: '39%', w: 21, l: 33, color: 'bg-gray-400' },
                ].map((user, i) => (
                  <div key={i} className="grid grid-cols-6 gap-2 items-center py-2 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-1">
                      <div className={`w-5 h-5 rounded-full ${user.color} overflow-hidden`}>
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="" className="w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-700 truncate">{user.name}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-900">{user.revenue}</span>
                    <div className="flex items-center gap-1">
                      <span className={`px-1 py-0.5 rounded text-[10px] text-white ${user.color}`}>{user.sales}</span>
                      <span className="text-xs text-gray-500">{user.leads}</span>
                    </div>
                    <span className="text-xs text-gray-500">{user.kpi}</span>
                    <span className="text-xs text-gray-500">{user.wr}</span>
                    <div className="flex gap-1">
                      <span className="text-xs text-green-500">{user.w}</span>
                      <span className="text-xs text-gray-400">{user.l}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-3 gap-4">
            {/* Platform Value Chart */}
            <div className="col-span-2">
              <PlatformValueChart />
            </div>

            {/* Right Side Stats */}
            <div className="space-y-4">
              <WorkWithPlatforms />
              <SalesDynamic />
            </div>
          </div>

          
        </main>
        </div>
      </div>
    </div>
  );
}

export default App;

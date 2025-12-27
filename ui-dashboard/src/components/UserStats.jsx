import React from 'react';
import { TrendingUp, TrendingDown, Flame, Award, Star, Maximize2 } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip, Area, AreaChart, ReferenceLine } from 'recharts';

const userData = [
  { 
    name: 'Armin A.', 
    sales: 41, 
    revenue: '$209,633', 
    leads: 118, 
    kpi: 0.84, 
    winRate: '31%', 
    w: 12, 
    l: 29,
    color: 'bg-green-500',
    salesColor: 'bg-green-500'
  },
  { 
    name: 'Mikasa A.', 
    sales: 54, 
    revenue: '$156,841', 
    leads: 103, 
    kpi: 0.89, 
    winRate: '39%', 
    w: 21, 
    l: 33,
    color: 'bg-gray-400',
    salesColor: 'bg-red-400',
    badges: ['Top sales', 'Sales streak', 'Top review']
  },
  { 
    name: 'Eren Y.', 
    sales: 22, 
    revenue: '$117,115', 
    leads: 84, 
    kpi: 0.79, 
    winRate: '32%', 
    w: 7, 
    l: 15,
    color: 'bg-yellow-400',
    salesColor: 'bg-yellow-500'
  },
];

const salesDynamicData = [
  { week: 'W1', value: 26, prev: 22, kpi: 24 },
  { week: 'W3', value: 33, prev: 28, kpi: 29, event: 'be' },
  { week: 'W5', value: 29, prev: 31, kpi: 27, highlight: true, event: 'ban' },
  { week: 'W7', value: 30, prev: 29, kpi: 28 },
  { week: 'W9', value: 32, prev: 30, kpi: 30, event: 'shop' },
  { week: 'W11', value: 36, prev: 32, kpi: 31 },
];

const platformBreakdown = [
  { name: 'Dribbble', percentage: '28.1%', value: '$44,072', color: 'bg-pink-500' },
  { name: 'Instagram', percentage: '14.1%', value: '$22,114', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { name: 'Google', percentage: '5.4%', value: '$8,469', color: 'bg-red-500' },
  { name: 'Other', percentage: '7.1%', value: '$11,125', color: 'bg-gray-400' },
];

const UserTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-8 gap-4 px-5 py-3 border-b border-gray-100 text-[11px] text-gray-400 font-medium uppercase tracking-wide">
        <div className="col-span-2"></div>
        <div>Sales</div>
        <div>Revenue</div>
        <div>Leads</div>
        <div>KPI</div>
        <div>W/L</div>
        <div></div>
      </div>

      {/* Table Rows */}
      {userData.map((user, index) => (
        <div key={index} className="grid grid-cols-8 gap-4 px-5 py-3 items-center border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition">
          {/* User */}
          <div className="flex items-center gap-3 col-span-2">
            <div className={`w-8 h-8 rounded-full overflow-hidden ring-2 ring-white shadow-sm`}>
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                alt={user.name}
                className="w-full h-full"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{user.name}</span>
          </div>

          {/* Sales Badge */}
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-md text-xs font-semibold text-white ${user.salesColor}`}>
              {user.sales}
            </span>
            <span className="text-sm text-gray-500">{user.leads}</span>
          </div>

          {/* Revenue */}
          <div className="text-sm font-semibold text-gray-900">{user.revenue}</div>

          {/* Leads */}
          <div className="text-sm text-gray-600">{user.leads}</div>

          {/* KPI */}
          <div className="text-sm text-gray-600">{user.kpi}</div>

          {/* Win Rate & W/L */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{user.winRate}</span>
            <span className="text-green-500 text-sm font-semibold">{user.w}</span>
            <span className="text-sm text-gray-400">{user.l}</span>
          </div>

          {/* Badges or expand icon */}
          <div className="flex items-center justify-end gap-2">
            {user.badges ? (
              <div className="flex gap-1">
                {user.badges.map((badge, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-gray-100 rounded-full text-[10px] text-gray-500 flex items-center gap-1"
                  >
                    {badge === 'Top sales' && <Flame className="w-3 h-3 text-orange-400" />}
                    {badge === 'Sales streak' && <TrendingUp className="w-3 h-3 text-red-400" />}
                    {badge === 'Top review' && <Star className="w-3 h-3 text-yellow-400" />}
                    {badge}
                  </span>
                ))}
              </div>
            ) : (
              <button data-action="Expand Row" className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-400 hover:bg-red-100 transition">
                <TrendingUp className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const WorkWithPlatforms = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-400 font-medium">Work with platforms</span>
        <div data-action="Work with platforms badge" className="flex items-center gap-2 bg-red-500/90 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm">
          <span className="bg-red-400 px-1.5 py-0.5 rounded text-[10px]">3</span>
          <span>$156,841</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div data-action="Dribbble tile" className="w-7 h-7 rounded-lg bg-pink-100 flex items-center justify-center">
          <span className="text-pink-500 text-sm">●</span>
        </div>
        <span className="text-sm text-gray-700 font-medium">Dribbble</span>
      </div>

      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-3xl font-bold text-gray-900">45.3%</span>
        <span className="text-xl text-gray-300 font-medium">$71,048</span>
      </div>

      {/* Platform Tiles */}
      <div className="grid grid-cols-2 gap-3">
            {platformBreakdown.map((platform, i) => (
          <div data-action={`Platform tile: ${platform.name}`} key={i} className="relative rounded-xl p-3 bg-white border border-gray-100 shadow-[inset_0_0_0_1px_#f3f4f6]">
            <div 
              className="absolute inset-0 opacity-40 rounded-xl pointer-events-none"
              style={{ backgroundImage: 'repeating-linear-gradient(135deg, #f3f4f6 0 6px, #ffffff 6px 12px)' }}
            />
            <div className="relative flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                {platform.name === 'Dribbble' && <span className="text-pink-500 text-sm">●</span>}
                {platform.name === 'Instagram' && <span className="text-pink-500 text-sm">◉</span>}
                {platform.name === 'Google' && <span className="text-red-500 text-sm">G</span>}
                {platform.name === 'Other' && <span className="text-gray-400 text-xs font-medium">Other</span>}
              </div>
              <div>
                <div className="text-[11px] text-gray-400">{platform.name}</div>
                <div className="text-xs font-semibold text-gray-700">{platform.percentage} <span className="text-gray-400 font-normal">{platform.value}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SalesDynamic = () => {
  return (
    <div className="bg-gradient-to-tr from-pink-50 via-rose-50/60 to-purple-50 rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-400 font-medium">Sales dynamic</span>
        <Maximize2 data-action="Maximize sales dynamic" className="w-4 h-4 text-gray-300 cursor-pointer hover:text-gray-500 transition" />
      </div>

      <div className="flex items-center gap-3 mb-3 text-[10px] text-gray-400">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f55]"></span> Revenue
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f0c]"></span> KPI
        </div>
      </div>

      <ResponsiveContainer width="100%" height={140}>
        <AreaChart data={salesDynamicData} margin={{ top: 6, right: 10, left: -10, bottom: 6 }}>
          <defs>
            <linearGradient id="pinkArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f55" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#f55" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} interval={0} />
          <Tooltip
            contentStyle={{ background: '#111827', border: 'none', borderRadius: 10, color: 'white', fontSize: 11, padding: '8px 10px' }}
            formatter={(val) => `${val}`}
          />
          <ReferenceLine y={26} stroke="#10b981" strokeWidth={6} opacity={0.25} strokeLinecap="round" />
          {/* faint previous period */}
          <Area
            type="monotone"
            dataKey="prev"
            stroke="#f55"
            strokeDasharray="4 4"
            strokeOpacity={0.25}
            fillOpacity={0}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#f55"
            strokeWidth={2.5}
            fill="url(#pinkArea)"
            dot={(props) => (props.payload.highlight ? <circle cx={props.cx} cy={props.cy} r={5} fill="#f55" stroke="white" strokeWidth={2} /> : null)}
            activeDot={{ r: 5, fill: '#f55', stroke: 'white', strokeWidth: 2 }}
          />
          <Line type="monotone" dataKey="kpi" stroke="#f0c" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
        </AreaChart>
      </ResponsiveContainer>

      {/* baseline bar with markers */}
      <div className="mt-2">
        <div className="h-2 rounded-full bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 right-0 bg-green-500/80" />
        </div>
        <div className="relative mt-2 flex justify-between px-2">
          {salesDynamicData.map((d, i) => {
            if (!d.event) return <span key={i}></span>;
            let pill = (
              <div className="h-6 min-w-[24px] px-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-[10px] flex items-center justify-center text-gray-600">{d.event}</div>
            );
            if (d.event === 'be') {
              pill = (
                <div data-action="Event: Behance" className="h-6 min-w-[26px] px-1.5 rounded-full bg-white shadow-sm border border-blue-100 text-[10px] flex items-center justify-center text-blue-600 font-semibold">Bē</div>
              );
            }
            if (d.event === 'ban') {
              pill = (
                <div data-action="Event: Stop" className="h-6 min-w-[24px] px-1.5 rounded-full bg-white shadow-sm border border-rose-200 text-[10px] flex items-center justify-center text-rose-500">⛔</div>
              );
            }
            if (d.event === 'shop') {
              pill = (
                <div data-action="Event: Shop" className="h-6 min-w-[24px] px-1.5 rounded-full bg-white shadow-sm border border-pink-200 text-[10px] flex items-center justify-center text-pink-500">🛍️</div>
              );
            }
            return (
              <div key={i} className="-mt-3">{pill}</div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-[#f55] font-semibold text-sm">+12%</span>
          <span className="text-[10px] text-gray-400">compared to prev period</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> $117,115
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span> $156,841
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f55]"></span> 45.3%
          </div>
        </div>
      </div>

      {/* Eren Y. row */}
      <div className="mt-3 flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eren%20Y." alt="Eren Y." className="w-full h-full" />
          </div>
          <span className="text-sm text-gray-700">Eren Y.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-700 text-sm font-medium">$117,115</span>
          <span className="px-2 py-1 rounded-md text-xs font-semibold text-white bg-yellow-500">22</span>
          <span className="text-sm text-gray-600">84</span>
          <span className="text-sm text-gray-600">0.79</span>
          <span className="text-sm text-gray-600">32%</span>
          <span className="text-green-600 text-sm font-semibold">7</span>
          <span className="text-sm text-gray-400">15</span>
        </div>
      </div>
    </div>
  );
};

export { UserTable, WorkWithPlatforms, SalesDynamic };

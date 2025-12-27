import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LabelList, CartesianGrid } from 'recharts';
import { Filter, MoreHorizontal } from 'lucide-react';

const platformData = [
  { name: 'Dribbble', value: 227459, percentage: 43, color: '#E91E63' },
  { name: 'Instagram', value: 142823, percentage: 27, color: '#E91E63' },
  { name: 'Behance', value: 89935, percentage: 11, color: '#1769FF' },
  { name: 'Google', value: 37028, percentage: 7, color: '#4285F4' },
];

const barChartData = [
  { month: 'Sep', revenue: 9901, leads: 120, highlightValue: 0 },
  { month: 'Oct', revenue: 11035, leads: 145, highlightValue: 11035 },
  { month: 'Nov', revenue: 9288, leads: 132, highlightValue: 0 },
];

const DealsByReferrer = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
            </div>
          </div>
        </div>
        <div data-action="Filters: Referrer mini" className="flex items-center gap-2 text-sm text-gray-500">
          <Filter className="w-4 h-4" />
          Filters
        </div>
      </div>

      <div className="space-y-3">
        {platformData.map((platform, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
              {platform.name === 'Dribbble' && <span className="text-pink-500 text-xs">●</span>}
              {platform.name === 'Instagram' && <span className="text-pink-500 text-xs">◉</span>}
              {platform.name === 'Behance' && <span className="text-blue-600 text-xs font-bold">Bē</span>}
              {platform.name === 'Google' && <span className="text-blue-500 text-xs">G</span>}
            </div>
            <span className="text-sm text-gray-700 w-20">{platform.name}</span>
            <span className="text-sm font-semibold text-gray-900">${platform.value.toLocaleString()}</span>
            <span className="text-xs text-gray-400 ml-auto">{platform.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DealsAmountChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-3 gap-0.5">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="w-1.5 h-3 bg-gray-300 rounded-sm"></div>
            ))}
          </div>
        </div>
        <div data-action="Filters: Deals mini" className="flex items-center gap-2 text-sm text-gray-500">
          <Filter className="w-4 h-4" />
          Filters
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        {['dribbble', 'behance', 'instagram', 'google'].map((icon, i) => (
          <div 
            key={i} 
            data-action={`Icon: ${icon}`}
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-pink-500 text-white' : 'bg-gray-100'}`}
          >
            <span className="text-xs">{icon.charAt(0).toUpperCase()}</span>
          </div>
        ))}
        <div data-action="Icon: more" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        Deals amount<br />
        <span className="text-gray-400">by referrer category</span> ▾
      </div>
    </div>
  );
};

const PlatformValue = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-100 shadow-sm rounded-lg px-3 py-2 text-xs">
          <div className="text-gray-500 mb-1">{label}</div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Revenue:</span>
            <span className="font-semibold text-gray-900">${data.revenue.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Leads:</span>
            <span className="font-semibold text-gray-900">{data.leads}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderBarLabel = (props) => {
    const { x, y, width, value, payload } = props;
    const label = `$${value.toLocaleString()}`;
    const fill = payload.highlightValue ? '#ef4444' : '#9CA3AF';
    return (
      <text x={x + width / 2} y={y - 6} textAnchor="middle" fill={fill} fontSize={11}>
        {label}
      </text>
    );
  };
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-400">Platform value</div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-gray-900">Dribbble</span>
            <span className="text-gray-400">▾</span>
          </div>
        </div>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button className="px-3 py-1 bg-white rounded text-sm font-medium shadow-sm">Revenue</button>
          <button className="px-3 py-1 text-sm text-gray-500">Leads</button>
          <button className="px-3 py-1 text-sm text-gray-500">W/L</button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Summary Card */}
        <div className="bg-red-500 rounded-xl p-4 text-white min-w-[140px]">
          <div className="text-xs opacity-80 mb-1">Average monthly</div>
          <div className="text-lg font-bold mb-3">Revenue<br />$16,552</div>
          <div className="text-sm mb-1">Leads<br /><span className="font-semibold">373</span> <span className="text-xs opacity-80">97/276</span></div>
          <div className="text-sm">Win/lose<br /><span className="font-semibold">16%</span> <span className="text-xs opacity-80">51/318</span></div>
        </div>

        {/* Bar Chart */}
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={barChartData} barCategoryGap={18}>
              <defs>
                <linearGradient id="barHighlight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f55" stopOpacity={1} />
                  <stop offset="100%" stopColor="#f55" stopOpacity={0.85} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#F3F4F6" strokeDasharray="3 3" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
              <Bar dataKey="revenue" fill="#E5E7EB" barSize={22} radius={[6, 6, 0, 0]}>
                <LabelList dataKey="revenue" content={renderBarLabel} />
              </Bar>
              <Bar dataKey="highlightValue" fill="url(#barHighlight)" barSize={22} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <DealsByReferrer />
      <DealsAmountChart />
      <div></div>
    </div>
  );
};

export { ChartsSection, PlatformValue };

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell, CartesianGrid, LabelList } from 'recharts';
import { ChevronDown } from 'lucide-react';

const barData = [
  { month: 'Sep', value: 6901, avatar: 'drake' },
  { month: 'Oct', value: 11035, avatar: 'mika', highlight: true },
  { month: 'Nov', value: 9288, avatar: 'bailey' },
];

const PlatformValueChart = () => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-white border border-pink-200 flex items-center justify-center text-pink-500 shadow-sm">
            <span className="text-lg">◉</span>
          </div>
          <div>
            <div className="text-[11px] text-gray-400">Platform value</div>
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
              Dribbble
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex bg-gray-100 rounded-2xl p-1">
          {['Revenue', 'Leads', 'W/L'].map((tab, idx) => (
            <button
              key={tab}
              data-action={`Tab: ${tab}`}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                idx === 0 ? 'bg-black text-white shadow-sm' : 'bg-white text-gray-600 hover:text-gray-800 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {/* Pink stats card */}
        <div className="bg-gradient-to-br from-[#f55] via-[#f55] to-[#e64040] text-white rounded-2xl rounded-tr-[44px] rounded-br-[44px] p-4 min-w-[170px] shadow-md">
          <div className="text-[11px] opacity-75">Average monthly</div>
          <div className="mt-3">
            <div className="text-[11px] opacity-80">Revenue</div>
            <div className="text-2xl font-bold leading-tight">$16,552</div>
          </div>
          <div className="mt-4">
            <div className="text-[11px] opacity-80">Leads</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold">373</span>
              <span className="text-[10px] opacity-80">97/276</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-[11px] opacity-80">Win/lose</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold">16%</span>
              <span className="text-[10px] opacity-80">51/318</span>
            </div>
          </div>
        </div>

        {/* Bars */}
        <div className="flex-1">
          <div className="flex items-center justify-end gap-3 mb-2 pr-2">
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <span className="w-2.5 h-2.5 rounded-sm bg-gray-200"></span> Previous
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#f55]"></span> Current
            </div>
          </div>

          <div className="relative bg-gray-50 rounded-2xl p-3">
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={barData} barSize={26} barGap={14} margin={{ top: 20, right: 36, left: -10, bottom: 10 }}>
                <defs>
                  <pattern id="barPattern" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(135)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="#d1d5db" strokeWidth="2" />
                  </pattern>
                </defs>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9CA3AF' }} />
                <YAxis
                  orientation="right"
                  ticks={[14500, 11000, 7500, 4000]}
                  domain={[0, 15000]}
                  tickFormatter={(v) => `$${v.toLocaleString()}`}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#d1d5db' }}
                />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ background: '#111827', border: 'none', borderRadius: 10, color: 'white', fontSize: 11, padding: '8px 10px' }}
                  formatter={(val) => `$${val.toLocaleString()}`}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {barData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.highlight ? 'url(#barPattern)' : '#E5E7EB'} />
                  ))}
                  <LabelList
                    dataKey="value"
                    content={(props) => {
                      const { x, y, width, value, payload } = props;
                      const label = `$${value.toLocaleString()}`;
                      return (
                        <g>
                          <foreignObject x={x + width / 2 - 26} y={y - 26} width="52" height="20">
                            <div className="flex items-center justify-center h-5 px-2 rounded-full bg-[#f55] text-white text-[11px] font-semibold shadow-sm">
                              {label}
                            </div>
                          </foreignObject>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Avatars */}
          <div className="flex justify-around px-6 mt-3">
            {barData.map((item, idx) => (
              <div data-action={`Avatar: ${item.avatar}`} key={idx} className="w-7 h-7 rounded-full bg-white ring-2 ring-white shadow-sm overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.avatar}`}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformValueChart;

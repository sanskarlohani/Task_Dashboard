import React from 'react';
import { TrendingUp, TrendingDown, ChevronRight, Star } from 'lucide-react';

const RevenueSection = () => {
  return (
    <div className="mb-6">
      {/* Title and Timeframe */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">New report</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
            </div>
            <span className="text-sm text-gray-500">Timeframe</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-700 font-medium cursor-pointer hover:text-gray-900">
            <span>Sep 1 - Nov 30, 2023</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>

      {/* Revenue Header */}
      <div className="text-sm text-gray-400 mb-2 font-medium">Revenue</div>
      
      {/* Main Stats Row */}
      <div className="flex items-start gap-6">
        {/* Big Revenue Number */}
        <div className="flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900">$528,976</span>
            <span className="text-2xl text-gray-300 font-light">.82</span>
            {/* red percent pill */}
            <span className="flex items-center gap-1 text-white text-xs bg-[#f55] px-2 py-1 rounded-full font-medium ml-2">
              <TrendingUp className="w-3 h-3 text-white" />
              7.9%
            </span>
            {/* red amount pill */}
            <span className="text-white text-xs bg-[#f55] px-2 py-1 rounded-full font-semibold">$27,335.09</span>
          </div>
          <div className="text-sm text-gray-400 mt-2 flex items-center gap-1">
            vs prev. $501,641.73  Jun 1 - Aug 31, 2023
            <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-3 ml-auto">
          {/* Top Sales Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 min-w-[130px]">
            <div className="text-xs text-gray-400 mb-1">Top sales</div>
            <div className="text-3xl font-bold text-gray-900">72</div>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-yellow-100 ring-2 ring-yellow-200">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mikasa"
                  alt="Mikasa"
                  className="w-full h-full"
                />
              </div>
              <span className="text-sm text-gray-600 font-medium">Mikasa</span>
              <ChevronRight className="w-4 h-4 text-gray-300 ml-auto" />
            </div>
          </div>

          {/* Best Deal Card (dark) */}
          <div className="bg-gray-900 text-white rounded-2xl p-4 shadow-sm min-w-[160px]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-300">Best deal</span>
              <Star className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-2xl font-bold">$42,300</div>
            <div className="text-sm text-gray-200 mt-2 font-medium">Rolf Inc.</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-4 h-4 rounded bg-gray-800 flex items-center justify-center">
                <span className="text-[10px] text-gray-400">◆</span>
              </div>
              <span className="text-xs text-gray-400">5</span>
            </div>
          </div>

          {/* Deals mini-card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 min-w-[110px]">
            <div className="text-xs text-gray-400 mb-1">Deals</div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm font-semibold">256</div>
              <div className="text-xs text-gray-400">↑ 5</div>
            </div>
          </div>

          {/* Value mini-card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-pink-200 min-w-[110px]">
            <div className="text-xs text-gray-400 mb-1">Value</div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded-lg bg-[#f55] text-white text-sm font-semibold">528k</div>
              <div className="text-xs text-[#f55] flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> 7.9%
              </div>
            </div>
          </div>

          {/* Win Rate mini-card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 min-w-[110px]">
            <div className="text-xs text-gray-400 mb-1">Win rate</div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded-lg bg-gray-100 text-gray-400 text-sm font-semibold">44%</div>
              <div className="text-xs text-red-500 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" /> 1.2%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color dots row */}
      <div className="flex items-center gap-3 mt-5">
        {[{
          color:'bg-green-500', amount:'$209,633', pct:'39.63%'
        },{
          color:'bg-gray-300', amount:'$156,841', pct:'29.65%'
        },{
          color:'bg-yellow-400', amount:'$117,115', pct:'22.14%'
        },{
          color:'bg-red-400', amount:'$45,386', pct:'8.58%'
        }].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-full shadow-sm">
            <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
            <span className="text-sm font-medium text-gray-700">{item.amount}</span>
            <span className="text-xs text-gray-400">{item.pct}</span>
          </div>
        ))}
        <button className="ml-auto px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition shadow-sm">Details</button>
      </div>
    </div>
  );
};

export default RevenueSection;

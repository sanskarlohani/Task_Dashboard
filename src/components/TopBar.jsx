import React from 'react';
import { Search, Menu, Plus } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-60 right-0 z-50 bg-[#f4efef] px-6 py-3">
      <div className="flex items-center justify-between max-w-full">
        {/* Search */}
        <div className="relative flex-1 max-w-[820px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder='Try searching "insights"'
            className="pl-9 pr-4 h-10 bg-white rounded-full text-sm w-full focus:outline-none shadow-sm border border-gray-100 placeholder:text-gray-400"
          />
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-2 ml-6">
          {/* grouped capsule */}
          <div className="flex items-center gap-2 bg-white/90 border border-gray-100 rounded-full px-2 py-1 shadow-sm">
            <button data-action="Menu" className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-50">
              <Menu className="w-4 h-4 text-gray-500" />
            </button>
            <div data-action="Avatar" className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white shadow">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" 
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* pink add */}
          <button data-action="Add" className="w-9 h-9 rounded-full bg-[#e11d48] text-white flex items-center justify-center border-4 border-white shadow-md hover:bg-[#f43f5e] transition">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

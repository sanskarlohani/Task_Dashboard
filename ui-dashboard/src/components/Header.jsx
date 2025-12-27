import React from 'react';
import { Plus, Download, Upload, Shuffle } from 'lucide-react';

const users = [
  { name: 'Armin A.', color: 'bg-gray-100', textColor: 'text-gray-700', borderColor: 'border-gray-200' },
  { name: 'Eren Y.', color: 'bg-red-50', textColor: 'text-red-500', borderColor: 'border-red-100' },
  { name: 'Mikasa A.', color: 'bg-yellow-50', textColor: 'text-yellow-600', borderColor: 'border-yellow-100' },
];

const Header = () => {
  return (
    <header className="relative px-6 pt-4 pb-3 overflow-hidden">
      {/* User tabs row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Add user button */}
          <button data-action="Add User" className="w-9 h-9 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition">
            <Plus className="w-4 h-4 text-gray-400" />
          </button>
          
          {/* User pills */}
          {users.map((user, index) => (
            <button 
              key={index}
              data-action={`User: ${user.name}`}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${user.color} ${user.textColor} text-sm font-medium border ${user.borderColor} hover:shadow-sm transition`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white ring-1 ring-gray-100">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                  alt={user.name}
                  className="w-full h-full"
                />
              </div>
              {user.name}
            </button>
          ))}
          
          {/* C avatar */}
          <div data-action="Brand Avatar" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-semibold shadow-sm">
            C
          </div>
        </div>

        {/* Action buttons - matching design icons */}
        <div className="flex items-center gap-1">
          {/* Shuffle/Connect icon */}
          <button data-action="Shuffle" className="p-2 hover:bg-gray-50 rounded-lg transition">
            <Shuffle className="w-4 h-4 text-gray-400" />
          </button>
          {/* Download icon */}
          <button data-action="Download" className="p-2 hover:bg-gray-50 rounded-lg transition">
            <Download className="w-4 h-4 text-gray-400" />
          </button>
          {/* Upload/Export icon */}
          <button data-action="Upload" className="p-2 hover:bg-gray-50 rounded-lg transition">
            <Upload className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

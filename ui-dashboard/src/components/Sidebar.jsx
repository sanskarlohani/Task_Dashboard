import React, { useState } from 'react';
import { 
  Home, 
  Target, 
  LayoutDashboard, 
  FileText, 
  Settings,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  FolderOpen,
  Plus,
  Command,
  CheckSquare
} from 'lucide-react';

const Sidebar = () => {
  const [sharedExpanded, setSharedExpanded] = useState(true);
  const [shareWithMeExpanded, setShareWithMeExpanded] = useState(true);
  const [myReportsExpanded, setMyReportsExpanded] = useState(true);

  return (
    <div className="flex h-screen fixed left-0 top-0">
      {/* Left Icon Rail */}
      <div className="w-12 bg-[#f4efef] border-r border-gray-100 flex flex-col items-center py-4">
        {/* Logo */}
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mb-6">
          <span className="text-white font-bold text-lg">C</span>
        </div>

        {/* Icon Navigation */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <button data-action="Home" className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition">
            <Home className="w-5 h-5" />
          </button>
          
          <button data-action="Plus Tile" className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-500 transition">
            <div className="w-5 h-5 rounded border-2 border-red-400 flex items-center justify-center">
              <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
            </div>
          </button>
          
          <button data-action="Docs" className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition">
            <FileText className="w-5 h-5" />
          </button>
          
          <button data-action="Command" className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition">
            <Command className="w-5 h-5" />
          </button>
          
          <button data-action="Tasks" className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition">
            <CheckSquare className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-col items-center gap-3 mt-auto">
          <button data-action="Alert" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
            <div className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
            </div>
          </button>
          <button data-action="Settings" className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Sidebar Content */}
      <div className="w-48 bg-[#f4efef] border-r border-gray-100 flex flex-col overflow-hidden">
        {/* Logo Text */}
        <div className="px-4 py-4 flex items-center gap-1">
          <span className="font-semibold text-gray-800 text-sm">Codename.com</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </div>

        {/* Navigation Content */}
        <nav className="flex-1 overflow-y-auto px-2 text-[13px]">
          {/* Top Items */}
          <div className="space-y-0.5 mb-3">
            <div data-action="Starred" className="flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 text-gray-500">
              <Star className="w-4 h-4" />
              <span>Starred</span>
            </div>
            <div data-action="Recent" className="flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Recent</span>
            </div>
            <div data-action="Sales list" className="flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600 font-medium ml-2">
              <span>Sales list</span>
            </div>
            <div data-action="Goals" className="flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600">
              <Target className="w-4 h-4" />
              <span>Goals</span>
            </div>
            <div data-action="Dashboard" className="flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
              <Plus className="w-3.5 h-3.5 ml-auto text-gray-400" />
            </div>
          </div>

          {/* Codename Section */}
          <div className="mb-3">
            <div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 font-medium">
              <span>Codename</span>
            </div>
          </div>

          {/* Shared with me */}
          <div className="mb-3">
            <button 
              onClick={() => setSharedExpanded(!sharedExpanded)}
              data-action="Toggle: Shared with me"
              className="flex items-center gap-2 px-2 py-1.5 text-gray-500 w-full hover:bg-gray-50 rounded-md"
            >
              {sharedExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
              <span>Shared with me</span>
            </button>
            
            {sharedExpanded && (
              <div className="relative ml-4 mt-1">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                <div className="space-y-0.5">
                  <div data-action="Cargo2go" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600">
                    <span className="w-3 h-px bg-gray-200"></span>
                    <span>Cargo2go</span>
                  </div>
                  <div data-action="Cloud3r" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600">
                    <span className="w-3 h-px bg-gray-200"></span>
                    <span>Cloud3r</span>
                    <span className="ml-auto bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium">2</span>
                  </div>
                  <div data-action="Idioma" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600">
                    <span className="w-3 h-px bg-gray-200"></span>
                    <span>Idioma</span>
                  </div>
                  <div data-action="Syllables" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600">
                    <span className="w-3 h-px bg-gray-200"></span>
                    <span>Syllables</span>
                  </div>
                  <div data-action="x-0b" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-600">
                    <span className="w-3 h-px bg-gray-200"></span>
                    <span>x-0b</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Reports Section */}
          <div className="mb-3">
            <div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 font-medium">
              <span>Reports</span>
              <Plus className="w-3.5 h-3.5 ml-auto text-gray-400" />
            </div>

            {/* Share with me subsection */}
            <div className="mt-1">
              <button 
                onClick={() => setShareWithMeExpanded(!shareWithMeExpanded)}
                data-action="Toggle: Share with me"
                className="flex items-center gap-2 px-2 py-1 text-gray-400 text-xs w-full hover:bg-gray-50 rounded-md"
              >
                {shareWithMeExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
                <span>Share with me</span>
              </button>
              
              {shareWithMeExpanded && (
                <div className="relative ml-5 mt-0.5">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                  <div className="space-y-0.5">
                    <div data-action="Deals by user" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-500 text-xs">
                      <span className="w-3 h-px bg-gray-200"></span>
                      <span>Deals by user</span>
                    </div>
                    <div data-action="Deal duration (shared)" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-500 text-xs">
                      <span className="w-3 h-px bg-gray-200"></span>
                      <span>Deal duration</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* My reports subsection */}
            <div className="mt-1">
              <button 
                onClick={() => setMyReportsExpanded(!myReportsExpanded)}
                data-action="Toggle: My reports"
                className="flex items-center gap-2 px-2 py-1 text-gray-400 text-xs w-full hover:bg-gray-50 rounded-md"
              >
                {myReportsExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
                <span>My reports</span>
              </button>
              
              {myReportsExpanded && (
                <div className="relative ml-5 mt-0.5">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                  <div className="space-y-0.5">
                    <div data-action="Emails received" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-500 text-xs">
                      <span className="w-3 h-px bg-gray-200"></span>
                      <span>Emails received</span>
                    </div>
                    <div data-action="Deal duration (my)" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-500 text-xs">
                      <span className="w-3 h-px bg-gray-200"></span>
                      <span>Deal duration</span>
                    </div>
                    <div data-action="New report" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-red-500 text-xs font-medium">
                      <span className="w-3 h-px bg-gray-200"></span>
                      <span>New report</span>
                    </div>
                    <div data-action="Analytics" className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50 text-gray-500 text-xs">
                      <span className="w-3 h-px bg-gray-200"></span>
                      <span>Analytics</span>
                      <span className="ml-auto bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-medium">7</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Manage folders */}
          <div data-action="Manage folders" className="px-2 py-1.5 text-gray-400 text-xs flex items-center gap-2 cursor-pointer hover:text-gray-600 mt-2">
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Manage folders</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

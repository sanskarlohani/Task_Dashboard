import React from 'react';

const ActionToast = ({ message, visible }) => {
  return (
    <div
      className={`pointer-events-none absolute top-3 right-3 transition-all duration-200 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/80 text-white text-xs shadow-lg">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400" />
        <span>{message || 'Action triggered'}</span>
      </div>
    </div>
  );
};

export default ActionToast;

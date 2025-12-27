import React from "react";

export const PageHeader = ({ title, subtitle, children }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div>
        {title && <h1 className="text-xl font-semibold text-gray-800">{title}</h1>}
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
  );
}
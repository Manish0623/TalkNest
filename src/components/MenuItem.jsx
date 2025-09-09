/* eslint-disable no-unused-vars */
// MenuItem.jsx
import React from 'react';
import { menuItemsData } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ setSideBarOpen }) => {
  return (
    <div className="px-6 text-gray-600 space-y-2 font-medium">
      {menuItemsData.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          onClick={() => setSideBarOpen(false)}
          className={({ isActive }) =>
            `px-2 flex items-center gap-3 rounded-xl ${
              isActive ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-50'
            }`
          }
        >
          <Icon className="w-5 h-5" />
          {label}
        </NavLink>
      ))}
    </div>
  );
};
export default MenuItem;


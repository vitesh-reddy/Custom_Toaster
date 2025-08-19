import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomToaster } from '../utils/CustomToast';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/installation', label: 'Installation', icon: '⚙️' },
    { path: '/demo', label: 'Demo', icon: '🚀' },
    { path: '/api', label: 'API Reference', icon: '📖' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <CustomToaster />
      
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
                🔔 CustomToast
              </div>
              <span className="text-gray-500 text-sm hidden sm:block">by KL Vitesh Reddy</span>
            </div>
            
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="hidden sm:inline">{item.icon} </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>Made with ❤️ by <span className="font-semibold text-gray-700">KL Vitesh Reddy</span></p>
            <p className="mt-1">Built on top of react-hot-toast</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

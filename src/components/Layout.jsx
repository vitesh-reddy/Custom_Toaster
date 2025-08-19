import { Link, useLocation } from 'react-router-dom';
import { CustomToaster } from '../utils/CustomToast';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/guide', label: 'Guide' },
    { path: '/playground', label: 'Playground' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 font-serif">
      <CustomToaster />
      
      <nav className="backdrop-blur-lg bg-white/70 border-b border-orange-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-18">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
                <span className="text-white text-xl">🔔</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  CustomToast
                </div>
                <div className="text-xs text-gray-500">by Vitesh</div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-orange-100 text-orange-700 shadow-sm'
                      : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="bg-gradient-to-r from-orange-100 to-red-100 border-t border-orange-200/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <div className="text-orange-600 font-medium">
            Made with care by <span className="text-orange-700 font-bold">KL Vitesh Reddy</span>
          </div>
          <div className="text-sm text-orange-500 mt-1">
            Built on top of react-hot-toast
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

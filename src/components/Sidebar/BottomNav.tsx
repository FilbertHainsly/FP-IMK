import { useLocation, useNavigate } from 'react-router-dom';
import { HelpCircle, Clock, User, Settings } from 'lucide-react';
import './BottomNav.css';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { path: '/dashboard', label: 'Bantuan', icon: <HelpCircle size={22} /> },
  { path: '/riwayat', label: 'Riwayat', icon: <Clock size={22} /> },
  { path: '/profil', label: 'Profil', icon: <User size={22} /> },
  { path: '/setelan', label: 'Setelan', icon: <Settings size={22} /> },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname.startsWith('/bantuan');
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav" id="bottom-navigation">
      {navItems.map((item) => (
        <button
          key={item.path}
          id={`nav-${item.label.toLowerCase()}`}
          className={`bottom-nav__item ${isActive(item.path) ? 'bottom-nav__item--active' : ''}`}
          onClick={() => navigate(item.path)}
          aria-label={item.label}
          aria-current={isActive(item.path) ? 'page' : undefined}
        >
          <span className="bottom-nav__icon">{item.icon}</span>
          <span className="bottom-nav__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

import { Outlet, useNavigate } from 'react-router-dom';
import { User as UserIcon } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import BottomNav from '../components/Sidebar/BottomNav';
import { useAuth } from '../contexts/AuthContext';
import './MainLayout.css';

export default function MainLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const rightElement = user?.role === 'tunanetra' ? (
    <button 
      onClick={() => navigate('/profil')}
      className="navbar__profile-btn"
      aria-label="Profil"
      style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
    >
      <UserIcon size={20} />
    </button>
  ) : undefined;

  const roleBadge = user?.role === 'relawan' ? 'relawan' : undefined;

  return (
    <div className="main-layout">
      <Navbar roleBadge={roleBadge} rightElement={rightElement} />
      <main className="main-layout__content">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}

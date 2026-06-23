import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import BottomNav from '../components/Sidebar/BottomNav';
import { useAuth } from '../contexts/AuthContext';
import './MainLayout.css';

export default function MainLayout() {
  const { user } = useAuth();

  return (
    <div className="main-layout">
      <Navbar roleBadge={user?.role} />
      <main className="main-layout__content">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}

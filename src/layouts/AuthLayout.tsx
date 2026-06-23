import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout__container animate-fade-in">
        <Outlet />
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Splash.css';

export default function Splash() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animationDone) return;

    if (isAuthenticated && user) {
      if (!user.isVerified) {
        navigate('/menunggu-verifikasi', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    } else {
      navigate('/login', { replace: true });
    }
  }, [animationDone, isAuthenticated, user, navigate]);

  return (
    <div className="splash" id="splash-screen">
      <div className="splash__content">
        <div className="splash__logo-container">
          <div className="splash__logo-ring" />
          <div className="splash__logo-ring splash__logo-ring--2" />
          <div className="splash__icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="10" fill="#fae500" />
              <circle cx="24" cy="24" r="16" stroke="#fae500" strokeWidth="2" opacity="0.4" />
              <circle cx="24" cy="24" r="22" stroke="#fae500" strokeWidth="1" opacity="0.2" />
            </svg>
          </div>
        </div>
        <h1 className="splash__title brand-text">TEMANNETRA</h1>
        <div className="splash__divider" />
        <p className="splash__tagline">Asisten Visual untuk Tunanetra</p>
        <div className="splash__loader">
          <div className="splash__loader-bar" />
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  showBack?: boolean;
  onBack?: () => void;
  rightElement?: React.ReactNode;
  roleBadge?: 'relawan' | 'tunanetra';
}

export default function Navbar({ showBack = false, onBack, rightElement, roleBadge }: NavbarProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="navbar" id="navbar-header">
      <div className="navbar__left">
        {showBack ? (
          <button className="navbar__back" onClick={handleBack} aria-label="Kembali">
            <ArrowLeft size={20} />
          </button>
        ) : (
          <div className="navbar__spacer" />
        )}
      </div>

      <div className="navbar__center">
        <h1 className="navbar__brand brand-text">TEMANNETRA</h1>
      </div>

      <div className="navbar__right">
        {roleBadge && (
          <div className={`navbar__badge navbar__badge--${roleBadge}`}>
            <div className="navbar__badge-dot" />
            <span>{roleBadge === 'relawan' ? 'RELAWAN' : 'TUNANETRA'}</span>
          </div>
        )}
        {rightElement && rightElement}
        {!roleBadge && !rightElement && <div className="navbar__spacer" />}
      </div>
    </header>
  );
}

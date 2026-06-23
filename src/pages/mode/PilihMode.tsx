import { useNavigate } from 'react-router-dom';
import { Eye, Heart } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/Navbar/Navbar';
import './PilihMode.css';

export default function PilihMode() {
  const navigate = useNavigate();
  const { setUserRole } = useAuth();

  const handleSelect = (role: 'tunanetra' | 'relawan') => {
    setUserRole(role);
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="pilih-mode" id="pilih-mode-page">
      <Navbar />
      <div className="pilih-mode__content">
        <div className="pilih-mode__header animate-fade-in">
          <h2>Pilih Mode</h2>
          <p>Anda masuk sebagai?</p>
        </div>

        <button className="pilih-mode__option pilih-mode__option--tunanetra animate-fade-in-up" onClick={() => handleSelect('tunanetra')}>
          <Eye size={28} />
          <div className="pilih-mode__option-text">
            <span className="pilih-mode__option-title">Tunanetra</span>
            <span className="pilih-mode__option-desc">Minta bantuan & AI visual</span>
          </div>
        </button>

        <button className="pilih-mode__option pilih-mode__option--relawan animate-fade-in-up" style={{ animationDelay: '0.1s' }} onClick={() => handleSelect('relawan')}>
          <Heart size={28} />
          <div className="pilih-mode__option-text">
            <span className="pilih-mode__option-title">Relawan</span>
            <span className="pilih-mode__option-desc">Bantu pengguna tunanetra</span>
          </div>
        </button>
      </div>
    </div>
  );
}

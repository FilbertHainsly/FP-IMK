import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Lock, AtSign } from 'lucide-react';
import { useAuth, type UserRole } from '../../contexts/AuthContext';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('tunanetra');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Semua field harus diisi');
      return;
    }
    try {
      await register(name, email, password, role);
      navigate('/verifikasi-ktp', { replace: true });
    } catch {
      setError('Registrasi gagal. Silakan coba lagi.');
    }
  };

  return (
    <div className="register-page" id="register-page">
      <Link to="/login" className="register-page__back">
        <ArrowLeft size={16} />
        <span>Kembali</span>
      </Link>

      <h2 className="register-page__title">Sign Up</h2>

      <form className="register-page__form" onSubmit={handleSubmit}>
        {error && <div className="register-page__error">{error}</div>}

        <Input
          id="register-name"
          placeholder="Nama Lengkap"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<User size={18} />}
          required
        />

        <Input
          id="register-username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<AtSign size={18} />}
        />

        <Input
          id="register-email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail size={18} />}
          required
        />

        <Input
          id="register-password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock size={18} />}
          required
        />

        <div className="register-page__role">
          <label className="register-page__role-label">Daftar sebagai:</label>
          <div className="register-page__role-options">
            <button
              type="button"
              className={`register-page__role-btn ${role === 'tunanetra' ? 'register-page__role-btn--active' : ''}`}
              onClick={() => setRole('tunanetra')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              </svg>
              <span>Tunanetra</span>
            </button>
            <button
              type="button"
              className={`register-page__role-btn register-page__role-btn--relawan ${role === 'relawan' ? 'register-page__role-btn--active-relawan' : ''}`}
              onClick={() => setRole('relawan')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>Relawan</span>
            </button>
          </div>
        </div>

        <Button
          id="register-submit"
          type="submit"
          variant="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? 'Memproses...' : 'Daftar'}
        </Button>
      </form>
    </div>
  );
}

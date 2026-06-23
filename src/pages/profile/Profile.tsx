import { useNavigate } from 'react-router-dom';
import { Award, Calendar, Star, Edit } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="profile" id="profile-page">
      <div className="profile__hero animate-fade-in">
        <div className="profile__avatar">
          <span className="profile__avatar-text">{user?.name?.[0] || 'U'}</span>
        </div>
        <h2 className="profile__name">{user?.name || 'User'}</h2>
        <p className="profile__email">{user?.email || 'user@email.com'}</p>
        <div className="profile__role-badge">{user?.role === 'relawan' ? '🤝 Relawan Aktif' : '👁️ Tunanetra'}</div>
      </div>

      <Card padding="md" className="profile__stats animate-fade-in-up">
        <div className="profile__stat">
          <Award size={18} className="text-primary" />
          <div>
            <span className="profile__stat-value">47</span>
            <span className="profile__stat-label">Total Bantuan</span>
          </div>
        </div>
        <div className="profile__stat">
          <Star size={18} className="text-primary" />
          <div>
            <span className="profile__stat-value">4.9 ★</span>
            <span className="profile__stat-label">Rating</span>
          </div>
        </div>
        <div className="profile__stat">
          <Calendar size={18} className="text-primary" />
          <div>
            <span className="profile__stat-value">{user?.joinedDate || 'Mar 2024'}</span>
            <span className="profile__stat-label">Bergabung</span>
          </div>
        </div>
      </Card>

      <Card padding="md" className="profile__info animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h3>Informasi Pribadi</h3>
        <div className="profile__info-row">
          <span>Nama Lengkap</span>
          <span>{user?.name || 'User TemanNetra'}</span>
        </div>
        <div className="profile__info-row">
          <span>Email</span>
          <span>{user?.email || 'user@email.com'}</span>
        </div>
        <div className="profile__info-row">
          <span>Status</span>
          <span className="text-success font-bold">Terverifikasi</span>
        </div>
      </Card>

      <Button id="btn-edit-profile" variant="outline" fullWidth icon={<Edit size={16} />} onClick={() => navigate('/profil/edit')}>
        Edit Profil
      </Button>
    </div>
  );
}

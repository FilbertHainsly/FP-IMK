import { useNavigate } from 'react-router-dom';
import { Bell, Moon, Volume2, Shield, HelpCircle, LogOut, ChevronRight, Globe } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/Button/Button';
import './Settings.css';

interface SettingsItem {
  icon: React.ReactNode;
  label: string;
  value?: string;
}

interface SettingsGroup {
  title: string;
  items: SettingsItem[];
}

export default function Settings() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => { logout(); navigate('/login', { replace: true }); };

  const settingsGroups: SettingsGroup[] = [
    {
      title: 'Preferensi',
      items: [
        { icon: <Bell size={18} />, label: 'Notifikasi', value: 'Aktif' },
        { icon: <Moon size={18} />, label: 'Mode Gelap', value: 'Aktif' },
        { icon: <Volume2 size={18} />, label: 'Suara & Getaran', value: 'Aktif' },
        { icon: <Globe size={18} />, label: 'Bahasa', value: 'Indonesia' },
      ],
    },
    {
      title: 'Lainnya',
      items: [
        { icon: <Shield size={18} />, label: 'Keamanan Akun' },
        { icon: <HelpCircle size={18} />, label: 'Pusat Bantuan' },
      ],
    },
  ];

  return (
    <div className="settings" id="settings-page">
      <div className="settings__title animate-fade-in">
        <h2>Setelan</h2>
      </div>

      {settingsGroups.map((group, gi) => (
        <div key={group.title} className="settings__group animate-fade-in-up" style={{ animationDelay: `${gi * 0.08}s` }}>
          <h3 className="settings__group-title">{group.title}</h3>
          <div className="settings__group-items">
            {group.items.map((item) => (
              <button key={item.label} className="settings__item">
                <span className="settings__item-icon">{item.icon}</span>
                <span className="settings__item-label">{item.label}</span>
                <span className="settings__item-right">
                  {item.value && <span className="settings__item-value">{item.value}</span>}
                  <ChevronRight size={16} />
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="settings__logout animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <Button id="btn-logout" variant="danger" fullWidth icon={<LogOut size={16} />} onClick={handleLogout}>
          Keluar dari Akun
        </Button>
      </div>
    </div>
  );
}

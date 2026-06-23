import { useState } from 'react';
import { Bell, Volume2, Mail, MapPin, Radio, Moon, Globe, ChevronRight } from 'lucide-react';
import './Settings.css';

interface SettingsItem {
  icon: React.ReactNode;
  label: string;
  description?: string;
  id: string;
  type?: 'toggle' | 'link';
  value?: string;
}

interface SettingsGroup {
  title: string;
  items: SettingsItem[];
}

export default function Settings() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    'notif_bantuan': true,
    'notif_suara': true,
    'notif_email': false,
    'privasi_lokasi': true,
    'privasi_online': true,
    'tampilan_gelap': false,
  });

  const handleToggle = (id: string, type: 'toggle' | 'link' = 'toggle') => {
    if (type === 'toggle') {
      setToggles(prev => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const settingsGroups: SettingsGroup[] = [
    {
      title: 'Notifikasi',
      items: [
        { id: 'notif_bantuan', icon: <Bell size={18} />, label: 'Permintaan Bantuan Baru', description: 'Notif saat ada tiket baru di sekitar Anda' },
        { id: 'notif_suara', icon: <Volume2 size={18} />, label: 'Notifikasi Suara', description: 'Suara saat menerima notifikasi' },
        { id: 'notif_email', icon: <Mail size={18} />, label: 'Kirim ke Email', description: 'Ringkasan bantuan via email' },
      ],
    },
    {
      title: 'Privasi & Lokasi',
      items: [
        { id: 'privasi_lokasi', icon: <MapPin size={18} />, label: 'Bagikan Lokasi', description: 'Diperlukan untuk menemukan pengguna yang membutuhkan' },
        { id: 'privasi_online', icon: <Radio size={18} />, label: 'Status Online', description: 'Tampilkan status tersedia ke pengguna' },
      ],
    },
    {
      title: 'Tampilan',
      items: [
        { id: 'tampilan_gelap', icon: <Moon size={18} />, label: 'Mode Gelap', description: 'Aktif secara default untuk aksesibilitas' },
        { id: 'tampilan_bahasa', type: 'link', value: 'Indonesia', icon: <Globe size={18} />, label: 'Bahasa' },
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
              <div key={item.label} className="settings__item" onClick={() => handleToggle(item.id, item.type)}>
                <span className="settings__item-icon">{item.icon}</span>
                <div className="settings__item-text-container">
                  <span className="settings__item-label">{item.label}</span>
                  {item.description && <span className="settings__item-description">{item.description}</span>}
                </div>
                <span className="settings__item-right" onClick={(e) => { if(item.type !== 'link') e.stopPropagation(); }}>
                  {item.type === 'link' ? (
                    <>
                      {item.value && <span className="settings__item-value">{item.value}</span>}
                      <ChevronRight size={16} />
                    </>
                  ) : (
                    <label className="settings__toggle">
                      <input 
                        type="checkbox" 
                        checked={toggles[item.id]} 
                        onChange={() => handleToggle(item.id)} 
                      />
                      <span className="settings__toggle-slider"></span>
                    </label>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

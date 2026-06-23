import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './EditProfile.css';

export default function EditProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => { navigate('/profil', { replace: true }); };

  return (
    <div className="edit-profile" id="edit-profile-page">
      <Navbar showBack />
      <div className="edit-profile__content">
        <div className="edit-profile__avatar animate-fade-in-scale">
          <span>{name[0] || 'U'}</span>
          <button className="edit-profile__avatar-edit">📷</button>
        </div>
        <div className="edit-profile__form animate-fade-in-up">
          <Input id="edit-name" label="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} icon={<User size={18} />} />
          <Input id="edit-email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} icon={<Mail size={18} />} type="email" />
          <Input id="edit-phone" label="Nomor Telepon" value={phone} onChange={(e) => setPhone(e.target.value)} icon={<Phone size={18} />} placeholder="08xxxxxxxxxx" />
          <Input id="edit-address" label="Alamat" value={address} onChange={(e) => setAddress(e.target.value)} icon={<MapPin size={18} />} placeholder="Kota, Provinsi" />
          <Button id="save-profile" variant="primary" fullWidth onClick={handleSave}>Simpan Perubahan</Button>
          <Button variant="ghost" fullWidth onClick={() => navigate(-1)}>Batal</Button>
        </div>
      </div>
    </div>
  );
}

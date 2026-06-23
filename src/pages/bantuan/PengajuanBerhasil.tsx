import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Bell } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './PengajuanBerhasil.css';

export default function PengajuanBerhasil() {
  const navigate = useNavigate();
  const ticketId = `TN-${Math.floor(Math.random() * 999).toString().padStart(3, '0')}`;

  return (
    <div className="pengajuan-berhasil" id="pengajuan-berhasil-page">
      <Navbar />
      <div className="pengajuan-berhasil__content">
        <div className="pengajuan-berhasil__icon animate-fade-in-scale">
          <CheckCircle size={56} />
        </div>

        <div className="pengajuan-berhasil__header animate-fade-in-up">
          <h2>Tiket Dibuat!</h2>
          <p>Permintaan bantuan Anda telah dikirim</p>
        </div>

        <Card padding="md" className="pengajuan-berhasil__info animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="pengajuan-berhasil__row">
            <span className="pengajuan-berhasil__label">ID TIKET</span>
            <span className="pengajuan-berhasil__value text-primary">#{ticketId}</span>
          </div>
          <div className="pengajuan-berhasil__row">
            <span className="pengajuan-berhasil__label-sm">Jenis Bantuan</span>
            <span className="pengajuan-berhasil__value-sm">Bantuan Relawan</span>
          </div>
          <div className="pengajuan-berhasil__row">
            <span className="pengajuan-berhasil__label-sm">Status</span>
            <span className="pengajuan-berhasil__value-sm text-primary font-bold">Menunggu</span>
          </div>
        </Card>

        <div className="pengajuan-berhasil__waiting animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="pengajuan-berhasil__dots">
            <span className="pengajuan-berhasil__dot pengajuan-berhasil__dot--active" />
            <span className="pengajuan-berhasil__dot pengajuan-berhasil__dot--mid" />
            <span className="pengajuan-berhasil__dot" />
          </div>
          <span className="pengajuan-berhasil__waiting-text">Menunggu respon relawan..</span>
          <Card variant="bordered" padding="sm" className="pengajuan-berhasil__notice">
            <Bell size={14} />
            <span>Anda akan mendapat notifikasi saat relawan merespons</span>
          </Card>
        </div>

        <div className="pengajuan-berhasil__actions animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button id="btn-view-riwayat" variant="primary" fullWidth icon={<ArrowRight size={16} />} iconPosition="right" onClick={() => navigate('/riwayat')}>
            Lihat Riwayat Tiket
          </Button>
          <Button id="btn-back-home" variant="ghost" fullWidth icon={<Home size={16} />} onClick={() => navigate('/dashboard')}>
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
}

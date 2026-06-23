import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Star } from 'lucide-react';
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
          <h2>Bantuan Selesai!</h2>
          <p>Terima kasih atas partisipasinya</p>
        </div>

        <Card padding="md" className="pengajuan-berhasil__info animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="pengajuan-berhasil__row">
            <span className="pengajuan-berhasil__label">ID TIKET</span>
            <span className="pengajuan-berhasil__value text-primary">#{ticketId}</span>
          </div>
          <div className="pengajuan-berhasil__row">
            <span className="pengajuan-berhasil__label-sm">Durasi Sesi</span>
            <span className="pengajuan-berhasil__value-sm font-bold">12 menit</span>
          </div>
          <div className="pengajuan-berhasil__row">
            <span className="pengajuan-berhasil__label-sm">Status</span>
            <span className="pengajuan-berhasil__value-sm text-primary font-bold">Selesai</span>
          </div>
        </Card>

        <Card padding="md" className="pengajuan-berhasil__rating animate-fade-in-up" style={{ animationDelay: '0.15s', marginBottom: '20px' }}>
          <div className="pengajuan-berhasil__rating-label" style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '12px' }}>Beri Penilaian Sesi Ini</div>
          <div className="pengajuan-berhasil__stars" style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} className="pengajuan-berhasil__star" aria-label={`${star} bintang`} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
                <Star size={32} fill={star <= 4 ? 'var(--color-primary)' : 'none'} stroke="var(--color-primary)" />
              </button>
            ))}
          </div>
        </Card>

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

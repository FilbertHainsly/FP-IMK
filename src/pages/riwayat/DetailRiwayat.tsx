import { useNavigate } from 'react-router-dom';
import { Star, CheckCircle } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './DetailRiwayat.css';

export default function DetailRiwayat() {
  const navigate = useNavigate();

  return (
    <div className="detail-riwayat" id="detail-riwayat-page">
      <Navbar showBack />
      <div className="detail-riwayat__content">
        <div className="detail-riwayat__hero animate-fade-in-scale">
          <div className="detail-riwayat__avatar"><CheckCircle size={36} /></div>
          <h2>Bantuan Selesai!</h2>
          <p>Terima kasih telah membantu</p>
        </div>

        <Card padding="md" className="detail-riwayat__summary animate-fade-in-up">
          <div className="detail-riwayat__summary-row">
            <span>Durasi Sesi</span>
            <span className="font-bold">8 menit</span>
          </div>
          <div className="detail-riwayat__summary-row">
            <span>Relawan</span>
            <span className="font-bold">Ahmad R.</span>
          </div>
          <div className="detail-riwayat__summary-row">
            <span>Tanggal</span>
            <span className="font-bold">5 Jun 2026</span>
          </div>
        </Card>

        <Card padding="md" className="detail-riwayat__rating animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="detail-riwayat__rating-label">Beri Penilaian Sesi Ini</div>
          <div className="detail-riwayat__stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} className="detail-riwayat__star" aria-label={`${star} bintang`}>
                <Star size={28} fill={star <= 4 ? 'var(--color-primary)' : 'none'} stroke="var(--color-primary)" />
              </button>
            ))}
          </div>
        </Card>

        <Button id="btn-back-dashboard" variant="primary" fullWidth onClick={() => navigate('/dashboard')}>
          Kembali ke Dashboard
        </Button>
      </div>
    </div>
  );
}

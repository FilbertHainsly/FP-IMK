import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Mail } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './MenungguVerifikasi.css';

export default function MenungguVerifikasi() {
  const navigate = useNavigate();
  const { setVerified } = useAuth();

  const handleSimulateVerified = () => {
    setVerified(true);
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="menunggu-page" id="menunggu-verifikasi-page">
      <Navbar showBack />

      <div className="menunggu-page__content">
        <div className="menunggu-page__hero animate-fade-in-scale">
          <div className="menunggu-page__avatar">
            <Clock size={32} />
          </div>
          <h2>Sedang Diverifikasi</h2>
          <p>
            Permintaan pendaftaran Tunanetra Anda sedang dalam proses
            verifikasi oleh tim kami.
          </p>
        </div>

        <Card padding="md" className="menunggu-page__info animate-fade-in-up">
          <div className="menunggu-page__info-row">
            <span className="menunggu-page__info-label">Status</span>
            <span className="menunggu-page__info-value menunggu-page__info-value--primary">Menunggu Verifikasi</span>
          </div>
          <div className="menunggu-page__info-row">
            <span className="menunggu-page__info-label">Estimasi Waktu</span>
            <span className="menunggu-page__info-value">1 × 24 jam</span>
          </div>
          <div className="menunggu-page__info-row">
            <span className="menunggu-page__info-label">Nomor Referensi</span>
            <span className="menunggu-page__info-value menunggu-page__info-value--secondary">#VRF-2024-7823</span>
          </div>
        </Card>

        <div className="menunggu-page__steps animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="menunggu-page__step menunggu-page__step--done">
            <CheckCircle size={18} />
            <span>Data KTP Anda telah diterima</span>
          </div>
          <div className="menunggu-page__step menunggu-page__step--pending">
            <Clock size={18} />
            <span>Tim kami sedang memverifikasi identitas Anda</span>
          </div>
          <div className="menunggu-page__step menunggu-page__step--pending">
            <Mail size={18} />
            <span>Notifikasi dikirim ke email setelah verifikasi selesai</span>
          </div>
        </div>

        <p className="menunggu-page__support">
          Jika verifikasi membutuhkan waktu lebih lama, silakan hubungi tim support kami di{' '}
          <strong className="text-primary">support@temannetra.id</strong>
        </p>

        <Button
          id="simulate-verified"
          variant="outline"
          fullWidth
          onClick={handleSimulateVerified}
          size="sm"
        >
          (Demo) Simulasi Terverifikasi
        </Button>
      </div>
    </div>
  );
}

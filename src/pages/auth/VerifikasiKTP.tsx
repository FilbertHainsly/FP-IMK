import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Upload, Camera, Info } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';
import './VerifikasiKTP.css';

export default function VerifikasiKTP() {
  const navigate = useNavigate();
  const [ktpNumber, setKtpNumber] = useState('');
  const [ktpUploaded, setKtpUploaded] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);

  const isComplete = ktpNumber.length === 16 && ktpUploaded && selfieUploaded;

  const handleSubmit = () => {
    if (isComplete) {
      navigate('/menunggu-verifikasi', { replace: true });
    }
  };

  return (
    <div className="verifikasi-page" id="verifikasi-ktp-page">
      <Navbar showBack />

      <div className="verifikasi-page__content">
        <div className="verifikasi-page__header animate-fade-in-up">
          <div className="verifikasi-page__icon-circle">
            <ShieldCheck size={28} />
          </div>
          <h2>Verifikasi Identitas</h2>
          <p>Lengkapi data berikut untuk verifikasi akun Tunanetra Anda</p>
        </div>

        <Card variant="bordered" padding="md" className="verifikasi-page__notice">
          <div className="verifikasi-page__notice-content">
            <Info size={16} className="verifikasi-page__notice-icon" />
            <p>
              Verifikasi ini melindungi komunitas Tunanetra dari penyalahgunaan.
              Data KTP hanya digunakan untuk keperluan verifikasi identitas.
            </p>
          </div>
        </Card>

        <div className="verifikasi-page__form animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Input
            id="ktp-number"
            label="NOMOR KTP (16 DIGIT)"
            placeholder="Masukkan 16 digit nomor KTP"
            value={ktpNumber}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, '').slice(0, 16);
              setKtpNumber(v);
            }}
            maxLength={16}
          />

          <div className="verifikasi-page__upload-section">
            <label className="verifikasi-page__upload-label">FOTO KTP</label>
            <button
              className={`verifikasi-page__upload-btn ${ktpUploaded ? 'verifikasi-page__upload-btn--done' : ''}`}
              onClick={() => setKtpUploaded(true)}
              type="button"
            >
              <Upload size={20} />
              <span>{ktpUploaded ? 'KTP Terunggah ✓' : 'Upload Foto KTP'}</span>
            </button>
          </div>

          <div className="verifikasi-page__upload-section">
            <label className="verifikasi-page__upload-label">SELFIE DENGAN KTP</label>
            <button
              className={`verifikasi-page__upload-btn ${selfieUploaded ? 'verifikasi-page__upload-btn--done' : ''}`}
              onClick={() => setSelfieUploaded(true)}
              type="button"
            >
              <Camera size={20} />
              <span>{selfieUploaded ? 'Selfie Terunggah ✓' : 'Ambil Foto Selfie + KTP'}</span>
            </button>
          </div>

          <Button
            id="submit-verifikasi"
            variant="primary"
            fullWidth
            disabled={!isComplete}
            onClick={handleSubmit}
          >
            {isComplete ? 'Kirim Verifikasi' : 'Lengkapi Data di Atas'}
          </Button>
        </div>
      </div>
    </div>
  );
}

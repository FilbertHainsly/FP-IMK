import { useNavigate } from 'react-router-dom';
import { CheckCircle, Volume2, RotateCcw } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './HasilAnalisis.css';

export default function HasilAnalisis() {
  const navigate = useNavigate();

  return (
    <div className="hasil-analisis" id="hasil-analisis-page">
      <Navbar showBack />
      <div className="hasil-analisis__content">
        <div className="hasil-analisis__image animate-fade-in">
          <div className="hasil-analisis__image-placeholder">
            <CheckCircle size={36} className="text-success" />
            <span>Gambar Teranalisis</span>
          </div>
        </div>

        <Card padding="md" className="hasil-analisis__result animate-fade-in-up">
          <h3>Hasil Deteksi</h3>
          <div className="hasil-analisis__tags">
            <span className="hasil-analisis__tag">Botol Obat</span>
            <span className="hasil-analisis__tag">Label Teks</span>
            <span className="hasil-analisis__tag">Paracetamol 500mg</span>
          </div>
          <div className="hasil-analisis__desc">
            <p>Terdeteksi: <strong>Botol obat Paracetamol 500mg</strong></p>
            <p>Dosis: Dewasa 1-2 tablet, 3x sehari sesudah makan.</p>
            <p>Kedaluwarsa: Desember 2027</p>
          </div>
        </Card>

        <div className="hasil-analisis__actions animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Button id="btn-read-aloud" variant="primary" fullWidth icon={<Volume2 size={16} />}>Bacakan Hasil</Button>
          <Button variant="outline" fullWidth icon={<RotateCcw size={16} />} onClick={() => navigate('/kamera-ai')}>Scan Ulang</Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/dashboard')}>Kembali ke Beranda</Button>
        </div>
      </div>
    </div>
  );
}

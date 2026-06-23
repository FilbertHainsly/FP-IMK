import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Send, X } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './FormPengajuan.css';

export default function FormPengajuan() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [description, setDescription] = useState('');

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setRecorded(true);
      setDescription('Saya membutuhkan bantuan untuk membaca label obat di apotek.');
    } else {
      setIsRecording(true);
    }
  };

  const handleSubmit = () => {
    navigate('/bantuan/berhasil', { replace: true });
  };

  return (
    <div className="form-pengajuan" id="form-pengajuan-page">
      <Navbar showBack />
      <div className="form-pengajuan__content">
        <div className="form-pengajuan__header animate-fade-in">
          <h2>Minta Bantuan</h2>
          <p>Tekan mikrofon dan sebutkan bantuan yang Anda butuhkan.</p>
        </div>

        <div className="form-pengajuan__mic-area animate-fade-in-scale">
          <button
            className={`form-pengajuan__mic-btn ${isRecording ? 'form-pengajuan__mic-btn--recording' : ''} ${recorded ? 'form-pengajuan__mic-btn--done' : ''}`}
            onClick={handleRecord}
            aria-label={isRecording ? 'Stop recording' : 'Start recording'}
          >
            {isRecording ? <MicOff size={36} /> : <Mic size={36} />}
          </button>
          <span className="form-pengajuan__mic-label">
            {isRecording ? 'Merekam... Tekan untuk berhenti' : recorded ? 'Pesan suara terekam!' : 'Tekan untuk mulai berbicara'}
          </span>
        </div>

        {recorded && (
          <Card padding="md" className="form-pengajuan__preview animate-fade-in-up">
            <div className="form-pengajuan__preview-label">Hasil Transkripsi:</div>
            <p className="form-pengajuan__preview-text">{description}</p>
          </Card>
        )}

        <div className="form-pengajuan__actions">
          <Button
            id="btn-submit-request"
            variant="primary"
            fullWidth
            icon={<Send size={16} />}
            disabled={!recorded}
            onClick={handleSubmit}
          >
            Kirim Permintaan
          </Button>
          <Button
            id="btn-cancel-request"
            variant="secondary"
            fullWidth
            icon={<X size={16} />}
            onClick={() => navigate(-1)}
          >
            Batal
          </Button>
        </div>
      </div>
    </div>
  );
}

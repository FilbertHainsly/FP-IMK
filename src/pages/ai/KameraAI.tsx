import { useNavigate } from 'react-router-dom';
import { Camera, SwitchCamera, Zap, Focus } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import './KameraAI.css';

export default function KameraAI() {
  const navigate = useNavigate();

  return (
    <div className="kamera-ai" id="kamera-ai-page">
      <Navbar showBack />
      <div className="kamera-ai__viewport">
        <div className="kamera-ai__placeholder">
          <Focus size={48} className="kamera-ai__focus-icon" />
          <p>Arahkan kamera ke objek atau teks</p>
        </div>
        <div className="kamera-ai__overlay">
          <div className="kamera-ai__corner kamera-ai__corner--tl" />
          <div className="kamera-ai__corner kamera-ai__corner--tr" />
          <div className="kamera-ai__corner kamera-ai__corner--bl" />
          <div className="kamera-ai__corner kamera-ai__corner--br" />
        </div>
      </div>
      <div className="kamera-ai__controls">
        <button className="kamera-ai__ctrl-btn" aria-label="Flash"><Zap size={22} /></button>
        <button className="kamera-ai__capture-btn" onClick={() => navigate('/hasil-analisis')} aria-label="Capture">
          <Camera size={28} />
        </button>
        <button className="kamera-ai__ctrl-btn" aria-label="Switch camera"><SwitchCamera size={22} /></button>
      </div>
    </div>
  );
}

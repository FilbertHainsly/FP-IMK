import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Play, Mic, MessageSquare, Send } from 'lucide-react';
import { api, type Ticket } from '../../services/api';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './StatusBantuan.css';

export default function StatusBantuan() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [replyMode, setReplyMode] = useState<'voice' | 'text' | null>(null);

  useEffect(() => {
    if (id) {
      api.getTicketDetail(id).then(setTicket);
    }
  }, [id]);

  if (!ticket) {
    return (
      <div className="status-bantuan">
        <Navbar showBack />
        <div className="status-bantuan__loading"><div className="status-bantuan__spinner" /></div>
      </div>
    );
  }

  return (
    <div className="status-bantuan" id="status-bantuan-page">
      <Navbar showBack />
      <div className="status-bantuan__content">
        
        {/* Status Card */}
        <Card variant="elevated" padding="md" className="status-bantuan__progress-card animate-fade-in-up">
          <div className="status-bantuan__timeline">
            <div className="status-bantuan__step active">
              <div className="status-bantuan__step-circle"></div>
              <span className="status-bantuan__step-label">Menunggu</span>
            </div>
            <div className="status-bantuan__step-line active"></div>
            <div className="status-bantuan__step active">
              <div className="status-bantuan__step-circle"></div>
              <span className="status-bantuan__step-label">Sedang Membantu</span>
            </div>
            <div className="status-bantuan__step-line"></div>
            <div className="status-bantuan__step">
              <div className="status-bantuan__step-circle"></div>
              <span className="status-bantuan__step-label">Selesai</span>
            </div>
          </div>
        </Card>

        {/* Profile Card */}
        <div className="status-bantuan__profile animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="status-bantuan__profile-avatar">
            <User size={24} />
          </div>
          <div className="status-bantuan__profile-info">
            <div className="status-bantuan__profile-name">{ticket.userName}</div>
            <div className="status-bantuan__profile-meta">
              <span>200m jauhnya</span>
              <span>•</span>
              <span>3 menit lalu</span>
            </div>
          </div>
          <div className="status-bantuan__profile-status">Aktif</div>
        </div>

        {/* Voice Message & Transcription */}
        <Card padding="md" className="status-bantuan__voice-card animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="status-bantuan__voice-header">Pesan Suara Pengguna</div>
          <div className="status-bantuan__voice-player">
            <div className="status-bantuan__play-btn">
              <Play size={16} fill="currentColor" />
            </div>
            <div className="status-bantuan__waveform">
              {[...Array(20)].map((_, idx) => (
                <div key={idx} className="status-bantuan__waveform-bar" style={{ height: `${Math.max(20, Math.random() * 100)}%` }} />
              ))}
            </div>
            <div className="status-bantuan__voice-time">0:12</div>
          </div>
          <div className="status-bantuan__transcription">
            <strong>Hasil Transkripsi:</strong> "Tolong arahkan saya ke pintu masuk minimarket di depan saya."
          </div>
        </Card>

        {/* Reply Card */}
        <Card padding="md" className="status-bantuan__reply-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="status-bantuan__reply-header">Kirim Suara / Teks</div>
          
          {!replyMode ? (
            <div className="status-bantuan__reply-actions">
              <button className="status-bantuan__reply-btn" onClick={() => setReplyMode('voice')}>
                <Mic size={20} />
                <span>Rekam Suara</span>
              </button>
              <button className="status-bantuan__reply-btn outline" onClick={() => setReplyMode('text')}>
                <MessageSquare size={20} />
                <span>Tulis Teks</span>
              </button>
            </div>
          ) : replyMode === 'voice' ? (
            <div className="status-bantuan__reply-active">
              <div className="status-bantuan__reply-voice-ui">
                <div className="status-bantuan__reply-voice-timer">00:00</div>
                <button className="status-bantuan__mic-btn-large">
                  <Mic size={24} />
                </button>
                <div className="status-bantuan__reply-voice-status">Ketuk untuk merekam</div>
              </div>
              <button className="status-bantuan__reply-cancel-text" onClick={() => setReplyMode(null)}>Batal</button>
            </div>
          ) : (
            <div className="status-bantuan__reply-active">
              <div className="status-bantuan__reply-text-ui">
                <input type="text" className="status-bantuan__reply-input" placeholder="Ketik pesan Anda..." />
                <button className="status-bantuan__reply-send-btn">
                  <Send size={18} />
                </button>
              </div>
              <button className="status-bantuan__reply-cancel-text" onClick={() => setReplyMode(null)}>Batal</button>
            </div>
          )}
        </Card>

        <div className="status-bantuan__actions animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          <Button 
            id="btn-finish" 
            variant="primary" 
            fullWidth 
            onClick={() => navigate('/bantuan/berhasil')}
          >
            Selesaikan Bantuan
          </Button>
          <Button 
            id="btn-cancel" 
            variant="danger" 
            fullWidth 
            onClick={() => navigate(-1)}
          >
            Batalkan Bantuan
          </Button>
        </div>

      </div>
    </div>
  );
}

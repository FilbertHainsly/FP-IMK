import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Mic, Check, ChevronRight } from 'lucide-react';
import { api, type Ticket } from '../../services/api';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './RekamBantuan.css';

export default function RekamBantuan() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    if (id) {
      api.getTicketDetail(id).then(setTicket);
    }
  }, [id]);

  if (!ticket) {
    return (
      <div className="rekam-bantuan">
        <Navbar showBack />
        <div className="rekam-bantuan__loading"><div className="rekam-bantuan__spinner" /></div>
      </div>
    );
  }

  return (
    <div className="rekam-bantuan" id="rekam-bantuan-page">
      <Navbar showBack />
      <div className="rekam-bantuan__content">
        <div className="rekam-bantuan__top animate-fade-in">
          <span className="rekam-bantuan__ticket-label">TIKET #{id?.padStart(3, '0')}</span>
          <h2>Beri Bantuan</h2>
        </div>

        <Card variant="elevated" padding="md" className="rekam-bantuan__card animate-fade-in-up">
          <h3 className="rekam-bantuan__card-title">Permintaan Bantuan</h3>
          <div className="rekam-bantuan__requester">
            <div className="rekam-bantuan__requester-avatar">
              <User size={20} />
            </div>
            <div>
              <div className="rekam-bantuan__requester-name">{ticket.userName}</div>
            </div>
          </div>
          <div className="rekam-bantuan__card-desc">
            "{ticket.description}"
          </div>
        </Card>

        <div className="rekam-bantuan__recorder animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="rekam-bantuan__timer">00:00</div>
          <div className="rekam-bantuan__status">Siap Merekam</div>
          
          <button className="rekam-bantuan__mic-btn">
            <Mic size={32} />
          </button>

          <div className="rekam-bantuan__waveform">
            {[...Array(16)].map((_, idx) => (
              <div 
                key={idx} 
                className="rekam-bantuan__waveform-bar" 
                style={{ height: '4px' }}
              />
            ))}
          </div>
        </div>

        <div className="rekam-bantuan__actions animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            id="btn-listen" 
            variant="outline" 
            fullWidth 
            icon={<Check size={18} />} 
          >
            Dengarkan Ulang
          </Button>
          <Button 
            id="btn-send" 
            variant="primary" 
            fullWidth 
            icon={<ChevronRight size={18} />} 
            onClick={() => navigate(`/bantuan/${id}/status`)}
          >
            Kirim Jawaban
          </Button>
        </div>
      </div>
    </div>
  );
}

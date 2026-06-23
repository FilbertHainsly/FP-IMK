import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Volume2, Play } from 'lucide-react';
import { api, type Ticket } from '../../services/api';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import StatusBadge from '../../components/StatusBadge/StatusBadge';
import './DetailBantuan.css';

export default function DetailBantuan() {
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
      <div className="detail-bantuan">
        <Navbar showBack />
        <div className="detail-bantuan__loading"><div className="detail-bantuan__spinner" /></div>
      </div>
    );
  }

  return (
    <div className="detail-bantuan" id="detail-bantuan-page">
      <Navbar showBack />
      <div className="detail-bantuan__content">
        <div className="detail-bantuan__top animate-fade-in">
          <div className="detail-bantuan__top-left">
            <span className="detail-bantuan__ticket-label">TIKET #{id?.padStart(3, '0')}</span>
            <h2>Detail Permintaan</h2>
          </div>
          <StatusBadge status={ticket.status} size="md" />
        </div>

        <Card variant="elevated" padding="md" className="detail-bantuan__requester animate-fade-in-up">
          <div className="detail-bantuan__requester-inner">
            <div className="detail-bantuan__requester-avatar">
              <User size={20} />
            </div>
            <div>
              <span className="detail-bantuan__requester-label">PEMOHON</span>
              <div className="detail-bantuan__requester-name">{ticket.userName}</div>
              <div className="detail-bantuan__requester-since">Anggota sejak 2023</div>
            </div>
          </div>
        </Card>

        <div className="detail-bantuan__voice animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="detail-bantuan__voice-header">
            <Volume2 size={14} />
            <span>PESAN SUARA</span>
          </div>
          <Card padding="md" className="detail-bantuan__voice-player">
            <div className="detail-bantuan__player-inner">
              <button className="detail-bantuan__play-btn" aria-label="Play">
                <Play size={16} fill="currentColor" />
              </button>
              <div className="detail-bantuan__player-track">
                <div className="detail-bantuan__player-bar">
                  <div className="detail-bantuan__player-progress" />
                </div>
                <div className="detail-bantuan__player-time">
                  <span>0:00</span>
                  <span>0:45</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card padding="md" className="detail-bantuan__location animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="detail-bantuan__location-label" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-text-secondary)', marginBottom: '12px' }}>LOKASI PENJEMPUTAN</div>
          <div className="detail-bantuan__location-map" style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '12px' }}>
            <img src="/dummy-map.png" alt="Map Lokasi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="detail-bantuan__location-address">
            <div className="detail-bantuan__location-street" style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>Jl. Sukamaju No. 123, Blok A</div>
            <div className="detail-bantuan__location-city" style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Kecamatan Sukabumi, Kota Maju</div>
          </div>
        </Card>

        <div className="detail-bantuan__actions animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button id="btn-accept" variant="primary" fullWidth onClick={() => navigate(`/bantuan/${id}/rekam`)}>
            Terima & Bantu Sekarang
          </Button>
          <Button id="btn-skip" variant="secondary" fullWidth onClick={() => navigate(-1)}>
            Lewati
          </Button>
        </div>
      </div>
    </div>
  );
}

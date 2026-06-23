import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Eye } from 'lucide-react';
import { api, type Ticket } from '../../services/api';
import StatusBadge from '../../components/StatusBadge/StatusBadge';
import './DaftarBantuan.css';

export default function DaftarBantuan() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getActiveTickets().then((data) => {
      setTickets(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="daftar-bantuan" id="daftar-bantuan-page">
      <div className="daftar-bantuan__header animate-fade-in">
        <div>
          <h2>Permintaan Aktif</h2>
          <span className="daftar-bantuan__count">{tickets.length} permintaan mendekat</span>
        </div>
        <div className="daftar-bantuan__live">
          <span className="daftar-bantuan__live-dot" />
          <span>LIVE</span>
        </div>
      </div>

      <div className="daftar-bantuan__list">
        {loading ? (
          <div className="daftar-bantuan__loading">
            {[1, 2, 3].map((i) => (
              <div key={i} className="daftar-bantuan__skeleton" />
            ))}
          </div>
        ) : (
          tickets.map((ticket, i) => (
            <button
              key={ticket.id}
              className="daftar-bantuan__item animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => navigate(`/bantuan/${ticket.id}`)}
            >
              <div className="daftar-bantuan__item-avatar">
                <Eye size={18} />
              </div>
              <div className="daftar-bantuan__item-body">
                <div className="daftar-bantuan__item-top">
                  <div>
                    <div className="daftar-bantuan__item-name">{ticket.userName}</div>
                    <div className="daftar-bantuan__item-id">ID: {ticket.ticketId}</div>
                  </div>
                  <StatusBadge status={ticket.status} />
                </div>
                <div className="daftar-bantuan__item-meta">
                  <span><MapPin size={12} /> {ticket.distance}</span>
                  <span><Clock size={12} /> {ticket.timeAgo}</span>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

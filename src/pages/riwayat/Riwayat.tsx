import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User as UserIcon, Calendar, Clock } from 'lucide-react';
import { api, type HistoryItem } from '../../services/api';
import StatusBadge from '../../components/StatusBadge/StatusBadge';
import './Riwayat.css';

export default function Riwayat() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getHistory().then((data) => { setHistory(data); setLoading(false); });
  }, []);

  const selesai = history.filter(h => h.status === 'selesai').length;
  const dibatalkan = history.filter(h => h.status === 'dibatalkan').length;
  const totalMinutes = history.filter(h => h.status === 'selesai').reduce((sum, h) => sum + parseInt(h.duration) || 0, 0);

  return (
    <div className="riwayat" id="riwayat-page">
      <div className="riwayat__header animate-fade-in">
        <h2>Riwayat Bantuan</h2>
        <span className="riwayat__count">{history.length} sesi bantuan</span>
      </div>

      <div className="riwayat__stats animate-fade-in-up">
        <div className="riwayat__stat riwayat__stat--success">
          <span className="riwayat__stat-value">{selesai}</span>
          <span className="riwayat__stat-label">Selesai</span>
        </div>
        <div className="riwayat__stat riwayat__stat--danger">
          <span className="riwayat__stat-value">{dibatalkan}</span>
          <span className="riwayat__stat-label">Dibatalkan</span>
        </div>
        <div className="riwayat__stat riwayat__stat--primary">
          <span className="riwayat__stat-value">{totalMinutes} mnt</span>
          <span className="riwayat__stat-label">Total Waktu</span>
        </div>
      </div>

      <div className="riwayat__list">
        {loading ? (
          [1, 2, 3].map(i => <div key={i} className="riwayat__skeleton" />)
        ) : (
          history.map((item, i) => (
            <button
              key={item.id}
              className="riwayat__item animate-fade-in-up"
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => navigate(`/riwayat/${item.id}`)}
            >
              <div className="riwayat__item-top">
                <div>
                  <div className="riwayat__item-title">{item.title}</div>
                  <div className="riwayat__item-ticket">Tiket {item.ticketId}</div>
                </div>
                <StatusBadge status={item.status} />
              </div>
              <div className="riwayat__item-meta">
                <span className="riwayat__item-relawan"><UserIcon size={12} /> {item.relawan}</span>
                <span className="riwayat__item-date"><Calendar size={12} /> {item.date}</span>
                {item.duration !== '-' && (
                  <span className="riwayat__item-duration"><Clock size={10} /> {item.duration}</span>
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { Eye, Heart, Scan, MessageSquare, Play } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const isTunanetra = user?.role === 'tunanetra';

  return (
    <div className="dashboard" id="dashboard-page">
      <div className="dashboard__greeting animate-fade-in-up">
        <h2>Halo, {user?.name || 'User'}</h2>
        <p>{isTunanetra ? 'Pilih bantuan yang Anda perlukan.' : 'Bantu sesama yang membutuhkan.'}</p>
      </div>

      {isTunanetra ? (
        <div className="dashboard__cards animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <button
            className="dashboard__card dashboard__card--primary"
            onClick={() => navigate('/kamera-ai')}
            id="btn-ai-visual"
          >
            <div className="dashboard__card-icon">
              <Scan size={36} />
            </div>
            <div className="dashboard__card-title">ASISTEN VISUAL AI</div>
            <div className="dashboard__card-subtitle">Deteksi Objek & Teks</div>
          </button>

          <button
            className="dashboard__card dashboard__card--secondary"
            onClick={() => navigate('/bantuan/ajukan')}
            id="btn-minta-bantuan"
          >
            <div className="dashboard__card-icon">
              <Heart size={36} />
            </div>
            <div className="dashboard__card-title">MINTA BANTUAN RELAWAN</div>
            <div className="dashboard__card-subtitle">Panggilan Video Langsung</div>
          </button>
        </div>
      ) : (
        <div className="dashboard__relawan animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="dashboard__relawan-header">
            <div>
              <h3>Permintaan Aktif</h3>
              <span className="dashboard__relawan-count">3 permintaan mendekat</span>
            </div>
            <div className="dashboard__live-indicator">
              <span className="dashboard__live-dot" />
              <span className="dashboard__live-text">LIVE</span>
            </div>
          </div>

          {[
            { name: 'User A', id: 'TN-001', dist: '200m jauhnya', time: '3 menit lalu', vnDuration: '0:12' },
            { name: 'User B', id: 'TN-002', dist: '450m jauhnya', time: '7 menit lalu', vnDuration: '0:08' },
            { name: 'User C', id: 'TN-003', dist: '1.2km jauhnya', time: '12 menit lalu', vnDuration: '0:24' },
          ].map((ticket, i) => (
            <div
              key={ticket.id}
              className="dashboard__ticket animate-fade-in-up"
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              <div className="dashboard__ticket-top">
                <div className="dashboard__ticket-avatar">
                  <Eye size={18} />
                </div>
                <div className="dashboard__ticket-info">
                  <div className="dashboard__ticket-name">{ticket.name}</div>
                  <div className="dashboard__ticket-id">ID: {ticket.id}</div>
                </div>
              </div>
              
              <div className="dashboard__ticket-vn">
                <div className="dashboard__ticket-vn-play">
                  <Play size={16} fill="currentColor" />
                </div>
                <div className="dashboard__ticket-vn-waveform">
                  {[...Array(20)].map((_, idx) => (
                    <div 
                      key={idx} 
                      className="dashboard__ticket-vn-bar" 
                      style={{ height: `${Math.max(20, Math.random() * 100)}%`, opacity: idx > 6 ? 0.4 : 1 }} 
                    />
                  ))}
                </div>
                <div className="dashboard__ticket-vn-duration">{ticket.vnDuration}</div>
              </div>

              <div className="dashboard__ticket-meta">
                <span className="dashboard__ticket-dist">
                  <MessageSquare size={12} /> {ticket.dist}
                </span>
                <span className="dashboard__ticket-time">{ticket.time}</span>
              </div>
              
              <div className="dashboard__ticket-action" style={{ width: '100%', marginTop: '4px' }}>
                <button 
                  className="dashboard__ticket-btn" 
                  style={{ width: '100%', textAlign: 'center', border: 'none' }}
                  onClick={() => navigate(`/bantuan/${i + 1}`)}
                >
                  Bantu Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

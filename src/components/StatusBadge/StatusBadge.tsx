import './StatusBadge.css';

interface StatusBadgeProps {
  status: 'selesai' | 'menunggu' | 'dibatalkan' | 'aktif';
  size?: 'sm' | 'md';
}

const statusConfig = {
  selesai: { label: 'SELESAI', className: 'status-badge--success' },
  menunggu: { label: 'MENUNGGU', className: 'status-badge--warning' },
  dibatalkan: { label: 'DIBATALKAN', className: 'status-badge--danger' },
  aktif: { label: 'AKTIF', className: 'status-badge--active' },
};

export default function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`status-badge status-badge--${size} ${config.className}`}>
      {config.label}
    </span>
  );
}

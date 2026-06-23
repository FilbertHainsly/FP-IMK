import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  id?: string;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
  id,
}: CardProps) {
  return (
    <div
      id={id}
      className={`card card--${variant} card--p-${padding} ${onClick ? 'card--clickable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  id?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  onClick,
  className = '',
  id,
}: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </button>
  );
}

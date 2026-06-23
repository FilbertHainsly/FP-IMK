import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './Input.css';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  maxLength?: number;
  id?: string;
  name?: string;
  required?: boolean;
}

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  icon,
  error,
  hint,
  disabled = false,
  fullWidth = true,
  maxLength,
  id,
  name,
  required,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={`input-group ${fullWidth ? 'input-group--full' : ''} ${error ? 'input-group--error' : ''}`}>
      {label && (
        <label className="input-group__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-group__wrapper">
        {icon && <span className="input-group__icon">{icon}</span>}
        <input
          id={id}
          name={name}
          className="input-group__input"
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          required={required}
          autoComplete={isPassword ? 'current-password' : undefined}
        />
        {isPassword && (
          <button
            type="button"
            className="input-group__toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {(hint || error || maxLength) && (
        <div className="input-group__footer">
          {error && <span className="input-group__error">{error}</span>}
          {hint && !error && <span className="input-group__hint">{hint}</span>}
          {maxLength && value !== undefined && (
            <span className="input-group__counter">{value.length}/{maxLength}</span>
          )}
        </div>
      )}
    </div>
  );
}

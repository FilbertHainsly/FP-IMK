import { useEffect } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  id?: string;
}

export default function Modal({ isOpen, onClose, title, children, id }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} id={id}>
      <div className="modal animate-fade-in-scale" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="modal__header">
            <h3 className="modal__title">{title}</h3>
            <button className="modal__close" onClick={onClose} aria-label="Tutup">
              <X size={20} />
            </button>
          </div>
        )}
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}

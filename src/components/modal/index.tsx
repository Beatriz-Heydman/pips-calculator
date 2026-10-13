// Libs
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

// Components
import { Typography } from '../typography';

// Types
import type { ModalProps } from './types';

// Styles
import { StyledModal } from './styles';

export function Modal({
  title,
  description,
  icon,
  onClose,
  children,
}: ModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <StyledModal onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          {icon && <div className="modal-icon">{icon}</div>}

          <div className="modal-title">
            <Typography color="#020414" fontSize="1.5rem" fontWeight="700">
              {title}
            </Typography>

            {description && (
              <Typography color="#5b6480" fontSize="0.9rem" fontWeight="400">
                {description}
              </Typography>
            )}
          </div>

          <button
            type="button"
            className="modal-close"
            aria-label="Fechar"
            onClick={onClose}
          >
            <IoClose size={22} />
          </button>
        </div>

        {children}
      </div>
    </StyledModal>
  );
}

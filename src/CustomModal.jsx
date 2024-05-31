import { useEffect } from "react";
import { createPortal } from "react-dom";

export function CustomModal({ isOpen, onClose, children }) {
  useEffect(() => {
    function handler(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" aria-hidden={!isOpen}>
      <div className="modal">{children}</div>
    </div>,
    document.querySelector("#modal-container")
  );
}
